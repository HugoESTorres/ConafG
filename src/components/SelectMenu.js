import styled from 'styled-components'


const StyledSelect = styled.input`
width: 100%;
    height: 39px;
    padding: 6px 12px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
        -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
}
`


const SelectMenu = ({ options }) => {
  return (
      <StyledSelect>
        {options.map(option => (
            <option value={option}>{option}</option>
          ))}
      </StyledSelect>
  )
}


export default SelectMenu;
