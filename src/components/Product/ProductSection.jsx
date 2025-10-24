import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../../api/productApi";

const ProductSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box sx={{ px: { xs: 3, md: 6 }, py: { xs: 6, md: 12 } }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 4,
        }}
      >
        <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 32 }}>
          Products
        </Typography>
        <Button sx={{ fontFamily: "Inter, sans-serif", textTransform: "none" }}>
          See All
        </Button>
      </Box>

      <Slider {...settings}>
        {products.map((product) => (
          <Box key={product.id} sx={{ px: 1 }}>
            <ProductCard product={product} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ProductSection;
