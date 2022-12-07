import React from "react";
// import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";

export const DrAlldoctorList = () => {
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  //   const jsx = `
  // <Grid container spacing={${spacing}}>
  // `;

  return (
    <div>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={spacing}>
            {[0, 1, 2].map((value) => (
              <Grid key={value} item>
                <Paper
                  sx={{
                    height: 140,
                    width: 100,
                    backgroundColor: (theme) =>
                      theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Grid container>
              <Grid item>
                <FormControl component="fieldset">
                  <FormLabel component="legend">spacing</FormLabel>
                  <RadioGroup
                    name="spacing"
                    aria-label="spacing"
                    value={spacing.toString()}
                    onChange={handleChange}
                    row
                  >
                    {[0, 0.5, 1, 2, 3, 4, 8, 12].map((value) => (
                      <FormControlLabel
                        key={value}
                        value={value.toString()}
                        control={<Radio />}
                        label={value.toString()}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          </Paper>
          {/* <HighlightedCode code={jsx} language="jsx" /> */}
        </Grid>
      </Grid>
    </div>
  );
};
