import { FacebookRounded, Instagram, WhatsApp } from "@mui/icons-material"
import { Avatar, Box, Divider, Grid, IconButton, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div>
      <Box sx={{bgcolor: 'warning.dark'}}>
        <Box sx={{pt: '1%', pb: '1%'}}>
        <Stack direction="row" alignItems="center" gap={1} justifyContent='center'>
          <Avatar alt="Your Alt Text" src='/img/logo.png' />
          <Typography>Shopper</Typography>
        </Stack>
        </Box>
        <Box sx={{pt: '1%', pb: '3%'}}>
          <Grid container spacing={8} direction='row' justifyContent='center'>
            <Grid item xs={1}>
              <Link>Company</Link>
            </Grid>
            <Grid item xs={1}>
              <Link>Products</Link>
            </Grid>
            <Grid item xs={1}>
              <Link>Offices</Link>
            </Grid>
            <Grid item xs={1}>
              <Link>About</Link>
            </Grid>
            <Grid item xs={1}>
              <Link>Contact</Link>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{pb: '2%'}}>
          <Grid container spacing={8} direction='row' justifyContent='center'>
            <Grid item xs={1}>
              <IconButton variant="plain">
                <Instagram />
              </IconButton>
            </Grid>
            <Grid item xs={1}>
              <IconButton variant="plain">
                <FacebookRounded />
              </IconButton>
            </Grid>
            <Grid item xs={1}>
              <IconButton variant="plain">
                <WhatsApp />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
        <Divider orientation="horizontal"/>
        <Box sx={{pt: '1%', pb: '1%'}}>
          <Typography align="center">Copyright @ 2023 - All Right Reserved</Typography>
        </Box>
      </Box>
    </div>
  )
}

export default Footer
