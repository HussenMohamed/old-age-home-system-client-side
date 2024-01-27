import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ButtonGroup from "@mui/material/ButtonGroup";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { useQuery } from "@tanstack/react-query";
import { MuiTelInput } from "mui-tel-input";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../../App.css";
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
enum UserType {
  Staff = "staff",
  FamilyMember = "familyMember",
}
export const SignUp = () => {
  // Phone number input
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleChange = (newValue) => {
    setPhoneNumber(newValue);
  };
  // Select Staff or Family Member
  const [userType, setUserType] = useState<UserType>(UserType.Staff);
  // In case of Staff, Select the role
  const [role, setRole] = useState("");
  const handleRole = (event: SelectChangeEvent) => {
    setRole(event.target.value as string);
  };
  // fetch the roles so the user can select from them
  const {
    isLoading,
    isError,
    data: roles,
    error,
    isSuccess,
  } = useQuery({
    queryKey: ["roles"], // http://localhost:4500/roles
    queryFn: () =>
      fetch("http://localhost:4500/roles").then((res) => res.json()),
  });
  if (isLoading) {
    console.log("roles Loading");
  }
  if (isError) {
    console.log("Movie Error " + error.message);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      username: `${data.get("firstName")} ${data.get("lastName")}`,
      email: data.get("email"),
      password: data.get("password"),
      phoneNumber: data.get("phoneNumber"),
      role: userType,
      staffRoleId: Number(data.get("demo-simple-select"))
        ? Number(data.get("demo-simple-select"))
        : null,
      relatedResident: Number(data.get("relatedResidentId")),
      relationShip: data.get("relationship"),
    };
    console.log(userData);
    const result = sendUserData(userData);
    console.log(result);
  };
  // post the userData to the backend
  const navigate = useNavigate();
  const { mutate: sendUserData } = useMutation({
    mutationKey: ["rateMovie"],
    mutationFn: async (userData) => {
      const res = await fetch(`http://localhost:4500/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any other headers as needed
        },
        body: JSON.stringify(userData),
      });
      return res.json();
    },
    onSettled: (data) => {
      console.log("From the onSettled function");
      console.log(data);
      console.log(JSON.stringify(data));
      if (data.success) {
        toast.success(
          "Your Request has been sent to the Adminstrators, Wait for it to them to accept it"
        );
        navigate("/login");
      } else {
        toast.error(data.message);
      }
    },
  });
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" className="special-page">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12}>
                <MuiTelInput
                  value={phoneNumber}
                  onChange={handleChange}
                  style={{ width: "100%" }}
                  label="Phone Number"
                  id="phoneNumber"
                  name="phoneNumber"
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12}>
                {" "}
                <ButtonGroup aria-label="outlined button group">
                  <Button
                    variant={
                      userType === UserType.Staff ? "contained" : "outlined"
                    }
                    onClick={() => setUserType(UserType.Staff)}
                  >
                    Staff
                  </Button>
                  <Button
                    variant={
                      userType === UserType.FamilyMember
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() => setUserType(UserType.FamilyMember)}
                  >
                    Family Member
                  </Button>
                </ButtonGroup>
                {userType === UserType.Staff ? (
                  // the data related to the Staff members
                  <Grid item xs={12} marginTop={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Role
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        name="demo-simple-select"
                        id="demo-simple-select"
                        value={role}
                        label="Role"
                        onChange={handleRole}
                      >
                        {isSuccess
                          ? roles.map((role, index) => (
                              <MenuItem key={index} value={role.RoleID}>
                                {role.RoleName}
                              </MenuItem>
                            ))
                          : // You can add a fallback or leave it empty if you don't want to render anything when isSuccess is false
                            null}
                      </Select>
                    </FormControl>
                  </Grid>
                ) : (
                  // the data related to the Family members
                  <Box>
                    <Grid item xs={12} marginTop={2}>
                      {" "}
                      <TextField
                        name="relatedResidentId"
                        required
                        fullWidth
                        id="relatedResidentId"
                        label="Related Resident ID"
                        autoComplete="off"
                      />
                    </Grid>
                    <Grid item xs={12} marginTop={2}>
                      {" "}
                      <TextField
                        name="relationship"
                        required
                        fullWidth
                        id="relationship"
                        label="Relationship"
                        autoComplete="off"
                      />
                    </Grid>
                  </Box>
                )}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
