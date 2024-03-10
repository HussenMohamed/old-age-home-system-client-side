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
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"; //example data type
import { Tooltip } from "recharts";
import { ButtonGroup, Grid, TextField } from "@mui/material";

const emails = ["username@gmail.com", "user02@gmail.com"];

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const [operationType, setOperationType] = React.useState("add");
  const [amountBeforeOperation, setAmountBeforeOperation] =
    React.useState<number>(12);

  const [amount, setAmount] = React.useState<number>(0);
  const [amountAfterOperation, setAmountAfterOperation] =
    React.useState<number>(amountBeforeOperation);
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Add or Take Items from product X</DialogTitle>
      <Grid container spacing={2} style={{ textAlign: "center" }}>
        <Grid item xs={12}>
          Stock Before {operationType} operation:{" "}
          <span style={{ fontSize: 22 }}>{amountBeforeOperation}</span>
        </Grid>
        <Grid item xs={12}>
          <ButtonGroup aria-label="outlined button group">
            <Button
              variant={operationType === "add" ? "contained" : "outlined"}
              onClick={() => {
                setOperationType("add");
                // setAmountAfterOperation(amountBeforeOperation + amount);
              }}
            >
              Add
            </Button>
            <Button
              variant={operationType === "take" ? "contained" : "outlined"}
              onClick={() => {
                setOperationType("take");
                // setAmountAfterOperation(amountBeforeOperation - amount);
              }}
            >
              Take
            </Button>
          </ButtonGroup>
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="filled-basic"
            label="Amount"
            type="number"
            variant="filled"
            onChange={(e) => {
              //   setAmount(e.target.value);
              const num = e.target.value ? parseInt(e.target.value) : 0;
              if (operationType === "add") {
                setAmountAfterOperation(num + +amountBeforeOperation);
              } else {
                setAmountAfterOperation(+amountBeforeOperation - num);
              }
            }}
          />

          <Grid item xs={12}>
            Stock After {operationType} operation:
            <span style={{ fontSize: 22 }}>{amountAfterOperation}</span>
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  );
}

export default function AddItemsDialog() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        <AddShoppingCartIcon />
      </Button>

      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
