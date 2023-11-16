import { Box, Container } from "@mui/material"
import ProductList from "../components/product_list";
import Banner from "../components/banner";

const MenPage = () => {

  const products = [
    {
      'id': '1',
      'price': '200',
      'src': '/img/msimg1.jpg',
      'to': '/product/msimg1',
      'rating': '3',
      'title': 'Fashion Forward'
    },
    {
      'id': '2',
      'price': '120',
      'src': '/img/msimg2.jpg',
      'to': '/product/msimg2',
      'rating': '4',
      'title': 'Trendy Threads'
    },
    {
      'id': '3',
      'price': '150',
      'src': '/img/msimg3.jpg',
      'to': '/product/msimg3',
      'rating': '5',
      'title': 'Chic Couture'
    },
    {
      'id': '4',
      'price': '230',
      'src': '/img/msimg4.jpg',
      'to': '/product/msimg4',
      'rating': '5',
      'title': 'Classy Comforts'
    },
    {
      'id': '5',
      'price': '300',
      'src': '/img/msimg5.jpg',
      'to': '/product/msimg5',
      'rating': '2',
      'title': 'Tailored Trends'
    },
    {
      'id': '6',
      'price': '420',
      'src': '/img/msimg6.jpg',
      'to': '/product/msimg6',
      'rating': '3',
      'title': 'Elegant Essentials'
    },
    {
      'id': '7',
      'price': '250',
      'src': '/img/msimg7.jpg',
      'to': '/product/msimg7',
      'rating': '3',
      'title': 'Dapper Designs'
    },
    {
      'id': '8',
      'price': '260',
      'src': '/img/msimg8.jpg',
      'to': '/product/msimg8',
      'rating': '4',
      'title': 'Stylish Stitches'
    },
    {
      'id': '9',
      'price': '400',
      'src': '/img/msimg9.jpg',
      'to': '/product/msimg9',
      'rating': '4',
      'title': 'Modern Moda'
    },
    {
      'id': '10',
      'price': '220',
      'src': '/img/msimg10.jpg',
      'to': '/product/msimg10',
      'rating': '3',
      'title': 'Urban Uniforms'
    }
  ]

  // const numAscending = [...products].sort((a, b) => a.price - b.price);
  // console.log(numAscending);

  // const numDescending = [...products].sort((a, b) => b.id - a.id);
  // console.log(numDescending);

  // const strAscending = [...employees].sort((a, b) =>
  //   a.name > b.name ? 1 : -1,
  // );
  // console.log(strAscending);

  // const strDescending = [...employees].sort((a, b) =>
  //   a.name > b.name ? -1 : 1,
  // );
  // console.log(strDescending);

  // if(selectedValue === 'price') {
  //   const numAscending = [...products].sort((a, b) => a.price - b.price);
  //   setSortedList(numAscending);
  // } else if(selectedValue === 'rating') {
  //   console.log('Sort by rating')
  // }

  return (
    <Container>
      <Box sx={{ m : 4}} />
        <Banner
          img='/img/msimg.png'
          text1='FLAT 50% OFF'
          text2='new'
          text3='collections'
          text4='for everyone'
        />
      <Box sx={{ m : 4}} />
      <Box sx={{ m : 4}} />
        <ProductList products={products}/>
      <Box sx={{ m : 4}} />
    </Container>
  )
}

export default MenPage
