import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export function PostCover({ src, alt }: Props) {
  return (
    <div className="overflow-hidden border border-border flex items-center justify-center py-5">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={630}
        className="h-[50%] w-[50%] "
        priority
      />
    </div>
  );
}