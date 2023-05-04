import { NavBar } from "../../components/NavBar";
import {
  StyledAnnounceList,
  StyledBannerDiv,
  StyledFilterDiv,
  StyledFiltersAside,
} from "./style";
import blacklogo from "../../assets/motorsShop.png";
import { Footer } from "../../components/footer";
import Button from "../../components/Button";
import { useContext, useState } from "react";
import { ListAllAnnounce } from "../../components/ListAllAnnounce";
import { AnnounceContext } from "../../context/announceContext";
import { IAdCard } from "../../interfaces/announce";
import { removeDuplicateItems } from "../../utils/filter";
import { StyledInput } from "../../components/Inputs/Input/style";

export const Home = () => {

  const {
    listAnnounce,
    fuel,
    setKeyFilter,
    setElemToCompare,
    filteredList,
    setMinPrice,
    setMinKm,
    minKm,
    setRangeKm,
    minPrice,
    setRangePrice
  } = useContext(AnnounceContext);


  const token = localStorage.getItem("@MotorsToken")

  const listBrand = removeDuplicateItems(filteredList, "brand")
  const listModel = removeDuplicateItems(filteredList, "model")
  const listColor = removeDuplicateItems(filteredList, "color")
  const listYear  = removeDuplicateItems(filteredList, "year")
  const listFuel  = removeDuplicateItems(filteredList, "fuel")

  return (
    <>
      <NavBar />
      <StyledBannerDiv>
        <img src={blacklogo} alt="logo" />
        <p>A melhor plataforma de anúncios de carros do país</p>
      </StyledBannerDiv>
      <StyledAnnounceList>
        <StyledFiltersAside>
          <div>
            <h2>Marca</h2>
            {listBrand && listBrand.map((elem:IAdCard, index: number) => {
              return (
                <button
                key={index}
                onClick={() => {
                  setKeyFilter("brand")
                  setElemToCompare(elem.brand.brand)
                }}
                >
                {elem.brand.brand}
                </button>
              )
            })}
          </div>
          <div>
            <h2>Modelo</h2>
            {listModel && listModel.map((elem:IAdCard, index: number) => {
              return (
                <button
                onClick={() => {
                  setKeyFilter("model")
                  setElemToCompare(elem.model.model)
                }}
                key={index}
                >
                {elem.model.model}
                </button>
              )
            })}
          </div>
          <div>
            <h2>Cor</h2>
            {listColor && listColor.map((elem:IAdCard, index: number) => {
              return (
                <button
                key={index}
                onClick={() => {
                  setKeyFilter("color")
                  setElemToCompare(elem.color.color)
                }}
                >
                {elem.color.color}
                </button>
              )
            })}
          </div>
          <div>
            <h2>Ano</h2>
            {listYear && listYear.map((elem:IAdCard) => {
              return (
                <button
                key={elem.id}
                onClick={() => {
                  setKeyFilter("year")
                  setElemToCompare(elem.year.year)
                }}
                >
                {elem.year.year}
                </button>
              )
            })}
          </div>
          <div>
            <h2>Combustível</h2>
            {listFuel && listFuel.map((elem:IAdCard) => {
              return (
                <button
                key={elem.id}
                onClick={() => {
                  setKeyFilter("fuel")
                  setElemToCompare(elem.fuel.fuel)
                }}
                >
                {fuel[+elem.fuel.fuel]}
                </button>
              )
            })}
          </div>
          <div className="km">
            <h2>Km</h2>
            <div>
              <StyledInput
              placeholder="Mínimo"
              disabled={!token}
              type="number"
              onBlur ={(e) => setMinKm(e.target.value)}
              />
              <StyledInput
              placeholder="Máximo"
              disabled={!token}
              type="number"
              onBlur ={(e) => setRangeKm([minKm,e.target.value])}
              />
            </div>
          </div>
          <div className="km">
            <h2>Preço</h2>
            <div>
              <StyledInput
              placeholder="Mínimo"
              disabled={!token}
              type="number"
              onBlur ={(e) => setMinPrice(e.target.value)}
              />
              <StyledInput
              placeholder="Máximo"
              disabled={!token}
              type="number"
              onBlur={(e) => setRangePrice([minPrice,e.target.value])}
              />
            </div>
          </div>
        </StyledFiltersAside>
        <ListAllAnnounce />
      </StyledAnnounceList>
      <StyledFilterDiv>
        <Button className="brand1">{"Filtros"}</Button>
        <div>
          <span>1 de 45</span>
          <Button className="brandOpacity">{"Seguinte >"}</Button>
        </div>
      </StyledFilterDiv>
      <Footer />
    </>
  );
};
