import React from "react";
import Box from "@mui/material/Box";
import "./registration.css";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const currencies = [
  {
    value: 1,
    label: "OOPS",
  },
  {
    value: 2,
    label: "PPT",
  },
  {
    value: 3,
    label: "TOURISM",
  },
  {
    value: 4,
    label: "Polity",
  },
  {
    value: 5,
    label: "Hotel Management",
  },
];

export default function Registration() {
  const Navigate = useNavigate();
  return (
    <div>
      <h1>GEC Registration Here</h1>

      <div className="gec_register">
        <Box
          sx={{
            width: 1000,
            maxWidth: "100%",
            marginLeft: "2%",
          }}
        >
          <TextField fullWidth label="Full Name" id="fname" />
        </Box>

        <br />
        <Box
          sx={{
            width: 1000,
            maxWidth: "100%",
            marginLeft: "2%",
          }}
        >
          <TextField fullWidth label="Mobile Number " id="mobilex" />
        </Box>
        <br />
        <Box
          sx={{
            width: 1000,
            maxWidth: "100%",
            marginLeft: "2%",
          }}
        >
          <TextField fullWidth label="Department" id="dept" />
        </Box>
        <br />

        <Box
          sx={{
            width: 1000,
            maxWidth: "100%",
            marginLeft: "2%",
          }}
        >
          <TextField fullWidth label="Email-id" id="mail" />
        </Box>
        <br />

        <Box
          sx={{
            display: "flex",
            marginLeft: "15%",
            // alignItems: 'center',
            // '& > :not(style)': { m: 1 },
          }}
        >
          <TextField
            helperText="Please enter your roll no."
            id="demo-helper-text-misaligned"
            label="Roll No."
          />

          <TextField
            sx={{
              width: 500,
              maxWidth: "100%",
              marginLeft: "50px",
            }}
            id="outlined-select-currency"
            select
            label="Select GEC Subject"
          >
            {currencies.map((option) => {
              return (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              );
            })}
          </TextField>
        </Box>

        <br />
        <br />
        <Button
          variant="contained"
          sx={{ marginLeft: "42%" }}
          onClick={() => Navigate("/dashboard/home")}
        >
          Register Here
        </Button>
      </div>
    </div>
  );
}
