interface Props {
  onClick?: () => void;
  className?: string;
  theme?: "primary" | "secondary";
  disabled?: boolean;
  children: any;
}

const ButtonPill = ({
  className,
  onClick,
  theme = "primary",
  disabled,
  children,
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn-pill ${theme} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonPill;

// import { styled } from "@mui/material/styles";
// import Button, { ButtonProps } from "@mui/material/Button";

// const ButtonPill = styled(Button)<ButtonProps>(({ theme, type }: any) => ({
//   color: theme.palette.getContrastText("#572ce8"),
//   borderRadius: "50px",
//   paddingLeft: "25px",
//   paddingRight: "25px",
//   textTransform: "initial",
//   backgroundColor: "#572ce8",
//   border: "1px solid #572ce8",
//   "&:hover": {
//     color: "#572ce8",
//     backgroundColor: "#fff",
//   },
//   "&:disabled": {
//     color: "rgba(0, 0, 0, 0.26)",
//     borderColor: "transparent",
//     backgroundColor: "rgba(0, 0, 0, 0.12)",
//   },
// }));
// export default ButtonPill;
