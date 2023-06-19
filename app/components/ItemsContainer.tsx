export default function ItemsContainer({
  title, children,
}: {
  title:string, children: React.ReactNode
}) {
  return (
    <span className="w-full flex flex-col">
      <h3>{title}</h3>
      <div className="w-full flex flex-col items-center justify-center pt-10 gap-10">
        {children}
      </div>
    </span>
  )
}