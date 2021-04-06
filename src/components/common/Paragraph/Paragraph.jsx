import "./paragraph.scss";

const Paragraph = ({ text, data }) => {
  return (
    <p className="paragraph">
      {" "}
      {text} {data ? <span className="bolder"> {data} </span> : null}{" "}
    </p>
  );
};

export default Paragraph;
