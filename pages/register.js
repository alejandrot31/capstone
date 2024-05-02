import Nav from "@/components/nav"
import { motion } from 'framer-motion';
import { easeIn } from 'framer-motion';
import Button from "@/components/button";
import FormInput from "@/components/formInputField";
import { useState } from "react";

export default function Register() {


    return (
        <>
            <Nav></Nav>

            <div className='w-full h-screen flex justify-center items-center bg-black'>
                
                <motion.form 
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.05, ease: "backOut" }}
                    className='bg-gray-800 border border-gray-800 w-1/2 p-8 rounded-lg shadow-lg'>
                    
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
                            <FormInput placeholder="Enter your username..." accentColor="border-green-500">  </FormInput>
                            <p className="px-2 text-sm text-green-500"> Username is valid </p>
                        </div>
                    </motion.div>
                    
         
                    
                    <motion.div 
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "backOut"  }}
                        className='mb-4'>
                        <label htmlFor='password' className='block text-sm font-medium text-gray-300'>Password</label>
                        <div>
                            <FormInput password={true} placeholder="Enter your password..." accentColor="border-green-500">  </FormInput>
                            <p className="px-2 text-sm text-green-500"> Username is valid </p>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: .25, ease: "backOut"  }}
                        className='flex justify-end'>
                        <Button>Register</Button>
                    </motion.div>
                </motion.form>
            </div>
        </>
    );
}
