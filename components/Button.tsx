import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit" | "reset";
  title: string;
  icon?: string;
  variant: "btn_dark_green";
};

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return <button type="button">
    {icon && <Image src={icon} alt="icon" width={20} height={20} />}
  </button>;
};

export default Button;
