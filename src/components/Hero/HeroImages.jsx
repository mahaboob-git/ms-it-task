import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

import imgLeft from "../../assets/images/first.png";
import imgCenter from "../../assets/images/second.png";
import imgRight from "../../assets/images/third.png";
import avatar1 from "../../assets/icons/cus-1.png";
import avatar2 from "../../assets/icons/cus-2.png";
import avatar3 from "../../assets/icons/cus-3.png";

const HeroImages = () => {
  return (
  <Box
  sx={{
    display: "flex",
    flexDirection: { xs: "column", lg: "row" },
    alignItems: "flex-start",
    justifyContent: "center",
    gap: { xs: 3, lg: 4 },
    mt: { xs: 2, md: 4 },
    flexWrap: { xs: "wrap", lg: "nowrap" },
    width: "100%",
    maxWidth: `calc(100% - 120px)`,
    mx: "auto",
  }}
>


      {/* LEFT IMAGE */}
      <Box
        sx={{
          position: "relative",
          flex: { xs: "1 1 90%", lg: "1 1 30%" }, 
          height: { xs: 280, md: 387 },
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={imgLeft}
          alt="Skilled Experts"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "16px",
          }}
        />
        <Typography
          sx={{
            position: "absolute",
            bottom: 20,
            left: 20,
            color: "#fff",
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: "24px",
            lineHeight: "100%",
          }}
        >
          Skilled Experts,<br />Reliable Service
        </Typography>
      </Box>

      {/* CENTER SECTION */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: 2,
          flex: { xs: "1 1 90%", lg: "1 1 35%" }, 
        }}
      >
        {/* Center Image */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: 200, md: 247 },
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={imgCenter}
            alt="Fast Booking"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "16px",
            }}
          />
          <Typography
            sx={{
              position: "absolute",
              bottom: 20,
              left: 20,
              color: "#fff",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "24px",
              lineHeight: "100%",
            }}
          >
            Fast Booking,<br />Instant Help
          </Typography>
        </Box>

        {/* Blue Container */}
        <Box
          sx={{
            width: "100%",
            height: { xs: 110, md: 124 },
            backgroundColor: "#1976D2",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: { xs: 2, md: 3 },
            color: "#fff",
            boxSizing: "border-box",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", position: "relative", minWidth: 120 }}>
            <Avatar
              src={avatar1}
              sx={{
                width: 48,
                height: 48,
                position: "relative",
                zIndex: 3,
                border: "2px solid white",
              }}
            />
            <Avatar
              src={avatar2}
              sx={{
                width: 48,
                height: 48,
                position: "absolute",
                left: 30,
                zIndex: 2,
                border: "2px solid white",
              }}
            />
            <Avatar
              src={avatar3}
              sx={{
                width: 48,
                height: 48,
                position: "absolute",
                left: 60,
                zIndex: 1,
                border: "2px solid white",
              }}
            />
          </Box>

          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: { xs: "18px", md: "24px" },
              textAlign: "left",
              lineHeight: "120%",
              flex: 1,
            }}
          >
            98% <br />
            Customer Satisfaction
          </Typography>
        </Box>
      </Box>

      {/* RIGHT IMAGE */}
      <Box
        sx={{
          position: "relative",
          flex: { xs: "1 1 90%", lg: "1 1 30%" }, 
          height: { xs: 280, md: 387 },
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={imgRight}
          alt="Safe Easy On Demand"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "16px",
          }}
        />
        <Typography
          sx={{
            position: "absolute",
            bottom: 20,
            left: 20,
            color: "#fff",
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: "24px",
            lineHeight: "100%",
          }}
        >
          Safe, Easy,<br />On-Demand
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroImages;
