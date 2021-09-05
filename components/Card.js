const Card = (props) => {
  return (
    <div
      style={{
        padding: "12px",
        border: "solid 2px #eaeaea",
        width: "fit-content",
        borderRadius: "4px",
        marginBottom: "4px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Card;
