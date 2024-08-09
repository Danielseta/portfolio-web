import { cn } from "@/lib/utils";
import Image from "next/image";

const DevImg = ({
  className,
  classNames,
  src,
  alt = "Image of something",
  ...props
}) => {
  const { wrapper } = classNames;
  return (
    <div className={cn("relative w-full h-full", wrapper)}>
      <Image
        className={cn("border-transparent outline-transparent", className)}
        src={src}
        fill
        priority
        alt={alt}
        {...props}
      />
    </div>
  );
};

export default DevImg;
