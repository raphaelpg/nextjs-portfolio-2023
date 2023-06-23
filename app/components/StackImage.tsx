import Link from "next/link";
import Image from "next/image";

export default function StackImage({title, url, logo}: {title: string, url?: string, logo: string}) {
  return (
    url && url.length > 0 ? (
      <Link
        href={url}
        target='_blank'
        key={title}
        title={title}
        className="border-2 border-indigo-400 rounded hover:border-pink-500 transition ease-out duration-500"
      >
        <Image
          src={logo}
          alt={title}
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
    ) : (
      <Image
        src={logo}
        alt={title}
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
    )
  )
}