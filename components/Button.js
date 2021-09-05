import styled from "styled-components";

const Button = styled("button")`
  padding: 8px 32px;
  border-radius: 4px;
  background: ${({ color }) => (color ? color : "#fff")};
  border: ${({ noBorder }) => (noBorder ? "none" : "solid 1px #eaeaea")};
  cursor: pointer;
  transition: 0.2s;

  :hover {
    opacity: 0.4;
  }
`;

export default Button;

// const Button = (props) => {
//   const { color, noBorder } = props;

//   return (
//     <button
//       style={{
//         padding: "8px 32px",
//         borderRadius: "4px",
//         background: color ? color : "#fff",
//         border: noBorder ? "none" : "solid 1px #eaeaea",
//         cursor: "pointer",
//       }}
//     >
//       {props.children}
//     </button>
//   );
// };

// export default Button;
