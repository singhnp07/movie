import {
  Grid,
  Paper,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
} from "@mui/material";
import React from "react";
import CustomInput from "../Components/Input";
import style from "../styles/signin.module.css";
import Layout from "../Components/Layout";
//validate email
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}; //validate password
function validatePassword(password) {
  // Minimum 4 lowercase letters, 1 uppercase letter, and 1 digit
  const regex = /^(?=.*[a-z]{4,})(?=.*[A-Z])(?=.*\d).+$/;
  return regex.test(password);
}

//manage the validation on input
const Validation = (name, value) => {
  if (name === "username") {
    return {
      name: name,
      status: validateEmail(value),
      messeage: "invalid email",
    };
  }

  if (name === "password") {
    return {
      name: name,
      status: validatePassword(value),
      messeage:
        "// Minimum 4 lowercase letters, 1 uppercase letter, and 1 digit",
    };
  } else {
    return {
      name: name,
      status: "",
      messeage: "",
    };
  }
};
const Signin = () => {
  const [InputData, SetInputData] = React.useState({
    username: { error: false, messeage: "", value: "" },
    password: {
      error: false,
      messeage: "",
      value: "",
    },
    remember: { error: false, messeage: undefined, value: false },
  });

  const handleChanges = (e) => {
    // if need validate oninput change use this code
    /*
    Object.keys(InputData).map((item) => {
      const valid = Validation(item, InputData[item].value);
      SetInputData((prevInputData) => ({
        ...prevInputData,
        [item]: {
          ...prevInputData[item],
          value: prevInputData[item].value,
          error: !valid.status,
          message: valid.messeage,
        },
      }));
    });
     */
    if (e.target.name == "remember") {
      //for check box
      SetInputData({
        ...InputData,
        [e.target.name]: {
          ...InputData[e.target.name],
          value: e.target.checked,
        },
      });
    } else
      SetInputData({
        ...InputData,
        [e.target.name]: { ...InputData[e.target.name], value: e.target.value },
      });
  };
  const handleSubmit = async (e) => {
    // validate input on click on signin button
    Object.keys(InputData).map((item) => {
      const valid = Validation(item, InputData[item].value);
      SetInputData((prevInputData) => ({
        ...prevInputData,
        [item]: {
          ...prevInputData[item],
          value: prevInputData[item].value,
          error: !valid.status,
          message: valid.messeage,
        },
      }));
    });
    const data = await fetch("http://localhost:3000/api/login", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify({
        email: InputData.username.value,
        password: InputData.password.value,
      }),
    });
    const finaldata = await data.json();
    if (finaldata?.error) {
      alert(finaldata.error, finaldata.message);
    } else if (finaldata.payload) {
      alert("login successfull");
    }
    e.preventDefault();
  };
  return (
    <>
      {console.log("results", InputData)}
      <Layout>
        <div className={style.Signin_layout}>
          <Paper className={style.Signin_border}>
            <Grid
              container
              spacing={3}
              direction={"column"}
              justify={"center"}
              alignItems={"center"}
            >
              <Grid item xs={12}>
                <Typography variant="h3">Sign in</Typography>
              </Grid>
              <Grid item xs={12}>
                <CustomInput
                  label="Username"
                  error={InputData.username.error}
                  onChange={handleChanges}
                  name="username"
                  placeholder="enter the username"
                  helperText={InputData.username.messeage}
                  value={InputData.username.value}
                  fullWidth
                ></CustomInput>
              </Grid>
              <Grid item xs={12}>
                <CustomInput
                  label="Password"
                  placeholder="enter the passward"
                  type={"password"}
                  name="password"
                  fullWidth
                  error={InputData.password.error}
                  onChange={handleChanges}
                  helperText={InputData.password.messeage}
                  value={InputData.password.value}
                ></CustomInput>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={InputData.remember.value}
                      onChange={handleChanges}
                      label={"Keep me logged in"}
                      inputProps={{ "aria-label": "primary checkbox" }}
                      name="remember"
                    />
                  }
                  label="Remember me"
                  sx={{ color: "white" }}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button fullWidth variant="contained" onClick={handleSubmit}>
                  Signin
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </Layout>
    </>
  );
};
export default Signin;
