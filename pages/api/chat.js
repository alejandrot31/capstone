//
const {GoogleGenerativeAI} = require("@google/generative-ai")
let key = "AIzaSyAg2LaLrNoF06lUy3TT840p83oRBy8d4Fw" //hide
const genAI = new GoogleGenerativeAI(key)
const model = genAI.getGenerativeModel({model: "gemini-pro"})

async function PromptLLM(Prompt) {
    let result = await model.generateContent(Prompt);
    let response = await result.response;
    let Text = response.text();
    console.log(Text);

    return Text;
}

export default async function handler(req, res) {
    let body = req.body;
    let prompt = body.message;
    
    const result = await PromptLLM(prompt);
    console.log('Result:',result);

    res.status(200).json({ message: result });
  }
  