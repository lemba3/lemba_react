import { Box, Button, Container, Grid, Rating, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material"
import Image from "mui-image";
import { useState } from "react";
import { useParams } from "react-router-dom"

const ProductDetailPage = () => {

  const { product } = useParams();
  const imgPath = '/img/' + product +'.jpg';
  const [alignment, setAlignment] = useState('left');

  const handleAlignment = (
    event,
    newAlignment,
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <Container>
      {/* <Typography>{img}</Typography> */}
      <Box sx={{ m : 2}}/>
      <Grid container spacing={1}>
        <Grid item xs={1} style={{bgColor: 'red'}}>
          <Stack spacing={1}>
            <Image src={imgPath} fit="cover" height="20vh" width='100%' />
            <Image src={imgPath} fit="cover" height="20vh" width='100%' />
            <Image src={imgPath} fit="cover" height="20vh" width='100%' />
            <Image src={imgPath} fit="cover" height="20vh" width='100%' />
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Image src={imgPath} fit="cover" height="84vh" />
        </Grid>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h4">Men Green Solid Zippered Full Zip Slim Fit Bomber Jacket</Typography>
          <Box sx={{ m: 1 }} />
          <Rating name="read-only" value={4} readOnly />
          <Box sx={{ m: 2 }} />
          <Typography>
            ₹
            <span style={{textDecoration: 'line-through'}}>360</span>
            <span> </span>
            <span style={{color: '#c62828'}}>299</span>
          </Typography>
          <Box sx={{ m: 2 }} />
          <Typography>A light weight usually knitted pullover shirt close fitting and with a round neckline and short sleeve worn as n under shirt</Typography>
          <Box sx={{ m: 2 }} />
          <Typography>Select Size</Typography>
          <Box sx={{ m : 1}}/>
          <Stack direction="row" spacing={0}>
            <ToggleButtonGroup
              value={alignment}
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment"
            >
              <ToggleButton value="s" aria-label="left aligned">
                <Typography>S</Typography>
              </ToggleButton>
              <ToggleButton value="m" aria-label="centered">
                <Typography>M</Typography>
              </ToggleButton>
              <ToggleButton value="l" aria-label="centered">
                <Typography>L</Typography>
              </ToggleButton>
              <ToggleButton value="xl" aria-label="centered">
                <Typography>XL</Typography>
              </ToggleButton>
              <ToggleButton value="xxl" aria-label="right aligned">
                <Typography>XXL</Typography>
              </ToggleButton>
            </ToggleButtonGroup>
            </Stack>
          <Box sx={{ m: 2 }} />
          <Button variant="contained">Add to Cart</Button>
          <Box sx={{ m: 4 }} />
          <Typography><span style={{fontWeight: 'bold'}}>Category: </span>Women T-Shirt Crop-Top</Typography>
          <Typography><span style={{fontWeight: 'bold'}}>Tags: </span>Modern, Latest</Typography>
        </Grid>
      </Grid>
      <Box sx={{ m : 2}}/>
    </Container>
  )
}

export default ProductDetailPage
