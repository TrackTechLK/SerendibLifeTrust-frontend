import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Login, LoginForm } from "react-admin";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      display={"flex"}
      flexDirection={"row"}
      {...props}
    >
      <p>Made with &hearts; by </p>
      <a
        color="inherit"
        //   href="https://mui.com/"
      >
        TrackTech
      </a>{" "}
      {new Date().getFullYear()}
      {" ©."}
    </Typography>
  );
}

const theme = createTheme();

export default function LoginPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
          <div
            style={{
              minHeight: "100vh",
              placeContent: "center",
              display: "flex",
            }}
          >
            <div
              style={{
                // overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                placeContent: "center",
              }}
            >
              <Card style={{ padding: 40 }} elevation={5}>
                <LoginForm />
                {/* <Copyright /> */}
              </Card>
            </div>
          </div>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
