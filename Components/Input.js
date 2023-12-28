import { TextField } from "@mui/material";
//Create the CustomInput
const CustomInput = (props) => {
  return (
    <TextField
      {...props}
      variant={"filled"}
      color={"primary"}
      InputLabelProps={{ style: { color: "white" } }}
      inputProps={{
        style: { color: "white", borderRadius: "20px" },
      }}
      autoComplete={false}
      style={{ color: "white", borderRadius: "20px", marginBottom: "10px" }}
    />
  );
};
export default CustomInput;
