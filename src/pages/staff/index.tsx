import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, Box, Toolbar, Grid } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import Navbar from "../../components/navbar-appDrawer";
import StaffTable from "./staffTable";
const defaultTheme = createTheme();

export default function Staff() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar page="Staff" />
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
                <StaffTable />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
