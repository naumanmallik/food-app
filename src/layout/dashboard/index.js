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
            <div style={{ flexGrow: 1, display: "flex",  }}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  userSelect: "none",
                  textTransform: "uppercase",
                }}
              >
                Food App
              </Typography>
              <span style={{ marginLeft: "20px", display: "flex", alignItems: "center" }}>Invoices</span>
            </div>

            <Box sx={{ flexGrow: 0 }}>
              <span>Nauman Malik</span>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default ClientLayout;
