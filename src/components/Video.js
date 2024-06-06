import styled from 'styled-components'

const Frame = styled.iframe`
  width: 100%;
  margin-bottom: 2%;
`

const Video = () => {
  return (
    <>
      <Frame
        height='500'
        src='https://www.youtube.com/embed/jEU1lPe3bKg?si=QtC048c3lkrjMhXB'
        title='Consejo Nacional Forestal'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></Frame>
    </>
  )
}

export default Video
