import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
// import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
// import Link from "@mui/material/Link";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import { mainListItems, secondaryListItems } from "./listItems";
import Chart from "./Chart";
import Deposits from "./Deposits";
import ResidentsTable from "./Orders";
import { OverviewTotalEResidents } from "./overview/overview-total-residents";
import { OverviewTasksProgress } from "./overview/overview-tasks-progress";
import { PieChart } from "@mui/x-charts/PieChart";
import { OverviewTotalProfit } from "./overview/overview-total-profit";
import Navbar from "../../components/navbar-appDrawer";

import Title from "./Title";
import { OverviewFamilyMembers } from "./overview/overview-family-members";

const pieChartData = [
  { id: 0, value: 15, label: "Nurses" },
  { id: 1, value: 4, label: "Admins" },
  { id: 3, value: 3, label: "Security" },
  { id: 4, value: 24, label: "Caregivers" },
  { id: 5, value: 13, label: "Housekeepers" },
];

const defaultTheme = createTheme();

export default function Dashboard() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar page="Dashboard" />
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
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <Deposits />
                </Paper>
              </Grid>

              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs container spacing={2}>
                  <Grid item xs={12} md={6} lg={6}>
                    <OverviewTotalEResidents
                      difference={5}
                      positive={true}
                      sx={{ height: "150px" }}
                      value="24"
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <OverviewTasksProgress value={23} />
                  </Grid>
                </Grid>
                <Grid item xs container spacing={2}>
                  <Grid item xs={12} md={6} lg={6}>
                    <OverviewTotalProfit
                      sx={{ height: "100%" }}
                      total={17}
                      occupied={13}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <OverviewFamilyMembers family={17} residents={24} />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} md={12} lg={6}>
                <Paper sx={{ p: 2 }}>
                  <Title>Staff</Title>
                  <PieChart
                    series={[
                      {
                        data: pieChartData,
                        highlightScope: {
                          faded: "global",
                          highlighted: "item",
                        },
                        faded: {
                          innerRadius: 30,
                          additionalRadius: -30,
                          color: "gray",
                        },
                      },
                    ]}
                    height={250}
                  />
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Title>Residents</Title>
                  <ResidentsTable />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
