import {
  AppBar,
  Box,
  CssBaseline,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Drawer,
  ListItem,
  ListItemIcon,
  List,
  Container,
  ListItemText,
} from "@mui/material";
import { Outlet } from "react-router-dom";

const drawerWidth = 200;

const ClientLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: "#24292e",
          color: "#fff",
          zIndex: 1220,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                userSelect: "none",
                textTransform: "uppercase",
              }}
            >
              Food App
            </Typography>

            <Box sx={{ flexGrow: 0 }}>
              <span>Nauman Malik</span>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default ClientLayout;
