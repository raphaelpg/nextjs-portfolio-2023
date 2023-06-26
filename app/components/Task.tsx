import ItemImage from "./ItemImage";

export default function Task({imageSrc, title, text}: {imageSrc: string, title: string, text?: string[]}) {
  return (
    <span className="flex flex-col md:flex-row lg:flex-row justify-start items-center gap-10">
      <ItemImage imageSrc={imageSrc} title={title} />
      <span className="w-full flex flex-col justify-center gap-2 text-left">
        <h3 className="text-2xl font-bold tracking-wider">{title}</h3>
        {text && text.map((item:string, index:number) => 
          <p key={index}>{item}</p>
        )}
      </span>
    </span>
  )
}