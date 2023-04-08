import React from "react";
import Box from "@mui/material/Box";
import "./examform.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function ExamForm() {
  const Navigate = useNavigate();
  return (
    <div>
      <h1>Examination Registration</h1>
      <div className="exam_register">
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
            display: "flex",
            marginLeft: "2%",
            // alignItems: 'center',
            // '& > :not(style)': { m: 1 },
          }}
        >
          <TextField
            helperText="Please enter your semester."
            id="demo-helper-text-misaligned"
            label="Semester"
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
              label="Roll No."
              id="roll"
              helperText="Please enter your roll no."
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
            <TextField
              fullWidth
              label="Name of Programme"
              id="programme"
              helperText="Please enter your programme name."
            />
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
          <TextField fullWidth label="Father's Name " id="fathername" />
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
            width: 1000,
            maxWidth: "100%",
            marginLeft: "2%",
          }}
        >
          <TextField fullWidth label="Mobile No." id="mobile" />
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
            label="Mention your subjects with respective subject code."
            placeholder="(Subject Code - Subject Name)"
            id="subjects"
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

export default ExamForm;
