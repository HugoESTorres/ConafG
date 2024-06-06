import { useState, useEffect } from "react";
import styled from "styled-components";

const Image = styled.img.attrs({
  alt: "Consejo Nacional Forestal",
})`
  width: 100%;
  height: auto;
  filter: brightness(70%);
  opacity: 0.1;
  transition: 1s;
  &.loaded {
    opacity: 1;
  }
`;

const Banner = () => {
  const images = ["banner1.jpg", "banner2.jpg", "banner3.jpg", "banner4.jpg"];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      selectNewImage(selectedIndex, images);
    }, 5000);
    return () => clearInterval(interval);
  });

  const selectNewImage = (index, images, next = true) => {
    setLoaded(false);

    setTimeout(() => {
      const condition = next
        && selectedIndex < images.length - 1
      const nextIndex = next
        && condition
          ? selectedIndex + 1
          : 0
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 700);

  };

  return (
    <>
      <Image
        onLoad={() => setLoaded(true)}
        className={loaded ? "loaded" : ""}
        src={`${process.env.PUBLIC_URL.concat(`/img/${selectedImage}`)}`}
      />
    </>
  );
};

export default Banner;
