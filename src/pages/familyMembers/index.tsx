import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, Box, Toolbar, Grid, Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Navbar from "../../components/navbar-appDrawer";
import FamilyTable from "./familyMembersTable";
import { useEffect, useState } from "react";
import AddNewFamilyMember from "./AddNewMemberDialog";

import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import axios from "axios";
// import StaffTable from "./staffTable";
const defaultTheme = createTheme();

export default function FamilyMembers() {
  const {
    isPending,
    error,
    data: familyData,
    isFetching,
    isSuccess,
    refetch,
  } = useQuery({
    queryKey: ["familyMembersData"],
    queryFn: () =>
      axios.get("http://localhost:4500/familyMembers").then((res) => {
        return res.data;
      }),
  });

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [updateTableFlag, setUpdateTableFlag] = useState(false);
  useEffect(() => {
    refetch(); // Call the refetch function whenever updateTableFlag changes
  }, [updateTableFlag]); // Specify updateTableFlag as the dependency

  if (error) return "An error has occurred: " + error.message;
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar page="Family Members" />
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
                {isSuccess && <FamilyTable familyData={familyData} />}
                {/* <FamilyTable /> */}
              </Grid>
              <Grid item xs={12} textAlign="center">
                <AddNewFamilyMember refetch={refetch} />
              </Grid>
              <Grid item xs={12} textAlign="center">
                {/* <Button onClick={() => updateTable(true)}>refetch</Button> */}
              </Grid>
            </Grid>

            {/* End Of add new resident dialog */}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
