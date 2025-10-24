import React from "react";
import { Box, Typography } from "@mui/material";

const ServiceCard = ({ image, title, borderColor }) => {
  return (
    <Box
      sx={{
        border: `10px solid ${borderColor}`,
        borderRadius: "16px",
        overflow: "hidden",
        minWidth: { xs: 200, sm: 250, md: 300 },
        position: "relative",
        scrollSnapAlign: "start", 
        flexShrink: 0,
        mx:1
      }}
    >
     
      <Typography
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          backgroundColor: borderColor, 
          color: "#fff",
          textAlign: "center",
          fontFamily: "Inter, sans-serif",
          fontWeight: 700,
          fontSize: "18px",
          py: 1,
          zIndex: 2,
        }}
      >
        {title}
      </Typography>

      {/* Image */}
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: "100%",
          height: { xs: 150, sm: 180, md: 220 },
          objectFit: "cover",
          mt: 4, 
        }}
      />
    </Box>
  );
};

export default ServiceCard;
