import React,{useState,useEffect} from "react";
import { Container, Box, Typography, TextField, CircularProgress, Button } from "@material-ui/core";
import { IMAGES } from "../images/index";

import { connect } from "react-redux";
import { singIn } from "../redux/actions/userActions";
import { getUserData,getUserAccessToken } from "../redux/reducers/userReducer";
import {withRouter} from "react-router-dom";

const initialState= {fields:{email:'petsco@admin.az',password:'13081994Bb'},show_progress:false,email_error:null,password_error:null,update:false};

const Login = ({userData,accessToken,singIn,history}) => {
    console.log("hostory",history);
  const [state, setState] = useState(initialState);
    console.log(accessToken)
  useEffect(() => {
      console.log('userData useEffectde')
    if(userData.authError !== null){  setState((state)=>({...initialState,email_error:userData.authError,password_error:userData.authError,show_progress:false}));  }
    else{  setState((state)=>({...initialState,show_progress:false}));  }
  }, [userData]);

  const handleChange =(e)=>{
      const {name,value} = e.target;
      setState((state)=>({...state,fields:{...state.fields,[name]:value}}));
      if(state.fields.email !== ""){setState((state)=>({...state,email_error:null})); }
      if(state.fields.password !== ""){setState((state)=>({...state,password_error:null})); }
  }
  const loginHandler=async()=>{
      let validation = true;
      if(state.fields.email === ""){setState((state)=>({...state,email_error:"Email address required!"}));validation=false; }
      if(state.fields.password === ""){setState((state)=>({...state,password_error:"Password reqired!"}));validation=false; }
      setState((state)=>({...state,update:true}));
      if(validation){
        setState((state)=>({...state,show_progress:true}));
        const authResult =  await singIn(state.fields.email,state.fields.password);
        if(authResult){history.replace('/');}
      }
  }
  return (
    <Container maxWidth="sm">
      <Box bgcolor="" textAlign="center" p="24px" mt="50px" boxShadow="2" borderRadius="12px" >
        <img src={IMAGES.logo2} style={styles.logoImg} alt="" />
        <Typography variant="h5" color="textSecondary">ADMIN</Typography>
        <TextField name="email"   value={state.fields.email}  onChange={handleChange} error={state.email_error!=null}    helperText={state.email_error}    color="secondary" label="Email"    type="email"    id="outlined-size-small"  fullWidth margin="normal" variant="outlined" size="small"/>
        <TextField name="password" value={state.fields.password} onChange={handleChange} error={state.password_error!=null} helperText={state.password_error} color="secondary" label="Password" type="password" id="outlined-size-small"  fullWidth margin="normal" variant="outlined" size="small"/>
        <Button onClick={loginHandler} disableElevation variant="contained" style={{backgroundColor:'#8EC957',color:'white',margin:"20px 0 0 0"}} fullWidth >Login</Button>
        <CircularProgress size={24} style={{color: state.show_progress ? '#8EC957' : 'white',margin:"10px 0",}} thickness={4} /> 
      </Box>
    </Container>
  );
};

const styles = {
  logoImg: { height: 50 },
};


const mapStateToProps=(state)=>({
    userData: getUserData(state),
    accessToken:getUserAccessToken(state),
});

export default connect(mapStateToProps,{singIn})(withRouter(Login));
