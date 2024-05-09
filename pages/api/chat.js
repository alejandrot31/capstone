//
//const {GoogleGenerativeAI} = require("@google/generative-ai");
const sqlite3 = require('sqlite3').verbose();
let geminiKey = "AIzaSyAg2LaLrNoF06lUy3TT840p83oRBy8d4Fw" //hide
let searchKey = "AIzaSyDjNyNVpk4x-NFOnNINkHk1RB6ocnrHYCc"
let cseID = "e453fe7e160e04f69";
//const genAI = new GoogleGenerativeAI(geminiKey)
//const model = genAI.getGenerativeModel({model: "gemini-pro"})
const conversationsdb = new sqlite3.Database('mydatabase.db');
import { GoogleCustomSearch } from "langchain/tools";
import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { Agent, AgentExecutor, createOpenAIFunctionsAgent } from "langchain/agents";

const tools = [
    new GoogleCustomSearch({
        name: "Search"
    })
];

const model = new ChatGoogleGenerativeAI({
    model:"gemini-pro",
    maxOutputTokens: 2048
})

const serverPrompt = ""
const agent = await createOpenAIFunctionsAgent({
    model,
    tools,
    serverPrompt
})

const agentExecutor = new AgentExecutor({
    agent,tools
})

async function PromptLLM(Prompt) {
    /*
    let result = await model.generateContent(Prompt);
    let response = await result.response;
    let Text = response.text();
    console.log(Text);

    return Text;
    */
    return await agentExecutor.invoke({input: Prompt});
}

export default async function handler(req, res) {
    let body = req.body;
    let prompt = body.message;
    console.log("Invoked");
    
    const result = await PromptLLM(prompt);
    console.log('Result:',result);

    res.status(200).json({ message: result });
  }
  