import ItemImage from "./ItemImage";
import StackImage from "./StackImage";
import { stackLogos } from "../projects/stack";
import ProjectTag from "./ProjectTag";
const images = require.context('../../public', true);

export default function ProjectItem({
  img,
  title,
  description,
  url,
  repo,
  stack,
  tag,
}: {
  img: string,
  title: string,
  description: string[],
  url: string,
  repo: string,
  stack?: string[],
  tag?: string,
}) {

  let projectImg; 
  try {
    projectImg = images(`./${img}`).default;
  } catch (error) {
    projectImg = images(`./${"bucketly_logo.webp"}`).default;
  }

  const projectHref = url && url.length > 0 ? url : repo;
  
  return (
    <span className="w-full flex flex-col gap-5 md:flex-row lg:flex-row" key={title}>
      <span className='flex justify-end translate-y-12 md:hidden lg:hidden'>
        <ProjectTag tag={tag} />
      </span>
      <ItemImage imageSrc={projectImg} title={title} projectHref={projectHref} />
      <span className="w-full">
        <h3 className="text-2xl font-bold tracking-wider">{title}</h3>
        {description && description.map((item, index) => (
          <p key={index} className="text-lg text-justify">{item}</p>
        ))}
        <p className="pt-5">
          Stack:
        </p>
        <div className="w-full flex flex-wrap flex-row items-start justify-start pb-5 gap-1">
          {stack && stack.map((item, index) => {
            let logo;
            try {
              logo = images(`./${(stackLogos as any)[item]["filename"]}`).default;
            } catch (error) {
              logo = images(`./typescript.webp`).default;
            }

            let stackLogo = (stackLogos as any)[item];
            stackLogo = stackLogo ?? (stackLogos as any)["typescript"];

            return (
              <StackImage key={index} title={item} url={stackLogo?.url} logo={logo} />
            )
          })}
        </div>

        <span className="flex flex-col">
          {url && url.length > 0 && (
            <a className="text-lg underline text-indigo-500 hover:text-pink-500 transition ease-out duration-500" href={url} target='_blank'>See &#10148;</a>
          )}
          {repo && repo.length > 0 && (
            <a className="text-lg underline text-indigo-500 hover:text-pink-500 transition ease-out duration-500" href={repo} target='_blank'>Github &#10148;</a>
          )}
        </span>
      </span>
      <span className='hidden md:flex lg:flex'>
        <ProjectTag tag={tag} />
      </span>
    </span>
  )
}