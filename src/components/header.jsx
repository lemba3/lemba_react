import { ShoppingCart } from "@mui/icons-material"
import { AppBar, Avatar, Container, Stack, Toolbar, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div>
      <AppBar position="static" elevation={0} sx={{bgcolor: 'warning.dark'}} >
        <Container>
          <Toolbar disableGutters>
            <Avatar alt="Your Alt Text" src='/img/logo.png' />
            <Typography variant="h6" sx={{flexGrow: 1}}>Shopper</Typography>
            <Stack direction='row' spacing={2} sx={{flexGrow: 1}} justifyContent='center'>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/men">Men</NavLink>
              <NavLink to="/women">Women</NavLink>
              <NavLink to="/kids">Kids</NavLink>
            </Stack>
            <Stack direction='row' spacing={2} sx={{flexGrow: 1}} justifyContent='right'>
              <NavLink className="nav-link" to="/login">Login</NavLink>
              <NavLink to='/cart'> <ShoppingCart /> </NavLink>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}

export default Header
