interface Props {
  image?: string;
  icon?: any;
  type?: "user" | "medium" | "small";
  className?: string;
  text?: string;
}

const Avatar = ({ image, icon, type, className, text }: Props) => {
  return (
    <div className={`avatar ${type} ${className ? className : ""}`}>
      {image && <img src={image} alt="" />}
      {icon && icon}
      {text && <span>{text}</span>}
    </div>
  );
};

export default Avatar;
