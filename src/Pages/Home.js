import React from "react";
import { Button } from 'primereact/button';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from "react-router-dom";

import backgroundImage from "../assets/BackgroundImage.png";
import logo from "../assets/logo.png";
import campechana from "../assets/campechana.png";
import pirata from "../assets/pirata.png";
import norteña from "../assets/norteña.png";

import FoodCard from '../widgets/FoodCard'; 

const sales = [
  {
    title: '3 x 2',
    subtitle:"Campechanas\n(Lunes)",
    description:"De $297 a",
    price: "$198",
    quantity:"",
    image: campechana,
  },
  {
    title: "2 x 1",
    subtitle:"Piratas\n(Martes)",
    description:"De $200 a",
    price: "$170",
    quantity:"",
    image: pirata,
  },
  {
    title: "2 x 1",
    subtitle:"Norteñas\n(Miercoles)",
    description:"De $200 a",
    price: "$180",
    quantity:"",
    image: norteña,
  },
];

function Home() {

  const navigate = useNavigate();
  const handleMenuClick = () => {
    navigate('/menu');
  };

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 0,
        '&::before': {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: -1,
        },
      }}
    >
      <>
        <div className="flex justify-content-start	" style={{backgroundColor: "var(--black)"}}>
          <img src={logo} alt="Logo" className="w-auto h-5rem  py-1" />
        </div>

        <h2 className="font-semibold mt-4 pt-4" style={{ color: 'var(--white)', paddingLeft: "1rem" }}>Promociones</h2>
        <div className="w-100 pt-4 pb-6 ">
          <Slider
            arrows={false}
            dots={true}
            infinite={true}
            speed={800}
            autoplay={true}
            autoplaySpeed={2000}
            slidesToShow={1}
            slidesToScroll={1}

            responsive={[
              {
                breakpoint: 1480,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 990,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  dots: true
                }
              },
              {
                breakpoint: 670,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: true
                }
              }
            ]}
          >

            {sales.map((sale, index) => (
              <div className="px-3">
                <FoodCard
                  key={index}
                  title={sale.title}
                  subtitle={sale.subtitle}
                  description={sale.description}
                  price={sale.price}
                  quantity={sale.quantity}
                  image={sale.image}
                />
              </div>
            ))}
          </Slider>

          <div class="flex justify-content-between flex-wrap flex-column gap-6	">
            <div className="flex flex-wrap justify-content-center pt-6 mt-6">
              <Button severity="danger" rounded onClick={handleMenuClick}>
                <h2 className="font-semibold" style={{ color: 'var(--white)', margin: "1rem" }}>Ver Menú</h2>
              </Button>
            </div>

            <div className="flex flex-wrap justify-content-center gap-8 mb-8">
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                <Button
                  className="bg-white"
                  severity="primary"
                  rounded
                  text
                  aria-label="Facebook"
                >
                  <i className="pi pi-facebook p-2" style={{ fontSize: "2rem" }}></i>
                </Button>
              </a>
              <a href="https://www.instagram.com/taqueriaorinoco/?hl=es" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                <Button
                  className="bg-white"
                  severity="danger"
                  rounded
                  text
                  aria-label="Instagram"
                >
                  <i className="pi pi-instagram p-2" style={{ fontSize: "2rem" }}></i>
                </Button>
              </a>
              <a href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                <Button
                  className="bg-white"
                  severity="success"
                  rounded
                  text
                  aria-label="WhatsApp"
                >
                  <i className="pi pi-whatsapp p-2" style={{ fontSize: "2rem" }}></i>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </>
    </Box>
  );
}

export default Home;
