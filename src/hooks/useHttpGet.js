import React, { useState, useEffect } from "react";
import axios from "axios";
const qs = require('qs');

export const useHttpGet = (url, dependencies, params = []) => {
    const [isLoading, setIsLoading] = useState(false);
    const [fetchedData, setFetchedData] = useState(null);

    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_BACK_URL,

        headers: { 'Accept': 'application/json' },


    });

    let httpParams = new URLSearchParams();
    params.forEach(p => {
        console.log(p.value)
        if (p.value !== null) {
            httpParams.append(p.key, p.value);

        }
    });
    console.log(httpParams.toString())

    useEffect(() => {
        setIsLoading(true);
        axiosInstance
            .get(url, { params: httpParams })
            .then((data) => {
                setIsLoading(false);
                setFetchedData(data);
            })
            .catch((err) => {
                setIsLoading(false);
            });
    }, dependencies);

    return [isLoading, fetchedData];
};