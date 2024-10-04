import DefaultLayout from "../config/layout/DefaultLayout";
import {Grid2, Typography} from "@mui/material";

function Home() {
  return (
    <DefaultLayout>
      <Grid2 container>
        <Grid2 sx={{display: "flex", flexWrap: "wrap"}} size={{xs: 12, md: 8}}>
          <Typography>Hello</Typography>
        </Grid2>
      </Grid2>
    </DefaultLayout>
  );
}

export default Home;
