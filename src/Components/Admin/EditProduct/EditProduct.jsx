import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { productContext } from '../../../Contexts/ProductsContext';
import { useParams } from 'react-router-dom';

export default function EditProduct() {
    const [values, setValues] = React.useState({
        title: "",
        image: "",
        price: "",
        type: "",
        description: ""
    })
    
    const { edit, editProduct, saveEditedProduct} = React.useContext(productContext)
    
    const {id} = useParams()
    React.useEffect(() => {
        editProduct(id)
    }, [id])
    
    React.useEffect(() => {
        if(edit) {
            setValues(edit)
        }
    }, [edit])
    
    const handleEditInp = (e) => {
        let obj = {
            ...values,
            [e.target.name]: e.target.value
        }
        setValues(obj)
    }
    
    const handleSave = () => {
        saveEditedProduct(values)
    }
    
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: "40px auto",
          maxWidth: 1000,
          height: "auto",
          p: "10px"
        },
      }}
    >
    <Paper elevation={3}>
        <h1>Изменить данные</h1>
            <div style={{
                display: "flex", 
                justifyContent: "space-around", 
                color: "black"
            }}>
                <div>
                    <img width="300" src={values.image} alt={values.title} />
                </div>
                <div style={{
                    width: "450px",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center"
                }}>
                    <form noValidate autoComplete='off' style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <TextField 
                            style={{padding: "10px"}} 
                            name="title"
                            onChange={handleEditInp}
                            value={values.title} 
                            variant="outlined" 
                            label="Title" />
                        <TextField 
                            style={{padding: "10px"}} 
                            name="image" 
                            onChange={handleEditInp} 
                            value={values.image} 
                            variant="outlined" 
                            label="Image" />
                        <TextField 
                            style={{padding: "10px"}} 
                            name="price"
                            onChange={handleEditInp} 
                            value={values.price} 
                            variant="outlined" 
                            label="Price" />
                        <TextField 
                            style={{padding: "10px"}} 
                            name="type" 
                            onChange={handleEditInp} 
                            value={values.type} 
                            variant="outlined" 
                            label="Type" />
                        <TextField 
                            style={{padding: "10px"}} 
                            name="description" 
                            onChange={handleEditInp} 
                            value={values.description} 
                            variant="outlined" 
                            label="Description" />
                    </form>
                    <Link to="/">
                        <Button onClick={handleSave} variant='contained' color="warning">
                            Сохранить
                        </Button>
                    </Link>
                </div>
            </div>
    </Paper>
    </Box>
  );
}
