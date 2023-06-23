import Link from "next/link";
import Image from "next/image";

export default function ItemImage({imageSrc, title, projectHref}: {
  imageSrc: string,
  title: string,
  projectHref?: string,
}) {
  return (
    projectHref ?
    <Link href={projectHref} target='_blank'>
      <Image 
        src={imageSrc} 
        alt={title + " logo"}
        style={{
          objectFit: "contain", 
          width: "auto", 
          minHeight: "50px",
          maxWidth: "250px", 
          minWidth: "250px", 
          backgroundColor: "white",
          borderRadius: "0.15rem",
          padding: "2px",
          margin: "0 auto",
        }}
      />
    </Link>
    :
    <Image 
      src={imageSrc} 
      alt={title + " logo"}
      style={{
        objectFit: "contain", 
        width: "auto", 
        minHeight: "50px",
        maxWidth: "250px", 
        minWidth: "250px", 
        backgroundColor: "white",
        borderRadius: "0.15rem",
        padding: "2px",
        margin: "0 auto",
      }}
    />
  )
}