
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


const Text = styled.h1`
    color: var(--dark-green);
    font-size: 40px;
`

const EndSurvey = () => {
    return (
        <Container>
            <Text>
                ¡Gracias por sus respuestas!
            </Text>
        
        </Container>
    )
}

export default EndSurvey