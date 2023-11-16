import { Box, Button, Container, Divider, Grid, TextField, Typography } from "@mui/material"
import Image from "mui-image"

const CartPage = () => {

  const cartList = [
    {
      'product': '/img/wsimg1.jpg',
      'title' : 'Men Green Solid Zippered Full Zip Slim Fit Bomber Jacket',
      'price' : '299',
      'quantity' : '1',
      'total' : '299',
      'remove' : 'X'
    },
    {
      'product': '/img/wsimg2.jpg',
      'title' : 'Men Green Solid Zippered Full Zip Slim Fit Bomber Jacket',
      'price' : '299',
      'quantity' : '2',
      'total' : '598',
      'remove' : 'X'
    }
  ]

  return (
    <Container>
      <Box sx={{ m : 2}}/>
      <Grid container rowSpacing={2}>
        <Grid item xs={2}>
          <Typography variant="h6">Products</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6">Title</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6">Price(₹)</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6">Quantity</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6">Total(₹)</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6">Remove</Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
      </Grid>
      <Box sx={{ m : 2}}/>
      {cartList.map((item) => (
          <Grid container key={item.product} spacing={2}>
            <Grid item xs={2}>
              <Image src={item.product} height="15vh" width="12vh" fit="cover"/>
            </Grid>
            <Grid item xs={2}>
              <Typography>{item.title}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>{item.price}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>{item.quantity}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>{item.total}</Typography>
            </Grid>
            <Grid item xs={2}>
              {item.remove}
            </Grid>
            <Grid item xs={12}>
              <Divider />
              <Box sx={{ m : 2}}/>
            </Grid>
          </Grid>
        ))}
      <Box sx={{ m : 2}}/>
      <Grid container spacing={12}>
        <Grid item xs={6}>
          <Typography variant="h5">Card Totals</Typography>
          <Box sx={{ m : 4}}/>
          <Grid container>
            <Grid item xs={6}>
              <Typography>Subtotal</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography textAlign='right'>₹897</Typography>
            </Grid>
          </Grid>
          <Box sx={{ m : 1}}/>
          <Divider />
          <Box sx={{ m : 1}}/>
          <Grid container>
            <Grid item xs={6}>
              <Typography>Shopping Fee</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography textAlign='right'>Free</Typography>
            </Grid>
          </Grid>
          <Box sx={{ m : 1}}/>
          <Divider />
          <Box sx={{ m : 1}}/>
          <Grid container>
            <Grid item xs={6}>
              <Typography fontWeight='bold'>Total</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography fontWeight='bold' textAlign='right'>₹897</Typography>
            </Grid>
          </Grid>
          <Box sx={{ m : 1}}/>
          <Divider />
          <Box sx={{ m : 1}}/>
        </Grid>
        <Grid item xs={6}>
          <Typography>If you have a promo code Enter it here</Typography>
          <Box sx={{ m : 1}}/>
          <Grid container spacing={1}>
            <Grid item xs={8}>
              <TextField placeholder="promo code" size="small" fullWidth InputProps={{style: { color: 'primary'}}}/>
            </Grid>
            <Grid item xs={4}>
              <Button variant="contained">Submit</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{ m : 2}}/>
      <Button variant="contained">PROCEED TO CHECKPOINT</Button>
      <Box sx={{ m : 2}}/>
    </Container>
  )
}

export default CartPage
