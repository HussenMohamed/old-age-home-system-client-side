import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, Box, Toolbar, Grid, Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { NavLink } from "react-router-dom";

import Navbar from "../../components/navbar-appDrawer";
import ResidentsTable from "./residentsTable";

import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import axios from "axios";

const defaultTheme = createTheme();

export default function Residents() {
  const {
    isPending,
    error,
    data: residentsData,
    isFetching,
    isSuccess,
    refetch,
  } = useQuery({
    queryKey: ["residentsData"],
    queryFn: () =>
      axios.get("http://localhost:4500/residents").then((res) => {
        return res.data;
      }),
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar page="Residents" />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          {/* Content here */}
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                {isSuccess && <ResidentsTable residentsData={residentsData} />}
                {/* <ResidentsTableV2 /> */}
              </Grid>
            </Grid>
            <Grid container spacing={3} marginTop={1}>
              <Grid item xs={12} textAlign="center">
                <Button
                  variant="contained"
                  component={NavLink}
                  to="/residents/add"
                >
                  Add New Resident
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
