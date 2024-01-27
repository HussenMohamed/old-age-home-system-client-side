import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Container,
  Box,
  Toolbar,
  Grid,
  Typography,
  Paper,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import RecordsTable from "./recordsTable";
import Navbar from "../../../components/navbar-appDrawer";
import NoRecordsTable from "./noRecordsTable";
const defaultTheme = createTheme();
export default function MedicalRecords() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar page="Medical Records" />
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
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper>
                  <Typography
                    variant="h5"
                    textAlign="center"
                    pt={2}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    gap={1}
                    color="primary"
                    fontWeight="bold"
                  >
                    39{" "}
                    <Typography variant="h5" color="gray">
                      Medical Records
                    </Typography>
                  </Typography>
                  <RecordsTable />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper>
                  <Typography
                    variant="h5"
                    textAlign="center"
                    pt={2}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    gap={1}
                    color="primary"
                    fontWeight="bold"
                  >
                    8
                    <Typography variant="h5" color="gray">
                      Residents Does Not Have A Medical Record
                    </Typography>
                  </Typography>
                  <NoRecordsTable />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
