import React, { useState, useEffect } from "react";
import axios from "axios";

export const useHttpGet = (url, dependencies) => {
    const [isLoading, setIsLoading] = useState(false);
    const [fetchedData, setFetchedData] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(url)
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
