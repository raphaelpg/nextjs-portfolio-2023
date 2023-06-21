import Image from "next/image"
import Link from "next/link";
import { stackLogos } from "../projects/stack";
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

  let projectImg; 
  try {
    projectImg = images(`./${img}`).default;
  } catch (error) {
    projectImg = images(`./${"bucketly_logo.webp"}`).default;
  }

  const projectHref = url.length > 0 ? url : repo;
  
  return (
    <span className="w-full flex flex-row gap-5">
      <Link href={projectHref} target='_blank'>
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
          <a className="text-lg underline text-indigo-500 hover:text-pink-500 transition ease-out duration-500" href={url} target='_blank'>See</a>
          <a className="text-lg underline text-indigo-500 hover:text-pink-500 transition ease-out duration-500" href={repo} target='_blank'>Github</a>
        </span>
        <div className="w-full flex flex-row items-start justify-start pt-10 gap-1">
          {stack && stack.map((item) => {
            let logo;
            try {
              logo = images(`./${(stackLogos as any)[item]["filename"]}`).default;
            } catch (error) {
              logo = images(`./html.svg`).default;
            }
            const stackLogo = (stackLogos as any)[item];
            return (
              <Link
                href={stackLogo?.url}
                target='_blank'
                key={item}
                title={item}
                className="border-2 border-indigo-400 rounded hover:border-pink-500 transition ease-out duration-500"
              >
                <Image
                  src={logo}
                  alt={item}
                  style={{
                    objectFit: "contain", 
                    width: "auto", 
                    maxHeight: "50px",
                    minHeight: "50px", 
                    minWidth: "50px", 
                    backgroundColor: "white",
                    borderRadius: "0.15rem",
                    padding: "2px",
                  }}
                />
              </Link>
            )
          })}
        </div>
      </span>
    </span>
  )
}