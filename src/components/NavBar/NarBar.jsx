// src/components/Navbar/Navbar.jsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

//logo
import logo from "../../assets/logo/site-logo.png";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null); 
  const [mobileOpen, setMobileOpen] = useState(false); 
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false); 

  const handleCategoryClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const handleMobileCategoryToggle = (e) => {
    e.stopPropagation();
    setMobileCategoryOpen((prev) => !prev);
  };

  const categoryItems = [
    "Home Service",
    "Kitchen Service",
    "Bathroom Service",
    "Cleaning Service",
  ];

  const navItems = ["Home", "Category", "About Us", "Contact"];

  return (
    <>
      <AppBar
        position="static"
        sx={{
          background: "#fff",
          color: "#000",
         boxShadow:"none",
          px: { xs: 2, md: 5 },
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo (image) */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            {/* site logo */}
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{ height: 40, width: "auto", mr: 1 }}
            />          
           
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 3,
            }}
          >
            {navItems.map((item) =>
              item === "Category" ? (
                <Box key={item}>
                  <Button
                    onClick={handleCategoryClick}
                    color="inherit"
                    endIcon={<ArrowDropDownIcon />}
                    aria-controls={Boolean(anchorEl) ? "category-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={Boolean(anchorEl) ? "true" : undefined}
                  >
                    {item}
                  </Button>

                  <Menu
                    id="category-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    MenuListProps={{ "aria-labelledby": "category-button" }}
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    transformOrigin={{ vertical: "top", horizontal: "left" }}
                  >
                    {categoryItems.map((subItem) => (
                      <MenuItem key={subItem} onClick={handleClose}>
                        {subItem}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ) : (
                <Button key={item} color="inherit">
                  {item}
                </Button>
              )
            )}

            {/* Shopping Bag */}
            <IconButton aria-label="shopping bag" size="large">
              <Badge badgeContent={1} color="error">
                <ShoppingBagIcon />
              </Badge>
            </IconButton>

            {/* Login Button */}
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(180deg, #2196F3, #21CBF3)",
                color: "#fff",
                borderRadius: "20px",
                px: 3,
                textTransform: "none",
              }}
            >
              Login
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            edge="end"
            color="inherit"
            sx={{ display: { md: "none" } }}
            onClick={handleDrawerToggle}
            aria-label="open menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile view */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": { width: 300, padding: 2 },
        }}
      >
        {/* Drawer Header with close button */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box component="img" src={logo} alt="logo" sx={{ height: 36, mr: 1 }} />
          </Box>
          <IconButton onClick={handleDrawerToggle} aria-label="close menu">
            <CloseIcon />
          </IconButton>
        </Box>

        <List>
          {navItems.map((item) => {
            if (item === "Category") {
              return (
                <Box key={item}>
                  <ListItem button onClick={handleMobileCategoryToggle}>
                    <ListItemText primary={item} />
                    {mobileCategoryOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </ListItem>

                  <Collapse in={mobileCategoryOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {categoryItems.map((subItem) => (
                        <ListItem
                          button
                          key={subItem}
                          sx={{ pl: 4 }}
                          onClick={() => {                            
                            setMobileOpen(false); 
                            setMobileCategoryOpen(false);
                          }}
                        >
                          <ListItemText primary={subItem} />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </Box>
              );
            }

            return (
              <ListItem
                button
                key={item}
                onClick={() => {
                  // navigate or handle item click
                  setMobileOpen(false);
                }}
              >
                <ListItemText primary={item} />
              </ListItem>
            );
          })}

          <ListItem>
            <ListItemIcon>
              <Badge badgeContent={3} color="error">
                <ShoppingBagIcon />
              </Badge>
            </ListItemIcon>

            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(45deg, #2196F3, #21CBF3)",
                color: "#fff",
                borderRadius: "20px",
                px: 3,
                ml: 1,
                textTransform: "none",
              }}
              onClick={() => {
                // handle login click (close drawer or open login)
                setMobileOpen(false);
              }}
            >
              Login
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
