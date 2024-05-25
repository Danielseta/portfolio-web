import Image from "next/image";

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image
        className="border-transparent outline-transparent"
        src={imgSrc}
        fill
        priority
        alt="Avatar Image"
      />
    </div>
  );
};

export default DevImg;
