import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Api = () => {

    // const URI = 'http://localhost:8000'
    const URI = 'https://api.luz-azul.com.ar'

    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.clear()
        navigate("/login")
    }

    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const useToken = JSON.parse(tokenString);
        return useToken
    }
    const getUser = () => {
        const userString = sessionStorage.getItem('user');
        const user_details = JSON.parse(userString);
        return user_details
    }

    const [token,setToken] = useState(getToken());
    const [user,setUser] = useState(getUser());

    const saveToken = (user,token) => {
        sessionStorage.setItem('token', JSON.stringify(token));
        sessionStorage.setItem('user', JSON.stringify(user));

        setToken(token)
        setUser(user)
        navigate('/dashboard')
    }

    const http = axios.create({
        baseURL: URI,
        withCredentials: true,
    })

    return {
        setToken:saveToken,
        token,
        user,
        getToken,
        http,
        logout,
        URI
    }
}