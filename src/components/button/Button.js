import "./button.scss";

const Button = (props) => {
  return (
    <div className="button">
      <button onClick={props.operation}>{props.valor}</button>
    </div>
  );
};

export default Button;
