import ItemImage from "./ItemImage";

export default function Task({imageSrc, title, text}: {imageSrc: string, title: string, text?: string[]}) {
  return (
    <span className="flex flex-row justify-start items-center gap-10">
      <ItemImage imageSrc={imageSrc} title={title} projectHref=""/>
      {/* <h3 className="w-48 h-20 flex flex-row justify-center items-center border-4 border-indigo-400 rounded hover:border-pink-500 transition ease-out duration-500">
        {title}
      </h3> */}
      <span className="flex flex-col justify-center gap-2">
        <h3 className="text-2xl font-bold tracking-wider">{title}</h3>
        {text && text.map((item:string) => <p>{item}</p>)}
      </span>
    </span>
  )
}