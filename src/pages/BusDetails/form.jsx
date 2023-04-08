import React from "react";
import Box from "@mui/material/Box";
import "./form.css";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const Navigate = useNavigate();
  return (
    <div>
      <h1>Apply for Bus Pass</h1>

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
            marginLeft: "2%",
            // alignItems: 'center',
            // '& > :not(style)': { m: 1 },
          }}
        >
          <TextField
            helperText="Please enter your roll no."
            id="demo-helper-text-misaligned"
            label="Roll No."
          />

          <Box
            sx={{
              width: 400,
              maxWidth: "100%",
              marginLeft: "2%",
            }}
          >
            <TextField
              fullWidth
              label="Distance from home (in kms)"
              id="distance"
            />
          </Box>

          <br />
          <Box
            sx={{
              width: 330,
              maxWidth: "100%",
              marginLeft: "2%",
            }}
          >
            <TextField fullWidth label="Age" id="age" />
          </Box>
        </Box>

        <br />

        <Box
          sx={{
            width: 1000,
            maxWidth: "100%",
            marginLeft: "2%",
          }}
        >
          <TextField
            fullWidth
            label="Full Address"
            id="address"
            multiline
            maxRows={2}
          />
        </Box>

        <br />
        <br />
        <Button
          variant="contained"
          sx={{ marginLeft: "42%", marginBottom: "20px" }}
          onClick={() => Navigate("/dashboard/home")}
        >
          Apply Here
        </Button>
      </div>
    </div>
  );
}
