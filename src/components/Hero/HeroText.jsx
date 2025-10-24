import React from "react";
import { Box, Typography } from "@mui/material";
import heroIcon from "../../assets/icons/home.png"; 

const HeroText = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        py: { xs: 3, md: 5 },
        px: 2,
      }}
    >
      {/* Main Bold Heading */}
      <Typography
        component="h1"
        sx={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 700,
          fontSize: { xs: "48px", sm: "64px", md: "103.9px" },
          lineHeight: "100%",
          letterSpacing: "0px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
        }}
      >
        Home Experts at
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          Your
          <Box
            component="img"
            src={heroIcon}
            alt="door icon"
            sx={{
              width: { xs: 50, sm: 70, md: 90 },
              height: "auto",
            }}
          />
          Door
        </Box>
      </Typography>

      {/* Subtext */}
      <Typography
        component="p"
        sx={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
          fontSize: { xs: "16px", sm: "18px", md: "22px" },
          lineHeight: "130%",
          letterSpacing: "0px",
          textAlign: "center",
          maxWidth: "800px",
          mt: 3,
          color: "#555",
        }}
      >
        Expert home services, delivered to your doorstep – get reliable handyman
        solutions with ease. Fast, professional, and tailored to your needs.
      </Typography>
    </Box>
  );
};

export default HeroText;
