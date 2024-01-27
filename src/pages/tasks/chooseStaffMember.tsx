import * as React from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import { Fab } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { styled, lighten, darken } from "@mui/system";
import { useNavigate } from "react-router-dom";
const userData = [
  { userName: "JohnDoe", department: "HR" },
  { userName: "JaneSmith", department: "HR" },
  { userName: "BobJohnson", department: "IT" },
  { userName: "AliceBrown", department: "HR" },
  { userName: "DavidMiller", department: "Operations" },
  { userName: "EmilyWhite", department: "Sales" },
  { userName: "MichaelJones", department: "Operations" },
  { userName: "SophiaDavis", department: "Customer Support" },
  { userName: "WilliamClark", department: "Operations" },
  { userName: "OliviaTaylor", department: "Legal" },
  { userName: "DanielSmith", department: "Public Relations" },
  { userName: "EvaJohnson", department: "IT" },
  { userName: "HenryJones", department: "Public Relations" },
  { userName: "GraceMiller", department: "IT" },
  { userName: "BenjaminWhite", department: "IT" },
  { userName: "LilyDavis", department: "Public Relations" },
];

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

Autocomplete;
const GroupHeader = styled("div")(({ theme }) => ({
  position: "sticky",
  top: "-8px",
  padding: "4px 10px",
  color: theme.palette.primary.main,
  backgroundColor:
    theme.palette.mode === "light"
      ? lighten(theme.palette.primary.light, 0.85)
      : darken(theme.palette.primary.main, 0.8),
}));

const GroupItems = styled("ul")({
  padding: 0,
});

function SimpleDialog(props: SimpleDialogProps) {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = React.useState("");

  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };
  const options = userData
    .map((option) => ({
      department: option.department,
      ...option,
    }))
    .sort((a, b) => a.department.localeCompare(b.department));

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      sx={{ padding: "15px" }}
      style={{ padding: "15px" }}
    >
      <DialogTitle>Choose Staff Member</DialogTitle>
      <Autocomplete
        id="grouped-demo"
        options={options.sort(
          (a, b) => -b.department.localeCompare(a.department)
        )}
        groupBy={(option) => option.department}
        getOptionLabel={(option) => option.userName}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="With categories" />
        )}
        renderGroup={(params) => (
          <li key={params.key}>
            <GroupHeader>{params.group}</GroupHeader>
            <GroupItems>{params.children}</GroupItems>
          </li>
        )}
        onChange={(event: any, newValue: string | null) => {
          setInputValue(newValue);
        }}
      />
      <Button onClick={() => navigate("/staff/S5464/addTask")}>Send</Button>
    </Dialog>
  );
}

export default function DialogChooseStaff() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      {/* <Typography variant="subtitle1" component="div">
        Selected: {selectedValue}
      </Typography> */}
      {/* <br /> */}
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open simple dialog
      </Button> */}
      <Fab
        color="primary"
        size="medium"
        aria-label="add"
        // sx={{ top: 5, right: 0 }}
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={() => handleClose(selectedValue)}
      />
    </div>
  );
}
