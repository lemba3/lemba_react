import { Box, Button, Checkbox, Container, FormControlLabel, Stack, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { Link } from "react-router-dom"

const LoginPage = () => {

  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Container style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '49.9vh',
      padding: '50px'
    }}>
      <Stack width='45%'>
        <Typography variant="h5">Login</Typography>
        <Box sx={{ m : 1.5}} />
        <TextField placeholder="enter name" size="small" />
        <Box sx={{ m : 1}} />
        <TextField placeholder="password" size="small" />
        <Box sx={{ m : 1}} />
        <Button variant="contained">Continue</Button>
        <Box sx={{ m : 1}} />
        <Typography>Create and account? <Link to='/signup' style={{color: '#c62828' }}>Click here</Link></Typography>
        <Box sx={{ m : 1}} />
        <FormControlLabel 
          control={<Checkbox checked={isChecked} onChange={handleChange} />} 
          label="By continuing you agree to the terms and privacy policy"
        />
      </Stack>
    </Container>
  )
}

export default LoginPage
