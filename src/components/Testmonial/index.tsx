import style from "./Testimonial.module.scss";
import classNames from "classnames";
import Image from "next/image";

type Props = {
  text: string;
  author: string;
  image: string;
  positionHeld: string;
};

export default function Testimonial({
  text,
  author,
  image,
  positionHeld,
}: Props) {
  return (
    <div className={style.card}>
      <p className={classNames(style["card__text"], "mb-3")}>{text}</p>
      <div className="d-flex align-center">
        <Image
          src={image}
          alt="Testimonial image"
          width={100}
          height={100}
          layout="responsive"
          objectFit="cover"
          className={classNames(style["card__author-image"], "me-2")}
        />
        <div>
          <h1 className={classNames(style["card__author-name"], "mb-1")}>
            {author}
          </h1>
          <p className={style["card__author-position-held"]}>{positionHeld}</p>
        </div>
      </div>
    </div>
  );
}
