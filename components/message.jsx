import { motion } from 'framer-motion';
import LoadingCircle from './loading';

export default function Message({ text, type, header,loading }) {
  const isUser = type === 'User';
  header=header || {};
  console.log("Loading:",loading);
  const messageClass = `p-2 my-1 rounded-lg ${
    isUser ? 'bg-opacity-100 border border-gray-700 text-white self-end' : 'bg-purple-500 text-white self-start'
  }`;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y:0 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ 
        bounce: 1,
        duration: .2,
        opacity: {duration: .3}
        }}
      className={messageClass}
      style={{
        filter: isUser ? 'none' : 'drop-shadow(0px 0px 5px rgba(100, 0, 255, 0.7))',
      }}
    >
    <div className='m-0 p-0 flex justify-between'> 
    <img className='h-5 w-5' src={header.Profile || "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"}/> 
    <b> {header.Name || "You"} </b> </div>

      {loading ? <LoadingCircle/> : text}
    </motion.div>
  );
}
