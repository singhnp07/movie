import { Button, Grid, Box } from "@mui/material";
import style from "../styles/ConfirmModal.module.css";
// confirm Component submit and cancel
//if we need update submit button pass  props.buttonTitle set default Submit
const ConfirmModal = (props) => {
  return (
    <>
      <Box className={style.layout_modal}>
        <Grid
          container
          spacing={2}
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
          height={"100%"}
        >
          <Grid item xs={5}>
            <Button variant="outlined" color="secondary" fullWidth>
              Cancel
            </Button>
          </Grid>
          <Grid item xs={5}>
            <Button variant="contained" color="primary" fullWidth>
              {props.buttonTitle ? props.buttonTitle : "Submit"}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ConfirmModal;
