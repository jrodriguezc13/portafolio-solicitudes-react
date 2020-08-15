import React, { useState, useEffect } from "react";
import axios from "axios";

export const useHttpGet = (url, dependencies, params = []) => {
    const [isLoading, setIsLoading] = useState(false);
    const [fetchedData, setFetchedData] = useState(null);

    const axiosInstance = axios.create({
        baseURL: 'http://localhost:3050/api/v1/',
        timeout: 1000,
        headers: { 'Accept': 'application/json' }
    });

    let httpParams = new URLSearchParams();
    params.forEach(p => {
        if (p.value !== null) {
            httpParams = httpParams.append(p.key, p.value);
        }
    });

    useEffect(() => {
        setIsLoading(true);
        axiosInstance
            .get(url, httpParams)
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