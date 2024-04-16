export default function Card(Params) {
    let defaultStyles = " m-4 w-min h-min object-contain rounded-md border p-4 border-neutral-800 text-center " ;

    return (
      <div className={defaultStyles + Params.className}>
        {Params.children}
      </div>
    )
  }