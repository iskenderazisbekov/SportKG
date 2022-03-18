import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, TextField } from '@mui/material';
import { CloseButton, InputGroup, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Payment() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: "40px auto",
          maxWidth: 1000,
          height: "auto",
        },
      }}
    >
        <Paper elevation={3}>
            <div style={{display: "flex", justifyContent: "end"}} >
            <Link to='/' >
              <CloseButton />
            </Link>
            </div>
            
            <h1 style={{textAlign: "center"}}>Оплата</h1>
            <div style={{display: "flex", justifyContent: "space-around", color: "black"}}>
                <div style={{
                    width: "650px", 
                    display: "flex", 
                    alignItems: "center", 
                    flexDirection: "column", 
                    justifyContent: "center"
                }}>
                    <form noValidate autoComplete='off' style={{
                        textAlign: "center"
                    }}>
                        <TextField 
                            style={{padding: "10px",}} 
                            name="имя"
                            variant="outlined" 
                            label="Имя" />
                        <TextField 
                            style={{padding: "10px"}} 
                            name="фамилия"
                            variant="outlined" 
                            label="Фамилия" />
                        <TextField 
                            style={{padding: "10px"}} 
                            name="email" 
                            variant="outlined" 
                            label="Email" />
                        <TextField 
                            style={{padding: "10px"}} 
                            name="номер карты"
                            variant="outlined" 
                            label="Номер карты" />
                        <TextField 
                            style={{padding: "10px"}} 
                            type="month"
                            name="срок действия" 
                            variant="outlined" 
                            label="Срок действия" /> 
                        <TextField 
                            style={{padding: "10px"}} 
                            type="password"
                            name="cvv" 
                            variant="outlined" 
                            label="CVV" /> 
                        <Form.Group className="mb-3">
                          <Form.Check
                            style={{ marginLeft: "18%", textAlign: "left" }} 
                            name="terms"
                            label="Сохранить карту"
                            feedbackType="invalid"
                            id="validationFormik0"
                          />
                        </Form.Group>
                                    
                    </form>
                    <Button href="/buy" variant="contained" color="warning">Оплатить</Button>
                </div>     
            </div>  
        </Paper>
    </Box>
    
  );
}
