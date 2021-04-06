import "./button.scss";

const Button = ({ label, ...rest }) => {
  return (
    <button {...rest} className="btn">
      {" "}
      {label}{" "}
    </button>
  );
};

export default Button;
