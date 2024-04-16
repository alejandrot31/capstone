
import Button from "./button"

export default function Nav(Params) {
    return (
      <nav className='bg-black border-solid border-b rounded-sm border-neutral-800 w-full text-white max-h-24'>
          <div className='flex'>
            <div className='w-1/2'> {/* Left */}
             <img className='p-4' src="#"/> 
            </div>
  
            <div className='w-1/2 flex items-center justify-end'> {/* Right */}
            <Button className="mr-4" Size='Small' Type="Outline"> <a href={'/Home'}> Home </a> </Button> 
          <Button className="mr-8" Type="Primary" Size="Small"> <a href={'/Search'}> Test </a> </Button>
                {Params.children}
            </div>
          </div>
      </nav>
    )
  }