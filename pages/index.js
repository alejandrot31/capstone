
import { useState } from 'react'
import Button from "../components/button"
import Nav from '../components/nav'
import Card from '../components/Card'


export default function Home() {
    return (<>
    <Nav>
    
    </Nav>
    
    <div className='w-full h-screen bg-black p-2'>
      <div className='flex text-white w-4/5 mx-16 my-8'>
        <div className='w-1/2'> 
          <h1 className='text-8xl FadeIn'> Large <span className='text-violet-600 drop-shadow-md gradient-text'> Text </span> </h1>
          <br/>
          <h4 className='font-light text-xl text-slate-300 FadeIn delay-250'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Interdum et malesuada fames ac ante ipsum primis in faucibus. 
          Vivamus pharetra commodo nisi ac euismod. 
          <br/>
        Sample Text <span className='underline decoration-indigo-500'>Important Text</span> Sample Text  
          </h4>

          <div className='my-32 w-full flex justify-start'>
            <Button className='text-2xl  ' Type="Primary" Size='Large'> <a href='/login'>Login</a> </Button>
            <Button className='text-2xl ' Size="Large" Type="Outline"> <a href='/register'> Signup </a> </Button>
          </div>
        </div>

        <div className='w-full flex mx-8 flex-wrap'>
            <Card> 
          
            </Card>
            <Card> </Card>
            <Card> </Card>
        </div>
      </div>
    </div>

  </>)
}