import Nav from "@/components/nav"
import { motion } from 'framer-motion';
import { easeIn } from 'framer-motion';
import Button from "@/components/button";
import FormInput from "@/components/formInputField";
import { useState } from "react";

export default function Register() {
    const [usernameIsValid,setUsernameIsValid] = useState(false)
    const [usernameError,setUsernameError] = useState("")

    const [passwordIsValid,setPasswordIsValid] = useState(false)
    const [passwordError,setPasswordError] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    return (
        <>
            <Nav></Nav>

            <div className='w-full h-screen flex justify-center items-center bg-black'>
                
                <motion.form 
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.05, ease: "backOut" }}
                    className='bg-gray-800 border border-gray-800 w-1/2 p-8 rounded-lg shadow-lg'
                    onSubmit={handleSubmit}
                    >
                    

                    <motion.h2 
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.05, ease: "backOut"  }}
                        className='text-white text-2xl font-bold mb-4'>
                            Sign up<span className="text-violet-600">.</span> 
                            <br></br>
                            <span className="font-light text-sm text-slate-300"> Already have an account? <a href="/login"> Login </a> </span>
                        </motion.h2>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: "backOut"  }}
                        className='mb-4'>
                        <label htmlFor='name' className='block text-sm font-medium text-gray-300'>Username</label>
                        <div>
                            <FormInput 
                             placeholder="Enter your Username..." 
                             accentColor={`${usernameIsValid ? 'text-green-500 border-green-500' : 'text-red-500 border-red-500'}`}
                             onChange={(e)=> {
                                 setUsernameIsValid(true);
                             }}>  
                            
                            </FormInput>
                            <p className={`px-2 text-sm ${usernameIsValid ? 'text-green-500' : 'text-red-500'} `}> {`${usernameIsValid ? 'Username is valid' : usernameError}`} </p>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "backOut"  }}
                        className='mb-4'>
                        <label htmlFor='password' className='block text-sm font-medium text-gray-300'>Password</label>
                        <div>
                            <FormInput 
                            password={true} 
                            placeholder="Enter your password..." 
                            accentColor={`${passwordIsValid ? 'text-green-500 border-green-500' : 'text-red-500 border-red-500'}`}
                            onChange={(e)=> {
                                console.log("Changed....");
                                setPasswordIsValid(e.target.value.length >= 6);
                                setPasswordError(e.target.value.length >= 6 ? '' : 'Password must be at least 6 characters');
                            }}
                            >  
                            
                            </FormInput>
                            <p className={`px-2 text-sm ${passwordIsValid ? 'text-green-500' : 'text-red-500'} `}> {`${passwordIsValid ? 'Password is valid' : passwordError}`} </p>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: .25, ease: "backOut"  }}
                        className='flex justify-end'>
                        <Button type="submit">Register</Button>
                    </motion.div>
                </motion.form>
            </div>
        </>
    );
}
