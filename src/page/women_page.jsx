import { Box, Container } from "@mui/material"
import Banner from "../components/banner"
import ProductList from "../components/product_list"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"

const WomenPage = () => {
  const products = [
    {
      'id': '1',
      'price': '200',
      'src': '/img/w1.jpg',
      'to': '/product/w1',
      'rating': '3',
      'title': 'Floral Maxi'
    },
    {
      'id': '2',
      'price': '120',
      'src': '/img/w2.jpg',
      'to': '/product/w2',
      'rating': '4',
      'title': 'Velvet Evening'
    },
    {
      'id': '3',
      'price': '150',
      'src': '/img/w3.jpg',
      'to': '/product/w3',
      'rating': '5',
      'title': 'Shoulder Top'
    },
    {
      'id': '4',
      'price': '230',
      'src': '/img/w4.jpg',
      'to': '/product/w4',
      'rating': '5',
      'title': 'Denim Skinny'
    },
    {
      'id': '5',
      'price': '300',
      'src': '/img/w5.jpg',
      'to': '/product/w5',
      'rating': '2',
      'title': 'Boho Chic'
    },
    {
      'id': '6',
      'price': '420',
      'src': '/img/w6.jpg',
      'to': '/product/w6',
      'rating': '3',
      'title': 'Leather Moto'
    },
    {
      'id': '7',
      'price': '250',
      'src': '/img/w7.jpg',
      'to': '/product/w7',
      'rating': '3',
      'title': 'Classic White'
    },
    {
      'id': '8',
      'price': '260',
      'src': '/img/w8.jpg',
      'to': '/product/w8',
      'rating': '4',
      'title': 'Plaid Midi'
    },
    {
      'id': '9',
      'price': '400',
      'src': '/img/w9.jpg',
      'to': '/product/w9',
      'rating': '4',
      'title': 'Cozy Oversized'
    },
    {
      'id': '10',
      'price': '220',
      'src': '/img/w10.jpg',
      'to': '/product/w10',
      'rating': '3',
      'title': 'High-Waisted'
    }
  ]

  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Container>
      <Box sx={{ m : 4}} />
        <Banner 
            img='img/img1.png' 
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

export default WomenPage
