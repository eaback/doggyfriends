import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header'
import './DogsLib.css'

const DogsLib = () => {
const url = "https://api.jsonbin.io/v3/b/651e65730574da7622b49d13/latest"
const [dogData, setDogdata] = useState([]);

const fetchInfo = () => {
    return fetch(url)
    .then((res) => res.json)
    .then((d) => setDogdata(d))
}

useEffect(() => {
    fetchInfo();
}, [])

return (
    <div className='DogApp'>
        <h1 style= {{ color: "green"}}>Meet out dogs here</h1>
        <center>
            {data.map((dataObj, index) => {
                return (
                    <div
                    style={{
                        width: "15em",
                        backgroundColor: "35D841",
                        padding: 2,
                        borderRadius: 10,
                        marginBlock: 10,
                    }}
                    >
                        <p style={{ fontSize: 20, color: "white"}}>{dataObj.name}</p>
                    </div>
                );
            })}
        </center>
    </div>
)
};

export default DogsLib;
