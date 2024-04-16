import { useState } from 'react';
import { motion } from 'framer-motion';
import Nav from '../components/nav';
import Message from '../components/message';
import InputField from '../components/inputField';

export default function ChatPage() {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const sendMessage = async () => {
        if (!inputValue.trim()) return;

        try {
       //     setMessages([...messages, { text: inputValue, type: 'User' }, { text: 'Hello World', header: {Name: "Test", Profile: ""}, type: 'AI', loading: true}]);
            setInputValue('');

            let request = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: inputValue })
            })

            if (request.ok) {
                let data = await request.json();
                console.log("Data:",data);
                setMessages([...messages, { text: inputValue, type: 'User' }, { text: data.message, header: { Name: "Test", Profile: "" }, type: 'AI', loading: false }]);
            }
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <>
            <Nav />
            <div className='flex'>
                <motion.div
                    initial={{ x: '-100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className='bg-gray-900 w-48'
                >
                    <p> _ </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                    className='w-4/6 m-auto p-2 overflow-hidden flex flex-col' style={{ height: 90 + 'vh' }}
                >
                    <div className="h-5/6 overflow-y-scroll flex flex-col" style={{ maxHeight: 'calc(100% - 4rem)' }}>
                        {messages.map((message, index) => (
                            <Message 
                                key={index} 
                                text={message.text} 
                                type={message.type} 
                                header={message.header}
                                loading={message.loading}
                                />
                        ))}
                    </div>
                    <InputField
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onEnter={sendMessage}
                    />
                </motion.div>
            </div>
        </>
    );
}
