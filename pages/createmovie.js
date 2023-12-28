//create the movie component
import { Box, Grid, TextField, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import ConfirmModal from "../Components/ConfirmModal";
import CustomInput from "../Components/Input";
import Layout from "../Components/Layout";

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
const Createmovie = () => {
  return (
    <>
      <Layout>
        <Box>
          <Typography variant="h2" mt={3} ml={7}>
            Create a New Movie
          </Typography>
          <Grid
            container
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-around"}
            marginTop={8}
          >
            <Grid item xs={10} md={5} sx={{ height: "504px" }}>
              <Box
                sx={{
                  height: "430px",
                  border: "2px dotted white",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button component="label" variant="contained">
                  Drop An Image Here
                  <VisuallyHiddenInput type="file" />
                </Button>
              </Box>
            </Grid>
            <Grid item xs={5} sx={{ height: "504px" }}>
              <Grid container padding={3}>
                <Grid xs={10} padding={3}>
                  <CustomInput
                    label="Enter Title"
                    type="text"
                    fullWidth
                  ></CustomInput>
                  <br></br>
                  <CustomInput label="Enter year" type="text"></CustomInput>
                </Grid>
                <Grid sm={10}>
                  <ConfirmModal></ConfirmModal>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Layout>
    </>
  );
};

export default Createmovie;
