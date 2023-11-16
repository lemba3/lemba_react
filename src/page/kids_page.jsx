import { Box, Container } from "@mui/material"
import Banner from "../components/banner"
import ProductList from "../components/product_list"

const KidsPage = () => {
  const products = [
    {
      'id': '1',
      'price': '200',
      'src': '/img/k1.jpg',
      'to': '/product/k1',
      'rating': '3',
      'title': 'Rainbow Romper'
    },
    {
      'id': '2',
      'price': '120',
      'src': '/img/k2.jpg',
      'to': '/product/k2',
      'rating': '4',
      'title': 'Dino Explorer'
    },
    {
      'id': '3',
      'price': '150',
      'src': '/img/k3.jpg',
      'to': '/product/k3',
      'rating': '5',
      'title': 'Sparkle Princess'
    },
    {
      'id': '4',
      'price': '230',
      'src': '/img/k4.jpg',
      'to': '/product/k4',
      'rating': '5',
      'title': 'Adventure Seeker'
    },
    {
      'id': '5',
      'price': '300',
      'src': '/img/k5.jpg',
      'to': '/product/k5',
      'rating': '2',
      'title': 'Galactic Rocket'
    },
    {
      'id': '6',
      'price': '420',
      'src': '/img/k6.jpg',
      'to': '/product/k6',
      'rating': '3',
      'title': 'Jungle Safari'
    },
    {
      'id': '7',
      'price': '250',
      'src': '/img/k7.jpg',
      'to': '/product/k7',
      'rating': '3',
      'title': 'Sports Star'
    },
    {
      'id': '8',
      'price': '260',
      'src': '/img/k8.jpg',
      'to': '/product/k8',
      'rating': '4',
      'title': 'Unicorn Dreams'
    },
    {
      'id': '9',
      'price': '400',
      'src': '/img/k9.jpg',
      'to': '/product/k9',
      'rating': '4',
      'title': 'Polka Dot'
    },
    {
      'id': '10',
      'price': '220',
      'src': '/img/k10.jpg',
      'to': '/product/k10',
      'rating': '3',
      'title': 'Robot Friend'
    }
  ]

  return (
    <Container>
      <Box sx={{ m : 4}} />
        <Banner 
            img='/img/ksimg.png' 
            text1='FLAT 50% OFF'
            text2='12 Hours 20 Mins'
            text3='EXPLORE NOW'
        />
      <Box sx={{ m : 4}} />
        <ProductList products={products}/>
      <Box sx={{ m : 4}} />
    </Container>
  )
}

export default KidsPage
