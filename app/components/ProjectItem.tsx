import Image from "next/image"
import Link from "next/link";
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
  description: string[],
  url: string,
  repo: string,
  stack?: string[]
}) {
  let projectImg = images(`./${"bucketly_logo.webp"}`).default; 
  try {
    const logo = images(`./${img}`).default;
    projectImg = logo;
  } catch (error) {
  }
  const imageLink = url.length > 0 ? url : repo;
  return (
    <span className="w-full flex flex-row gap-5">
      <Link href={imageLink} target='_blank'>
        <Image 
          src={projectImg} 
          alt={title + " logo"}
          className="w-60"
          // style={{
          //   width: '250px', 
          //   minWidth: '250px',
          //   height: 'fit-content',
          // }}
        />
      </Link>
      <span>
        <h3 className="text-2xl font-bold">{title}</h3>
        {description && description.map((item) => (
          <p className="text-lg text-justify">{item}</p>
        ))}
        <span className="flex flex-col">
          <a className="text-lg underline text-indigo-500 hover:text-pink-500" href={url} target='_blank'>See</a>
          <a className="text-lg underline text-indigo-500 hover:text-pink-500" href={repo} target='_blank'>Github</a>
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