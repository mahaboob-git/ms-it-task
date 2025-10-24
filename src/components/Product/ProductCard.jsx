import React from "react";
import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const ProductCard = ({ product }) => {
  return (
    <Box
      sx={{
        border: "1px solid #E0E0E0",
        borderRadius: "16px",
        overflow: "hidden",
        minWidth: { xs: 200, sm: 220, md: 250 },
        p: 2,
        textAlign: "center",
        m: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: 360, 
        backgroundColor: "#fff",
      }}
    >
      <Box
        component="img"
        src={product.image}
        alt={product.name}
        sx={{
          width: "100%",
          height: 150,
          objectFit: "cover",
          borderRadius: "12px",
          mb: 1,
        }}
      />

      {/* Product Name */}
      <Typography
        sx={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          mb: 0.5,
          textAlign: "left",
          whiteSpace: "nowrap", 
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {product.name}
      </Typography>

      {/* Rating with light gray background */}
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          backgroundColor: "#f2f2f2",
          borderRadius: "8px",
          px: 1,
          py: 0.3,
          mb: 0.5,
        }}
      >
        <StarIcon sx={{ fontSize: 14, color: "#FFD700", mr: "5px" }} />
        <Typography sx={{ fontSize: 14, color: "#757575" }}>{product.rating}</Typography>
      </Box>

      <Typography
        sx={{ fontSize: 14, fontWeight: 400, color: "#acacacff", textAlign: "left", mb: 0.5 }}
      >
        Starts at
      </Typography>

      {/* Price */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography
          sx={{
            fontSize: 14,
            color: "#757575",
            textDecoration: "line-through",
          }}
        >
          ${product.oldPrice}
        </Typography>
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 700,
            color: "#1976D2",
          }}
        >
          ${product.price}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductCard;
