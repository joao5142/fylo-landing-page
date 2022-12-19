import style from "./HomeMenuItem.module.scss";

import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image: string;
};

export default function HomeMenuItem({ title, description, image }: Props) {
  return (
    <div className="d-flex flex-column align-items-center">
      <Image
        src={image}
        alt="Menu Item"
        width={100}
        height={100}
        className={style["image"]}
      />
      <h4 className="mt-4 text-center">{title}</h4>
      <p className="w-70 text-center mt-1">{description}</p>
    </div>
  );
}
