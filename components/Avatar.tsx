import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      src="/avatar.jpg"
      className="img-frame"
      alt="Didier H"
      width={200}
      height={200}
    />
  );
};

export default Avatar;
