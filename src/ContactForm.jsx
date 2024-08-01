import React, { useState } from 'react';
import PrimarySearchAppBar from './SearchAppBar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {  NavLink } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E3462C',
    },
  }});

function ContactForm() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = 'http://localhost:8100/api/emails/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        }
        const response = await fetch(url, fetchConfig);

        if (response.ok){
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            })
        }else {
            console.log("error sending email");
        }
    }

    const handleFormChange = async (e) => {
        const value = e.target.value;
        const inputName = e.target.name;
        setFormData({
            ...formData,
            [inputName]: value
        });
    }

    return (
      <div className='home-wrapper'>
        <PrimarySearchAppBar />
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '50ch', ml: 'auto', mr: 'auto' },
          }}
          noValidate
          autoComplete="off"
        >
          <ThemeProvider theme={theme}>
            <form action="contact.php" method="post" onSubmit={handleSubmit}>
              <div className='contact-input'>
                <TextField fullWidth id="outlined-basic" name="name" label="Your Name" margin="normal" variant="outlined" className='form-background'/>
              </div>
              <div className='contact-input'>
                <TextField fullWidth id="outlined-basic" name="email" type="email" label="Your Email" margin="normal" value={formData.email} onChange={handleFormChange} variant="outlined" className='form-background'/>
              </div>
              <div className='contact-input'>
                <TextField fullWidth id="outlined-basic" name="subject" margin="normal" value={formData.subject} onChange={handleFormChange} label="Subject" variant="outlined" className='form-background'/>
              </div>
              <div className='contact-input'>
                <TextField fullWidth id="outlined-multiline-static" multiline rows={8} name="message" margin="normal" value={formData.message} onChange={handleFormChange}label="Message" variant="outlined" className='form-background'/>
              </div>
              <div className='contact-button'>
                  <Stack spacing={2} direction="row">
                    <Button color="primary" style={{margin: 'auto'}} endIcon={<SendIcon />} size="large" variant="outlined">Submit</Button>
                  </Stack>
              </div>
              <div style={{margin: '20px'}}>
                  <Stack spacing={2} direction="row">
                    <Button color="primary" style={{margin: 'auto'}} size="large" variant="outlined"><NavLink to="/">Home</NavLink></Button>
                  </Stack>
              </div>
            </form>
          </ThemeProvider>
        </Box>
      </div>
    )
}

export default ContactForm
