import axios from 'axios';

const api = {
    signup:'user/new',
    login:'/user/login',
    logout:'/user/logout',
    mypage:'/user/{user_id}/mypage',
    paycalc:'/user/{user_id}/mypage/pay',
    payinput:'/user/{user_id}/mypage/pay'
};

function fetchSignup(){
    return axios.post(api.signup,{});
}

function fetchLogin(){
    return axios.post(api.login,{});
}

function fetchLogout(){
    return axios.put(api.logout);
}

function fetchMypage(){
    return axios.get(api.mypage);
}

function fetchpaycalc(){
    return axios.get(api.paycalc);
}

function fetchpayinput(){
    return axios.put(api.payinput);
}
