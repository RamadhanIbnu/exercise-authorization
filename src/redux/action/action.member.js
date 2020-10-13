import axios from 'axios'
import jwt from "jwt-decode";

export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";

// function untuk type nya
export const setRegister = (data) =>{
    return{
        type: REGISTER,
        payload: data,
    };
};

export const setLogin = (data) =>{
    return{
        type: LOGIN,
        payload: data
    };
};

// function isi dari setRegister dan setLogin
export const registerAction = (values, e, history) => (dispatch) =>{
    e.preventDefault();
    console.log("test params values:",values)
    

    return axios
    .post("https://warnetqu.herokuapp.com/member", values)
    .then((response) =>{
        console.log("data response:",response)
        dispatch(setRegister(response.data.member));
        history.push("/login");
    })
    .catch((error) =>{
        console.log(error)
    })
};

export const loginAction = (values, e, history) => (dispatch) =>{
    e.preventDefault();

    return axios
    .post("https://warnetqu.herokuapp.com/member/login", values)
    .then((response) =>{
        console.log("response: ", response)

        if(response.data.token !== undefined){
            localStorage.setItem("token", response.data.token);
            let JWTdecode = jwt(response.data.token)
            console.log(JWTdecode)
            dispatch(setLogin(response.data))
            setTimeout(()=>{
                history.push("/member")
            }, )
        }
        if(response.data === undefined){
            // dispatch(setLogin(response.data))
        }
    })
    .catch((error)=>{
        console.log(error)

    })
}