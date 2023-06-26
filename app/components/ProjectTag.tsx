export default function ProjectTag({
  tag}: {tag:string | undefined}) {

  const backgroundColors = [
    {tagName: "Hackathon Project", color: "bg-yellow-500"},
    {tagName: "Personal Project", color: "bg-blue-600"},
    {tagName: "Professional Project", color: "bg-green-600"},
  ];

  const selectedTag = backgroundColors.find((item) => item.tagName === tag) ?? backgroundColors[0];

  return (
    <span className={`h-fit w-fit text-center px-1 ${selectedTag?.color} rounded text-white tracking-wider rotate-45`}>
      {tag}
    </span>
  )
}