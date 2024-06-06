import styled from "styled-components";

const HR = styled.hr`
  border: 0;
  box-sizing: content-box;
  height: 0;
  border-top: 1px solid #dce0e0;
  display: block;
  margin: 0 0 25px;

  &:before {
    content: " ";
    width: 35px;
    height: 5px;
    background-color: ${({ Color }) =>
      (Color === "green" && "var(--green)") ||
      (Color === "darkgreen" && "var(--dark-green)") ||
      (Color === "yellow" && "var(--yellow)") ||
      (Color === "darkyellow" && "var(--dark-yellow)") ||
      (Color === "red" && "var(--red)") ||
      (Color === "darkred" && "var(--dark-red)") ||
      (Color === "grey" && "var(--grey)") ||
      (Color === "darkgrey" && "var(--dark-grey)") ||
      (Color === "wine" && "var(--wine)") ||
      "var(--dark-yellow)"};
    position: absolute;
  }

  @media screen and (min-width: 1024px) {
    margin: 5px 0 40px;
  }
`;

const Separator = ({ Color }) => {
  return <HR Color={Color} />;
};

export default Separator;
