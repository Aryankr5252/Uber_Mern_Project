import React, { useContext, useEffect } from 'react'
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const CaptainProtectedWrapper = ({ children }) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate();
    const { captain, setCaptain } = useContext(CaptainDataContext);
    const [ isLoading, setIsLoading ] = useState(true);


    useEffect(() => {
        if (!token) {
            navigate('/captain-login');
        }
    }, [token])

    const response = axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        if (response.status === 200) {
            setCaptain(response.data)
            setIsLoading(false);
        }
    }).catch(err => {
        console.log(err);
        navigate('/captain-login');
    })


    if (isLoading ) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div>
            {children}
        </div>
    )
}

export default CaptainProtectedWrapper