import style from "./Button.module.scss";
import classNames from "classnames";

type Props = {
  large?: boolean;
  children: React.ReactNode;
  className?: string;
};

export default function Button({ children, large, className }: Props) {
  return (
    <button
      className={classNames(
        style.button,
        { [style["button--large"]]: large },
        className
      )}
    >
      {children}
    </button>
  );
}
