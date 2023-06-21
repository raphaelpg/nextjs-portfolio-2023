import Image from "next/image"
import Link from "next/link";
import { stackLogos } from "./stack";
import ItemImage from "../components/ItemImage";
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
    <span className="w-full flex flex-col gap-5 md:flex-row lg:flex-row" key={title}>
      <ItemImage imageSrc={projectImg} title={title} projectHref={projectHref} />
      <span>
        <h3 className="text-2xl font-bold tracking-wider">{title}</h3>
        {description && description.map((item) => (
          <p className="text-lg text-justify">{item}</p>
        ))}
        <p className="pt-5">
          Stack:
        </p>
        <div className="w-full flex flex-wrap flex-row items-start justify-start pb-5 gap-1">
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

        <span className="flex flex-col">
          {url.length > 0 && (
            <a className="text-lg underline text-indigo-500 hover:text-pink-500 transition ease-out duration-500" href={url} target='_blank'>See &#10148;</a>
          )}
          <a className="text-lg underline text-indigo-500 hover:text-pink-500 transition ease-out duration-500" href={repo} target='_blank'>Github &#10148;</a>
        </span>
      </span>
    </span>
  )
}