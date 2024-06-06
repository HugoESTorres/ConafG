import styled from 'styled-components'

const StyledCard = styled.div`
  width: 100%;
  height: auto;
  border-radius: 4px 4px;
  border-top: 3px solid ${({ Color }) =>
    (Color === "green" && "var(--green)") ||
    (Color === "darkgreen" && "var(--dark-green)") ||
    (Color === "yellow" && "var(--yellow)") ||
    (Color === "darkyellow" && "var(--dark-yellow)") ||
    (Color === "red" && "var(--red)") ||
    (Color === "darkred" && "var(--dark-red)") ||
    (Color === "grey" && "var(--grey)") ||
    (Color === "darkgrey" && "var(--dark-grey)") ||
    (Color === "wine" && "var(--wine)")};
  box-shadow: 0px -1px 10px rgba(0,0,0,0.4);
  align-items: center;
  justify-content: space-evenly;
`;


const Card = ({ Color, children, after }) => {
  return (
    <StyledCard Color={Color} after={after}>{children}</StyledCard>
  )
}

export default Card
