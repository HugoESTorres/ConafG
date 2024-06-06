import styled from "styled-components";

const ComponentFooter = styled.a.attrs({
  target: "_blank",
  rel: "noopener",
})`
  display: block;
  width: 100%;
  font-size: 12px;
  color: ${({ Color }) =>
    (Color === "green" && "var(--green)") ||
    (Color === "darkgreen" && "var(--dark-green)") ||
    (Color === "yellow" && "var(--yellow)") ||
    (Color === "darkyellow" && "var(--dark-yellow)") ||
    (Color === "red" && "var(--red)") ||
    (Color === "darkred" && "var(--dark-red)") ||
    (Color === "grey" && "var(--grey)") ||
    (Color === "darkgrey" && "var(--dark-grey)") ||
    (Color === "wine" && "var(--wine)")};
  text-decoration: none;
  font-style: italic;
  cursor: pointer;
  text-align: right;
  margin-top: ${({ none }) => none ? '0' : '15px'};

  @media screen and (min-width: 1024px) {
    font-size: 12px;
  }
`;

const Reference = ({children, ...props}) => {
    const { href, Color, none } = props;
  return (
    <>
      <ComponentFooter none={none} href={href} Color={Color}>
        {children}
      </ComponentFooter>
    </>
  );
};

export default Reference;
