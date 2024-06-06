import styled from 'styled-components'

const StyledTitle = styled.h1`
  text-align: ${({ isHeader }) => (isHeader ? "left" : "center")};
  margin: ${({ isHeader }) => (isHeader ? null : "0")};
  color: ${({ Color }) =>
    (Color === "green" && "var(--green)") ||
    (Color === "darkgreen" && "var(--dark-green)") ||
    (Color === "yellow" && "var(--yellow)") ||
    (Color === "darkyellow" && "var(--dark-yellow)") ||
    (Color === "red" && "var(--red)") ||
    (Color === "darkred" && "var(--dark-red)") ||
    (Color === "grey" && "var(--grey)") ||
    (Color === "darkgrey" && "var(--dark-grey)") ||
    (Color === "wine" && "var(--wine)") ||
    (Color === 'white' && "#FFF")};
    grid-area: title;
    margin-top: 20px;
`;

const Title = ({Color, isHeader, children}) => {
  return (
    <StyledTitle Color={Color} isHeader={isHeader}>{children}</StyledTitle>
  )
}

export default Title
