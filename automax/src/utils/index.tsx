import { useState, useEffect } from "react";

export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export const annnounceMocked = {
  imgCar:
    "https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/02-images/cruze-sport6-rs-carros.jpg?imwidth=960",
  title: "Maserati - Ghibl",
  description:
    " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
  imgUser:
    "https://images.goodsmile.info/cgm/images/product/20221222/13738/109345/large/74d528cb136ae1ab73a3bd933f9805f1.jpg",
  nameUser: "Anunciante",
  km: "10.000",
  year: "2010",
  price: "80.000,00",
  bom: true,
  active: true,
};
