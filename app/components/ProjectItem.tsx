import Image from "next/image"
const images = require.context('../../public', true);

export default function ProjectItem({
  img,
  title,
  description,
  url,
  repo,
  stack
}: {
  img: string,
  title: string,
  description: string,
  url: string,
  repo?: string,
  stack?: string[]
}) {
  let projectImg = images(`./${"bucketly_logo.webp"}`).default; 
  try {
    const logo = images(`./${img}`).default;
    projectImg = logo;
  } catch (error) {
  }
  return (
    <span className="w-full flex flex-row gap-5">
      <Image 
        src={projectImg} 
        alt={title + " logo"}
        style={{width: '250px', height: 'fit-content'}}
      />
      <span>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-lg">{description}</p>
        <span className="flex flex-col">
          <a className="text-lg underline" href={url} target='_blank'>See</a>
          <a className="text-lg underline" href={repo} target='_blank'>Github</a>
        </span>
        <div className="w-full flex flex-row items-start justify-start pt-10 gap-10">
          {stack && stack.map((item) => (
            <span className="text-lg">{item}</span>
          ))}
        </div>
      </span>
    </span>
  )
}