import React, { useState } from "react";
import {
  Box,
  Avatar,
  Menu,
  MenuItem,
  IconButton,
  Typography,
  Tooltip,
} from "@mui/material";

import { Logout } from "@mui/icons-material";
import PetsIcon from "@mui/icons-material/Pets";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";

export const NavDropdown = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              sx={{
                width: 55,
                height: 55,
                backgroundColor: "#04111c",
                "&:hover": {
                  backgroundColor: "#fff",
                },
              }}
            >
              <Typography variant="h2" color="#a1bad0">
                {props.letter}
              </Typography>
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <CircleNotificationsIcon sx={{ height: 30, width: 30 }} />
          <Typography variant="h4">Notifications</Typography>
        </MenuItem>
        <MenuItem onClick={props.goToEditAccount}>
          <AccountCircleIcon sx={{ height: 30, width: 30 }} />
          <Typography variant="h4">Edit Account</Typography>
        </MenuItem>
        <MenuItem>
          <PetsIcon sx={{ height: 30, width: 30 }} />
          <Typography variant="h4" marginLeft={4}>
            My Dogs
          </Typography>
        </MenuItem>

        <MenuItem onClick={props.handleLogout}>
          <Logout sx={{ height: 30, width: 30 }} />
          <Typography variant="h4" marginLeft={4}>
            Logout
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
};
