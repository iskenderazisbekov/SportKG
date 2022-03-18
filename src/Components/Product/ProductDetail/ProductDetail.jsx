import React from 'react';
import { useParams } from 'react-router-dom';
import { productContext } from "../../../Contexts/ProductsContext"
import { Typography, Paper } from '@mui/material'
import { useEffect, useContext } from 'react';


const ProductDetail = () => {
    const {id} = useParams()   
    const { detail, getDetail } = useContext(productContext)
    
    useEffect(() => {
        getDetail(id)
    }, [id])
    
    return (
        <Paper elevation={3} variant="outlined">
            <Typography variant="h2" style={
                {textAlign: "center"}}
            >
                О товаре
            </Typography> {
                detail ? (
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"}}>
                        <div >
                            <img width="450" src={detail.image}/>
                        </div>     
                        <div
                            style={{
                                width: "450px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "center"
                            }}
                        >
                            <Typography variant="h3">{detail.title}</Typography>
                            <Typography variant="subtitle1">{detail.type}</Typography>
                            <Typography variant="body1">{detail.description}</Typography>
                            <Typography variant="h4">{detail.price}</Typography>
                        </div>           
                    </div>
                ) : (<h1> Loading...</h1>)
            }
        </Paper>
    );

    
};

export default ProductDetail;