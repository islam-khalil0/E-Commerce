import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Clothing.css";
import SideClothing from "./SideClothing";
import CardClothing from "./CardClothing";
import { useSelector } from "react-redux";
import { useFetchData } from "../../Redux/contants/ProductActions";
import Skeleton from "react-loading-skeleton";

const Clothing = () => {
  const dataApi = useSelector((state) => state.allProducts.products);
  useFetchData();

  return (
    <div className="baseDivClothing">
      <div className="ContainerClothing">
        <SideClothing />

        {dataApi ? (
          <Swiper
            className="swiper"
            spaceBetween={270}
            slidesPerView={3}
            pagination={{ clickable: true }}
          >
            {dataApi.map((item) => (
              <SwiperSlide key={item.id}>
                <CardClothing {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <>
            <div style={{ padding: "10rem" }}>
              <p>loading...</p>
              <Skeleton height={350} width={150} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Clothing;
