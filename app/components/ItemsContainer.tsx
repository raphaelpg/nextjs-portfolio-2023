export default function ItemsContainer({
  title, children,
}: {
  title:string, children: React.ReactNode
}) {
  return (
    <span className="w-full h-full flex flex-col">
      <h3>{title}</h3>
      <div className="w-full h-full flex flex-col items-center justify-center gap-20 pt-10 pb-10">
        {children}
      </div>
    </span>
  )
}