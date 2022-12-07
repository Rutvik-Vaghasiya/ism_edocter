import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

export const PtDoctorList = () => {
  return (
    <div>
      <section className="center-main-content">
        <Stack
          py={"40px"}
          direction="row"
          sx={{
            flexWrap: "wrap",
            gap: "16px",
            maxWidth: "1070px",
          }}
        >
          <Card sx={{ maxWidth: 345, minWidth: 300 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://img.freepik.com/premium-photo/beautiful-young-asian-girl-doctor-with-laptop-records-isolated-blue-background-medical-student-general-practitioner-concept-medical-education-india_185696-616.jpg?w=900"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345, minWidth: 300 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://media.istockphoto.com/id/1200980406/photo/beautiful-young-asian-girl-doctor-with-a-notebook-for-records-isolated-on-a-blue-background.jpg?s=170667a&w=0&k=20&c=fyUOVZ5ed2yP7ThmLL437qrw200ejtNQ0aXX12ArCs0="
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345, minWidth: 300 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://media.istockphoto.com/id/1200980406/photo/beautiful-young-asian-girl-doctor-with-a-notebook-for-records-isolated-on-a-blue-background.jpg?s=170667a&w=0&k=20&c=fyUOVZ5ed2yP7ThmLL437qrw200ejtNQ0aXX12ArCs0="
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345, minWidth: 300 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://img.freepik.com/premium-photo/beautiful-young-asian-girl-doctor-with-laptop-records-isolated-blue-background-medical-student-general-practitioner-concept-medical-education-india_185696-616.jpg?w=900"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Stack>
      </section>
    </div>
  );
};
