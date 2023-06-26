export default function ItemsContainer({
  title, children,
}: {
  title:string, children: React.ReactNode
}) {
  return (
    <span className="w-full h-full flex flex-col">
      <h2>{title}</h2>
      <div className="w-full h-full flex flex-col items-center justify-center gap-20 pt-10 pb-10">
        {children}
      </div>
    </span>
  )
}