import {
  Box,
  CssBaseline,
  Toolbar,
  Container,
  Grid,
  Paper,
  TextField,
  Button,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Navbar from "../../../components/navbar-appDrawer";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import React, { useState } from "react";
import { Dayjs } from "dayjs";

import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const defaultTheme = createTheme();
export default function AddProduct() {
  // dueDate with default value
  const [expirationDate, setExpirationDate] = React.useState<Dayjs | null>(
    null
  );
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [currentStock, setCurrentStock] = useState();
  const [stockThreshold, setStockThreshold] = useState();

  const handleSubmit = () => {
    const productData = {
      expirationDate: expirationDate?.format("YYYY-MM-DD"),
      productName,
      category: productCategory,
      description: productDescription,
      currentStock,
      stockThreshold,
    };
    // console.log(productData);
    sendProductData(productData);
  };
  const { mutate: sendProductData } = useMutation({
    mutationKey: ["sendProductData"],
    mutationFn: (data) => {
      axios
        .post(`http://localhost:4500/product`, data)
        .then((response) => {
          console.log(response);
          toast.success(response.data.success);
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.response.data.message);
        });
    },
  });
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar page="Add New Product" />
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
                <Paper sx={{ p: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-required"
                        label="Product Name"
                        fullWidth
                        onChange={(e) => {
                          setProductName(e.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-required"
                        label="Category"
                        fullWidth
                        onChange={(e) => {
                          setProductCategory(e.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="outlined-multiline-static"
                        label="Product Description"
                        multiline
                        rows={3}
                        fullWidth
                        onChange={(e) => {
                          setProductDescription(e.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-number"
                        label="Current Stock"
                        type="number"
                        fullWidth
                        InputLabelProps={{
                          shrink: true,
                        }}
                        onChange={(e) => {
                          setCurrentStock(parseInt(e.target.value));
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-number"
                        label="Stock Threshold"
                        type="number"
                        fullWidth
                        InputLabelProps={{
                          shrink: true,
                        }}
                        onChange={(e) => {
                          setStockThreshold(parseInt(e.target.value));
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={["DatePicker"]}>
                          <DatePicker
                            value={expirationDate}
                            onChange={(newValue) => setExpirationDate(newValue)}
                            label="End Date"
                            sx={{ width: "100%" }}
                          />
                        </DemoContainer>
                      </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} textAlign="center">
                      <Button variant="contained" onClick={handleSubmit}>
                        Add Product
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
