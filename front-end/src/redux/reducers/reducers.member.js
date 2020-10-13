import { REGISTER, LOGIN } from "../action/action.member";

const token = localStorage.getItem("token")

const initialState = token ? {
    isLogged: true,
    data:[]
}:{
    isLogged:false,
    data:[],
    registerData: []
};

const member = (state=initialState, action) =>{
    switch (action.type) {
        case REGISTER:
            return{
                registerData: action.payload
            }
        case LOGIN:
            return{
                isLogged:true,
                data: action.payload
            }
    
        default:
            return state;
    }
};

export default member;