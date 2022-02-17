import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm, Controller } from "react-hook-form";
import { userLogin } from "../../../api/user";
import { toast } from "react-toastify";
import { useUserContext } from "../../../context/userContext";

const theme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const { setToken, setUserData } = useUserContext();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    try {
      const res = await userLogin(data);
      toast.success("User Sign in successfully.");
      window.localStorage.setItem("token", res?.data?.token);
      window.localStorage.setItem("user", JSON.stringify(res?.data));
      setToken(res?.data?.token);
      setUserData(res?.data);
      navigate("/");
      console.log({ res });
    } catch (error) {
      toast.error(error?.errMsg);
      console.log(error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box sx={{ mt: 1 }}>
            <form onSubmit={handleSubmit(handleLogin)} autoComplete="off">
              <Controller
                name="email"
                control={control}
                rules={{
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Email Address"
                    autoFocus
                    helperText={
                      (errors?.email?.type === "required" &&
                        "This field is required") ||
                      (errors?.email?.type === "pattern" &&
                        "Invalid email address")
                    }
                    error={
                      errors?.email?.type === "required" ||
                      errors?.email?.type === "pattern"
                    }
                  />
                )}
              />
              <Controller
                name="password"
                control={control}
                rules={{
                  required: true,
                  minLength: {
                    value: 8,
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    margin="normal"
                    fullWidth
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    helperText={
                      (errors?.password?.type === "required" &&
                        "This field is required") ||
                      (errors?.password?.type === "minLength" &&
                        "Password must be 8 character")
                    }
                    error={
                      errors?.password?.type === "required" ||
                      errors?.password?.type === "minLength"
                    }
                  />
                )}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </form>
            <Grid container direction="row" justifyContent="flex-end">
              <Link to="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
