import * as actionTypes from "./actionTypes";
import { signInFetchAPI } from "../../Api";
import initialState from "../reducers/initialState";

export const setUserData = payload => ({type:actionTypes.SET_USER_DATA,payload});
export const setUserLogout = payload => ({type:actionTypes.SET_USER_LOGOUT,payload});


export const singIn = (email,password) => async dispatch => {
    try {

        const result = await signInFetchAPI("",{email,password});
        console.log("email adn pass",email,password)

        if(result.success){
            dispatch(setUserData({authStatus:true,authError:null,email:result.data.email,name:result.data.name,accessToken:result.data.api_token,}));
            return true;
        }else{dispatch(setUserData({...initialState.user,authError:"Email or Password invalid!",}));return false;}
    } catch(error){console.log('sing in error',error);}
}