import styled from "styled-components";

const Tab = styled("div")`
  padding: 4px 32px;
  border-bottom: ${({ active }) =>
    active ? "solid 2px blue" : "solid 2px transparent"};
  cursor: pointer;
`;

export default Tab;
