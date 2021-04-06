import "./input.scss";

const Input = ({ value, onChange, min, max }) => {
  return (
    <div className="input__container">
      <label htmlFor="" className="input__label">
        Game grid
      </label>
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        defaultValue={5}
        onChange={onChange}
        className="input__item"
      />
    </div>
  );
};

export default Input;
