import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import ServiceCard from "./ServiceCard";
import colors from "../../constants/colors";


import service1 from "../../assets/images/first.png";
import service2 from "../../assets/images/second.png";
import service3 from "../../assets/images/third.png";
import service4 from "../../assets/images/first.png";
import SparkleIcon from "../../assets/icons/home.png";

const services = [
  { image: service1, title: "Cleaning", borderColor: colors.borderRed },
  { image: service2, title: "Plumbing", borderColor: colors.borderGreen },
  { image: service3, title: "Painting", borderColor: colors.borderYellow },
  { image: service4, title: "AC Service", borderColor: colors.borderPurple },
];

const ServiceSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box
      sx={{
        backgroundColor: colors.lightBlue,
        px: { xs: 3, md: 6 },
        py: { xs: 6, md: 12 },
        boxSizing: "border-box",
      }}
    >
      {/* Top label */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 3, gap: 1 }}>
        <Box
          component="img"
          src={SparkleIcon}
          alt="sparkle"
          sx={{ width: 24, height: 24 }}
        />
        <Typography
          sx={{
            border: "2px solid black",
            borderRadius: "16px",
            px: 2,
            py: 0.5,
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: "16px",
          }}
        >
          Our Services
        </Typography>
      </Box>

      {/* Title and description */}
      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 4,
          mb: 6,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: { xs: "36px", md: "68px" },
            lineHeight: "100%",
          }}
        >
          Home care <br /> essentials
        </Typography>

        <Typography
          sx={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: { xs: "16px", md: "22px" },
            lineHeight: "100%",
            maxWidth: { xs: "100%", md: 500 },
            mt:{xs:"15px"}
          }}
        >
          Explore Space home care essentials - expert cleaning, plumbing, AC
          maintenance, painting, and more, fast, reliable doorstep service.
        </Typography>
      </Box>

      {/* Carousel */}
      <Slider {...settings} className="service-slider">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            borderColor={service.borderColor}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default ServiceSection;
