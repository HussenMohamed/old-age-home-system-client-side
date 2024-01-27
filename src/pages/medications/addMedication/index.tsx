import {
  Box,
  CssBaseline,
  Toolbar,
  Container,
  Grid,
  Paper,
  Typography,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tab,
  Link,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  OutlinedInput,
  FormHelperText,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Checkbox,
  FormGroup,
} from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RepeatIcon from "@mui/icons-material/Repeat";
import GradingIcon from "@mui/icons-material/Grading";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import Navbar from "../../../components/navbar-appDrawer";
import SendIcon from "@mui/icons-material/Send";
import BackgroundLetterAvatars from "../residentProfile/LettersAvatar";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React, { useState } from "react";
import { AccountCircle, GridOff } from "@mui/icons-material";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Title from "../../Dashboard/Title";

const defaultTheme = createTheme();

// code for the upload image button
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function AddMedication() {
  // code for the medication amount input
  const [selectedChip, setSelectedChip] = useState("Pills");
  type MedicationType =
    | "Pills"
    | "Liquid Medication"
    | "Injection"
    | "Nasal Spray"
    | "Eye Drops";

  type MeasuringUnit = "Pills" | "ml" | "Sprays" | "Drops";

  interface MedicationTypeMapping {
    [key: string]: MeasuringUnit;
  }

  const medicationTypeMapping: MedicationTypeMapping = {
    Pills: "Pills",
    "Liquid Medication": "ml",
    Injection: "ml",
    "Nasal Spray": "Sprays",
    "Eye Drops": "Drops",
  };

  // code for the medication chips type
  const handleTypeSelect = (label) => {
    setSelectedChip(label);
  };

  // code to handle the new reminder in an array
  const [time, setTime] = useState(null);
  const handleTimeChange = (newTime) => {
    setTime(newTime);
  };

  const [amount, setAmount] = useState("");
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const [reminders, setReminders] = useState([]);
  const handleAddReminder = () => {
    // Get the values from the time picker and amount input
    if (!time || amount === "") {
      toast.error("Please enter a time and amount");
    } else {
      const timeValue = time ? dayjs(time).format("HH:mm") : ""; // Format time as string
      const amountValue = amount; // Replace with the actual value from the Input

      console.log(
        `before setReminders =>\n timeValue: ${timeValue} \n amountValue: ${amountValue}`
      );
      // Add a new reminder object to the array
      setReminders([...reminders, { time: timeValue, amount: amountValue }]);

      // Clear the input fields
      setAmount("");
      setTime(null); // Reset the time value
      console.log(`reminders are:`, reminders);
      console.log([...reminders]);
    }
  };

  const [startDate, setStartDate] = React.useState<Dayjs | null>(null);

  const [duration, setDuration] = React.useState("ongoingTreatment");

  const handleDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDuration((event.target as HTMLInputElement).value);
  };

  // Days of the week
  const [days, setDays] = React.useState("everyday");

  const handleDaysChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDays((event.target as HTMLInputElement).value);
  };
  const [week, setWeek] = React.useState({
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
  });
  const { sunday, monday, tuesday, wednesday, thursday, friday, saturday } =
    week;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeek({
      ...week,
      [event.target.name]: event.target.checked,
    });
  };

  // Intake Instructions
  const [instructions, setInstructions] = React.useState({
    beforeMeal: false,
    afterMeal: false,
    beforeTheBreakfast: false,
    beforeGoingToBed: false,
    inEmptyStomach: false,
  });
  const {
    beforeMeal,
    afterMeal,
    beforeTheBreakfast,
    beforeGoingToBed,
    inEmptyStomach,
  } = instructions;
  const handleInstructionsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInstructions({
      ...instructions,
      [event.target.name]: event.target.checked,
    });
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar page="Add New Medication" />
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
              <Grid item md={4} xs={12}>
                <Grid item xs={12}>
                  <Paper
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "20px",
                      overflow: "hidden",
                      marginBottom: "20px",
                    }}
                  >
                    <div>
                      <img
                        src="../../../../public/medicine.jpg"
                        alt="medicine"
                        width="100%"
                      />
                    </div>
                    <Button
                      component="label"
                      variant="contained"
                      startIcon={<CloudUploadIcon />}
                      sx={{ margin: "5px 0 10px" }}
                    >
                      Upload Image
                      <VisuallyHiddenInput type="file" />
                    </Button>
                    {/* <script async src="https://cse.google.com/cse.js?cx=10a01f0b35ce84e25">
                    </script>
                    <div class="gcse-search"></div> */}
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper
                    sx={{
                      padding: 2,
                      display: "flex",
                      flexDirection: "column",
                      // height: 240,
                      // justifyContent: "center",
                      borderRadius: "20px",
                      // alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <Title>Medication Schedule For Resident:</Title>
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                      }}
                    >
                      <Typography color="gray">Name:</Typography>
                      <Typography> John Doe</Typography>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                      }}
                    >
                      <Typography color="gray">ID:</Typography>
                      <Typography> R653464</Typography>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper
                    sx={{
                      padding: 2,
                      display: "flex",
                      flexDirection: "column",
                      // height: 240,
                      // justifyContent: "center",
                      borderRadius: "20px",
                      // alignItems: "center",
                    }}
                  >
                    <Typography variant="h6">Intake Instructions</Typography>
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        justifyContent: "center",
                      }}
                    >
                      <GradingIcon style={{ margin: "10px" }} />
                      <FormControl
                        // sx={{ margin: "-20px 0 0 20px" }}
                        component="fieldset"
                        variant="standard"
                      >
                        {/* <FormLabel component="legend">Choose Days</FormLabel> */}
                        <FormGroup>
                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                            }}
                          >
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={beforeMeal}
                                  onChange={handleInstructionsChange}
                                  name="beforeMeal"
                                  sx={{ marginRight: "-8px" }}
                                  size="small"
                                />
                              }
                              label="Before Meal"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={afterMeal}
                                  onChange={handleInstructionsChange}
                                  name="afterMeal"
                                  sx={{ marginRight: "-8px" }}
                                  size="small"
                                />
                              }
                              label="After Meal"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={beforeTheBreakfast}
                                  onChange={handleInstructionsChange}
                                  name="beforeTheBreakfast"
                                  sx={{ marginRight: "-8px" }}
                                  size="small"
                                />
                              }
                              label="Before The Breakfast"
                            />

                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={beforeGoingToBed}
                                  onChange={handleInstructionsChange}
                                  name="beforeGoingToBed"
                                  sx={{ marginRight: "-8px" }}
                                  size="small"
                                />
                              }
                              label="Before Going To Bed"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={inEmptyStomach}
                                  onChange={handleInstructionsChange}
                                  name="inEmptyStomach"
                                  sx={{ marginRight: "-8px" }}
                                  size="small"
                                />
                              }
                              label="In Empty Stomach"
                            />
                          </div>
                          <TextField
                            id="standard-multiline-flexible"
                            label="Additional Instruction?"
                            multiline
                            maxRows={4}
                            variant="standard"
                            sx={{ marginTop: "-5px" }}
                          />
                        </FormGroup>
                        {/* <TextField
                          id="standard-multiline-flexible"
                          label="Multiline"
                          multiline
                          maxRows={4}
                          variant="standard"
                        /> */}
                      </FormControl>
                    </div>
                  </Paper>
                </Grid>
              </Grid>

              <Grid item md={8}>
                <Paper
                  sx={{
                    pt: 2,
                    pb: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    component="form"
                    noValidate
                    // onSubmit={handleSubmit}
                    sx={{ mt: 3 }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12} textAlign="center">
                        <TextField
                          id="input-with-icon-textfield"
                          label="Medicine Name"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <VaccinesIcon />
                              </InputAdornment>
                            ),
                          }}
                          // variant="standard"
                          variant="filled"
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        textAlign="center"
                        display="flex"
                        justifyContent="center"
                        gap="5px"
                        flexWrap="wrap"
                      >
                        <Chip
                          label="Pills"
                          color={
                            selectedChip === "Pills" ? "primary" : "default"
                          }
                          onClick={() => handleTypeSelect("Pills")}
                        />
                        <Chip
                          label="Liquid Medication"
                          color={
                            selectedChip === "Liquid Medication"
                              ? "primary"
                              : "default"
                          }
                          onClick={() => handleTypeSelect("Liquid Medication")}
                        />
                        <Chip
                          label="Injection"
                          color={
                            selectedChip === "Injection" ? "primary" : "default"
                          }
                          onClick={() => handleTypeSelect("Injection")}
                        />
                        <Chip
                          label="Nasal Spray"
                          color={
                            selectedChip === "Nasal Spray"
                              ? "primary"
                              : "default"
                          }
                          onClick={() => handleTypeSelect("Nasal Spray")}
                        />
                        <Chip
                          label="Eye Drops"
                          color={
                            selectedChip === "Eye Drops" ? "primary" : "default"
                          }
                          onClick={() => handleTypeSelect("Eye Drops")}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Divider light />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        marginLeft="20px"
                        display="flex"
                        flexDirection="column"
                      >
                        <Typography variant="h6">Reminder Times</Typography>
                        <Typography color="text.secondary" variant="body2">
                          Add Times and Dosage to take the medicine
                        </Typography>
                      </Grid>
                      <Grid container marginLeft={3}>
                        <Grid item xs={12} sm={6}>
                          <FormControl
                            sx={{ m: 1, width: "25ch" }}
                            variant="outlined"
                          >
                            <Typography fontSize={18}>Time</Typography>
                            <Typography
                              color="text.secondary"
                              variant="body2"
                              lineHeight={1.1}
                            >
                              What is the time when the medication should be
                              taken?
                            </Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DemoContainer components={["TimePicker"]}>
                                <TimePicker
                                  onChange={handleTimeChange}
                                  value={time}
                                />
                              </DemoContainer>
                            </LocalizationProvider>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <FormControl
                            sx={{ m: 1, width: "25ch" }}
                            variant="outlined"
                          >
                            <Typography fontSize={18}>Amount</Typography>
                            <Typography
                              color="text.secondary"
                              variant="body2"
                              lineHeight={1.1}
                              marginBottom="7px"
                            >
                              How many {medicationTypeMapping[selectedChip]} do
                              you want to be taken at once?
                            </Typography>
                            <OutlinedInput
                              id="outlined-adornment-weight"
                              endAdornment={
                                <InputAdornment position="end">
                                  {medicationTypeMapping[selectedChip]}
                                </InputAdornment>
                              }
                              onChange={handleAmountChange}
                              value={amount}
                              aria-describedby="outlined-weight-helper-text"
                              inputProps={{
                                "aria-label": "weight",
                              }}
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} textAlign="center" marginTop="-10px">
                        <Button
                          variant="outlined"
                          endIcon={<SendIcon />}
                          onClick={handleAddReminder}
                        >
                          Add New Reminder
                        </Button>
                      </Grid>
                    </Grid>

                    <Grid container margin="20px 0 10px">
                      <Grid item xs={3} textAlign="center">
                        <AccessTimeIcon color="primary" />
                      </Grid>
                      <Grid item xs={9}>
                        {reminders.map((reminder, index) => (
                          <div style={{ display: "flex" }}>
                            <Grid item xs={6} display="flex" gap="5px">
                              <Typography color="text.secondary">
                                Time:
                              </Typography>
                              <Typography>{reminder.time}</Typography>
                            </Grid>
                            <Grid item xs={6} display="flex" gap="5px">
                              <Typography color="text.secondary">
                                Amount:
                              </Typography>
                              <Typography>{reminder.amount}</Typography>
                            </Grid>
                          </div>
                        ))}
                      </Grid>
                    </Grid>
                    <Divider light />
                    <Grid item xs={12} margin="10px 0 0 20px">
                      <Typography variant="h6">Schedule</Typography>
                    </Grid>
                    <Grid item xs={12} margin="0 20px">
                      <Typography marginBottom="-10px">Start Date</Typography>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={["DatePicker"]}>
                          <DatePicker
                            value={startDate}
                            onChange={(newValue) => setStartDate(newValue)}
                          />
                        </DemoContainer>
                      </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ margin: "20px" }}>
                      <Typography>Duration</Typography>
                      <FormControl>
                        <RadioGroup
                          aria-labelledby="demo-controlled-radio-buttons-group"
                          name="controlled-radio-buttons-group"
                          value={duration}
                          onChange={handleDurationChange}
                        >
                          <FormControlLabel
                            value="ongoingTreatment"
                            control={<Radio />}
                            label="Ongoing Treatment"
                          />
                          <div
                            style={{
                              display: "flex",
                              // justifyContent: "center",
                              alignItems: "center",
                              alignContent: "center",
                              // marginTop: "-15px",
                            }}
                          >
                            <FormControlLabel
                              value="numberOfDays"
                              control={<Radio />}
                              label="Number Of Days"
                              // sx={{ marginTop: "-10px" }}
                            />
                            {duration == "numberOfDays" && (
                              <Grid
                                item
                                xs={12}
                                sm={6}
                                sx={{ marginTop: "-15px" }}
                              >
                                <TextField
                                  id="standard-number"
                                  label="Number"
                                  type="number"
                                  variant="standard"
                                  // sx={{ display: "inline" }}
                                />
                              </Grid>
                            )}
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <Grid item xs={12} sx={{ marginTop: "10px" }}>
                        <Typography>Days</Typography>
                        <FormControl>
                          <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={days}
                            onChange={handleDaysChange}
                          >
                            <FormControlLabel
                              value="everyday"
                              control={<Radio />}
                              label="Everyday"
                            />

                            <FormControlLabel
                              value="specificDays"
                              control={<Radio />}
                              label="Specific Days"
                              // sx={{ marginTop: "-10px" }}
                            />
                            {days == "specificDays" && (
                              <Grid item xs={12} margin="20px 20px">
                                <FormControl
                                  sx={{ margin: "-20px 0 0 20px" }}
                                  component="fieldset"
                                  variant="standard"
                                >
                                  <FormLabel component="legend">
                                    Choose Days
                                  </FormLabel>
                                  <FormGroup>
                                    <div
                                      style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                      }}
                                    >
                                      <FormControlLabel
                                        control={
                                          <Checkbox
                                            checked={sunday}
                                            onChange={handleChange}
                                            name="sunday"
                                            sx={{ marginRight: "-8px" }}
                                            size="small"
                                          />
                                        }
                                        label="Sunday"
                                      />
                                      <FormControlLabel
                                        control={
                                          <Checkbox
                                            checked={monday}
                                            onChange={handleChange}
                                            name="monday"
                                            sx={{ marginRight: "-8px" }}
                                            size="small"
                                          />
                                        }
                                        label="Monday"
                                      />
                                      <FormControlLabel
                                        control={
                                          <Checkbox
                                            checked={tuesday}
                                            onChange={handleChange}
                                            name="tuesday"
                                            sx={{ marginRight: "-8px" }}
                                            size="small"
                                          />
                                        }
                                        label="Tuesday"
                                      />

                                      <FormControlLabel
                                        control={
                                          <Checkbox
                                            checked={wednesday}
                                            onChange={handleChange}
                                            name="wednesday"
                                            sx={{ marginRight: "-8px" }}
                                            size="small"
                                          />
                                        }
                                        label="Wednesday"
                                      />
                                      <FormControlLabel
                                        control={
                                          <Checkbox
                                            checked={thursday}
                                            onChange={handleChange}
                                            name="thursday"
                                            sx={{ marginRight: "-8px" }}
                                            size="small"
                                          />
                                        }
                                        label="Thursday"
                                      />
                                      <FormControlLabel
                                        control={
                                          <Checkbox
                                            checked={friday}
                                            onChange={handleChange}
                                            name="friday"
                                            sx={{ marginRight: "-8px" }}
                                            size="small"
                                          />
                                        }
                                        label="Friday"
                                      />
                                      <FormControlLabel
                                        control={
                                          <Checkbox
                                            checked={saturday}
                                            onChange={handleChange}
                                            name="saturday"
                                            sx={{ marginRight: "-8px" }}
                                            size="small"
                                          />
                                        }
                                        label="Saturday"
                                      />
                                    </div>
                                  </FormGroup>
                                </FormControl>
                              </Grid>
                            )}
                          </RadioGroup>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} textAlign="center">
                <Button variant="contained" endIcon={<SendIcon />} size="large">
                  Add New Medication Schedule
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
