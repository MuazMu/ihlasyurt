import Image from "next/image"

interface MosqueIconProps {
  className?: string
  withText?: boolean
}

export function MosqueIcon({ className = "w-6 h-6", withText = false }: MosqueIconProps) {
  return (
    <div className={className}>
      <div className="relative w-full h-full">
        <Image
          src={withText ? "/images/mescit-icon-with-text.png" : "/images/mescit-icon.jpeg"}
          alt="Mescit Icon"
          fill
          className="object-contain"
        />
      </div>
    </div>
  )
}
