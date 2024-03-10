import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, Box, Toolbar, Grid, Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/navbar-appDrawer";
import ProductsTable from "./productsTable";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import StaffTable from "./staffTable";
const defaultTheme = createTheme();

export default function Inventory() {
  const navigate = useNavigate();
  const { data: productsData, isSuccess } = useQuery({
    queryKey: ["productsData"],
    queryFn: () =>
      axios.get("http://localhost:4500/product").then((res) => {
        return res.data;
      }),
  });
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar page="Inventory" />
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
                {isSuccess && <ProductsTable productsData={productsData} />}
              </Grid>
              <Grid item xs={12} textAlign="center">
                <Button
                  variant="contained"
                  onClick={() => navigate(`/inventory/addProduct`)}
                >
                  Add New Product
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
