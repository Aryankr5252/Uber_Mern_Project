import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const CaptainLogout = () => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    console.log(token)

    useEffect(() => {
        if (!token) {
            navigate('/captain-login');
            return;
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            if (res.status === 200) {
                localStorage.removeItem('token');
                navigate('/captain-login');
            }
        }).catch((err) => {
            console.log(err);
        })
    }, [token, navigate]);

    return (
        <div>
            hello
        </div>
    )
}

export default CaptainLogout