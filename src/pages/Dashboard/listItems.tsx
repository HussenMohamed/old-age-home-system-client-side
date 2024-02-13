import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";
import MedicationIcon from "@mui/icons-material/Medication";
import AssignmentIcon from "@mui/icons-material/Assignment";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import { NavLink, useLocation } from "react-router-dom";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

const MainListItems = () => {
  const location = useLocation();
  const { pathname } = location;
  // console.log(pathname);
  return (
    <React.Fragment>
      <ListItemButton component={NavLink} to="/">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton component={NavLink} to="/residents">
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Residents" />
      </ListItemButton>
      <ListItemButton component={NavLink} to="/staff">
        <ListItemIcon>
          <GroupWorkIcon />
        </ListItemIcon>
        <ListItemText primary="Staff" />
      </ListItemButton>
      <ListItemButton component={NavLink} to="/residents/MedicalRecords">
        <ListItemIcon>
          <MedicationIcon />
        </ListItemIcon>
        <ListItemText primary="Medical Records" />
      </ListItemButton>
      <ListItemButton component={NavLink} to="/tasks">
        <ListItemIcon>
          <TaskAltIcon />
        </ListItemIcon>
        <ListItemText primary="Tasks" />
      </ListItemButton>
      <ListItemButton component={NavLink} to="/staff/S6754/myTasks">
        <ListItemIcon>
          <TaskAltIcon />
        </ListItemIcon>
        <ListItemText primary="My Tasks" />
      </ListItemButton>
      <ListItemButton component={NavLink} to="/inventory">
        <ListItemIcon>
          <InventoryIcon />
        </ListItemIcon>
        <ListItemText primary="Inventory" />
      </ListItemButton>
      <ListItemButton component={NavLink} to="/FamilyMembers">
        <ListItemIcon>
          <FamilyRestroomIcon />
        </ListItemIcon>
        <ListItemText primary="Family Members" />
      </ListItemButton>
    </React.Fragment>
  );
};

const SecondaryListItems = () => {
  return (
    <React.Fragment>
      <ListSubheader component="div" inset>
        Saved reports
      </ListSubheader>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="New Residents" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Staff Reports" />
      </ListItemButton>
      {/* <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Year-end sale" />
      </ListItemButton> */}
    </React.Fragment>
  );
};
export { MainListItems, SecondaryListItems };
