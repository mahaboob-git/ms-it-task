import React from "react";
import { Box } from "@mui/material";
import HeroText from "./HeroText";
import HeroImages from "./HeroImages";

const HeroSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#ffffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 2, md: 3 },        
      }}
    >
      <HeroText />
      <HeroImages />
    </Box>
  );
};

export default HeroSection;
