import { Box, Container, Grid, ImageList, ImageListItem, ImageListItemBar, Typography } from "@mui/material"
import ProductCoverList from "../components/product_cover_list";
import MyCarousel from "../components/my-carousel";
import Banner from "../components/banner";

const ShopPage = () => {

  const popularWomenProducts = [
    {
      'id': '1',
      'src': 'img/wsimg1.jpg',
      'price': '260',
      'to': '/product/wsimg1',
      'title': 'Azure Mist Sweater',
      'rating': '5'
    },
    {
      'id': '2',
      'src': 'img/wsimg2.jpg',
      'price': '260',
      'to': '/product/wsimg2',
      'title': 'Crimson Velvet Jeans',
      'rating': '3'
    },
    {
      'id': '3',
      'src': 'img/w3.jpg',
      'price': '260',
      'to': '/product/w3',
      'title': 'Midnight Orchid T-Shirt',
      'rating': '4'
    },
    {
      'id': '4',
      'src': 'img/wsimg4.jpg',
      'price': '260',
      'to': '/product/wsimg4',
      'title': 'Sunlit Breeze Dress',
      'rating': '4'
    }
  ]

  const images1 = [
    '/img/cs1.jpg',
    '/img/cs2.jpg',
    '/img/cs3.jpg'
  ];

  const images2 = [
    '/img/cs4.jpg',
    '/img/cs5.jpg'
  ];

  return (
    <div>
      <Container>
        <Box sx={{ m: 2 }}/>
          {/* <Banner 
            img='img/img1.png' 
            text1='NEW ARRIVALS ONLY' 
            text2='new' 
            text3='collections' 
            text4='for everyone'
          /> */}
          <Grid container>
            <Grid item xs={5.5}>
              <MyCarousel images={images1}/>
            </Grid>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={5.5}>
              <MyCarousel images={images2}/>
            </Grid>
          </Grid>
        <Box sx={{ m: 2 }}/>
          <ProductCoverList title='POPULAR IN WOMEN' products={popularWomenProducts} />
        <Box sx={{ m: 2 }}/>
          <Banner
            img='/img/wsimg3.png' 
            text1='Exclusive' 
            text2='Offers for you'
            button='check now'
          />
        <Box sx={{ m: 2 }}/>
      </Container>
    </div>
  )
}

export default ShopPage
