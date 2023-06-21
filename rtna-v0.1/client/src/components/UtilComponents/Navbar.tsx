import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ListItemIcon, MenuItem, ListItemText } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CreateIcon from "@mui/icons-material/Create";
import RateReviewIcon from "@mui/icons-material/RateReview";
import LoginIcon from "@mui/icons-material/Login";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="info"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            rtna-v0.1 -Blogs
          </Typography>
          <MenuItem>
            <ListItemIcon>
              <AutoStoriesIcon fontSize="small" style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText>Read Blogs From Others</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <CreateIcon fontSize="small" style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText>Write A Blog</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <RateReviewIcon fontSize="small" style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText>Review Your Blogs</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <LoginIcon fontSize="small" style={{ color: "white" }} />
            </ListItemIcon>
            <Button style={{ color: "white" }}>Login</Button>
          </MenuItem>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
