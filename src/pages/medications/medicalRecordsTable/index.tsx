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

import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import axios from "axios";
import Title from "../../Dashboard/Title";

const defaultTheme = createTheme();
export default function MedicalRecords() {
  const {
    data: medicalRecordsData,
    isFetching,
    isSuccess: isMedicalRecordsSuccess,
  } = useQuery({
    queryKey: ["medicalRecordsData"],
    queryFn: () =>
      axios.get("http://localhost:4500/record").then((res) => {
        return res.data;
      }),
  });
  const { data: countOfRecords, isSuccess: isCountOfRecordsSuccess } = useQuery(
    {
      queryKey: ["countOfRecords"],
      queryFn: () =>
        axios.get("http://localhost:4500/record/count").then((res) => {
          return res.data.TotalMedicalRecords;
        }),
    }
  );
  const { data: countOfNoRecords, isSuccess: isCountOfNoRecordsSuccess } =
    useQuery({
      queryKey: ["countOfNoRecords"],
      queryFn: () =>
        axios
          .get("http://localhost:4500/residents/noMedicalRecordsCount")
          .then((res) => {
            return res.data.ResidentsWithoutMedicalRecord;
          }),
    });

  const {
    data: residentsWithNoRecords,
    isSuccess: isResidentsWithNoRecordsSuccess,
  } = useQuery({
    queryKey: ["residentsWithNoRecords"],
    queryFn: () =>
      axios
        .get("http://localhost:4500/residents/noMedicalRecords")
        .then((res) => {
          return res.data;
        }),
  });

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
                    {isCountOfRecordsSuccess && countOfRecords}

                    <Typography variant="h5" color="gray">
                      Medical Records
                    </Typography>
                  </Typography>
                  {isMedicalRecordsSuccess && (
                    <RecordsTable medicalRecordsData={medicalRecordsData} />
                  )}
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
                    {isCountOfNoRecordsSuccess && countOfNoRecords}
                    <Typography variant="h5" color="gray">
                      Residents Does Not Have A Medical Record
                    </Typography>
                  </Typography>
                  {isResidentsWithNoRecordsSuccess && (
                    <NoRecordsTable
                      residentsWithNoRecords={residentsWithNoRecords}
                    />
                  )}
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
