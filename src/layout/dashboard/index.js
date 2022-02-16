import {
  AppBar,
  Box,
  CssBaseline,
  Toolbar,
  Typography,
  Container,
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";

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
          bgcolor: "rgb(17, 25, 54)",
          color: "#fff",
          zIndex: 1220,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <div style={{ flexGrow: 1, display: "flex" }}>
              <Typography
                component={Link}
                to={"/"}
                variant="h6"
                noWrap
                sx={{
                  userSelect: "none",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                Food App
              </Typography>
              <Typography
                component={Link}
                to={"/"}
                style={{
                  marginLeft: "20px",
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                Menus
              </Typography>
              <Typography
                component={Link}
                to={"/invoices"}
                style={{
                  marginLeft: "20px",
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                Meals
              </Typography>
              <Typography
                component={Link}
                to={"/"}
                style={{
                  marginLeft: "20px",
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                Invoices
              </Typography>
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
