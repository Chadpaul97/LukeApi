import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import axios from 'axios';


const PlanentResults = (props) => {
    const [data, setData] = useState({});
    const { category,id } = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}/?format=json`)
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [category,id]);

    return (
        <div>
            <h1>{data.name} </h1>
        </div>);
}

export default PlanentResults