import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit" | "reset";
  title: string;
  icon?: string;
  variant: "btn_dark_green" | "btn_dark_green_outline" | "btn_green" | "btn_white_text" | "btn_white";
  full?: boolean;
};

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`flexCenter gap-3 rounded-full border ${variant}`}
    >
      {icon && <Image src={icon} alt="icon" width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;
