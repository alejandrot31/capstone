

export default function Button(Params) {
    let className = Params.className
    let defaultStyles = " mx-2 rounded-lg cursor-pointer transition inline-flex items-center justify-center whitespace-nowrap";

    const variants = {
      variant: {
        Primary: " border-none bg-violet-700 hover:bg-violet-900 hover:shadow-violet:800/50 ",
        Ghost: " hover:bg-zinc-800 hover:text-accent-foreground",
        Outline: " border border-neutral-600 bg-transparent hover:bg-zinc-800 hover:text-accent-foreground ",
        Default: " bg-white text-black text-primary-foreground hover:bg-white/90 "
      },
      size: {
        Default: " h-10 px-4 py-2 ",
        Small: " h-9 rounded-md px-3 ",
        Large: " h-11 rounded-md px-8 ",
        Icon: " h-10 w-10 ",
      }
    }
  
    className += variants.variant[(Params.Type || 'Default')]
    className += variants.size[ (Params.Size || 'Default') ]
    return (<>
      <div className={defaultStyles + className}>
        {Params.children}
      </div>
    </>)
  }