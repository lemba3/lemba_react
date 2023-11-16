import { ArrowDownward, ArrowUpward } from "@mui/icons-material"
import { Box, ImageList, ImageListItem, ImageListItemBar, MenuItem, Pagination, Rating, Select, Stack, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductList = ({products}) => {

  const navigate = useNavigate();
  const [sortedList, setSortedList ] = useState(products);
  const [searchText, setSearchText ] = useState('');
  const [selectedValue, setSelectedValue ] = useState('');

  useEffect(() => {
    if (selectedValue === 'priceAsc') {
      const numAscending = [...products].sort((a, b) => a.price - b.price);
      setSortedList(numAscending);
    } else if (selectedValue === 'priceDesc') {
      const numDescending = [...products].sort((a, b) => b.price - a.price);
      setSortedList(numDescending);
    } else if (selectedValue === 'ratingAsc') {
      const numAscending = [...products].sort((a, b) => a.rating - b.rating);
      setSortedList(numAscending);
    } else if (selectedValue === 'ratingDesc') {
      const numDescending = [...products].sort((a, b) => b.rating - a.rating);
      setSortedList(numDescending);
    } else if (selectedValue === '') {
      const numDescending = [...products];
      setSortedList(numDescending);
    }
  }, [selectedValue]);

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      <Stack direction='row' alignItems='center'>
        <Stack sx={{flexGrow: 1}} direction='row' alignItems='center'>
          <Typography variant="h5">Products</Typography>
          <Box sx={{ m : 1}} />
          <TextField placeholder="search" size="small" onChange={(e) => setSearchText(e.target.value)}/>
        </Stack>
        <Typography>Sort by </Typography>
        <Box sx={{ m : 1}} />
        <Select
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)} 
          size="small" 
          sx={{ display: 'flex', alignItems: 'center' }} 
          className="my-select"
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value="priceAsc">Price <ArrowUpward /></MenuItem>
          <MenuItem value="priceDesc">Price <ArrowDownward /></MenuItem>
          <MenuItem value="ratingAsc">Rating <ArrowUpward /></MenuItem>
          <MenuItem value="ratingDesc">Rating <ArrowDownward /></MenuItem>
        </Select>
      </Stack>
      <Box sx={{ m : 2}} />
      <ImageList 
        sx={{overflow: 'hidden', mb: 8, gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))!important', marginBottom: 2}}
        gap={20}
      >
        {sortedList.filter((item) => item.title.toLowerCase().includes(searchText.toLowerCase())).map((item) => (
          <ImageListItem key={item.src} className='my-img'>
            <img src={item.src} onLoad={handleImageLoad} style={{display: 'none'}}/>
            {imageLoaded ? (
              <img src={item.src} onClick={()=> navigate(item.to)} loading="lazy"/>
            ) : (
              <div
                style={{
                  height: '350px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))'
                }}
              >
                <span>Loading...</span>
              </div>
            )}
            <ImageListItemBar
              title={<Stack>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="h6">₹{item.price}</Typography>
              </Stack>}
              subtitle={<Rating value={Number(item.rating)} readOnly/>}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Stack spacing={2}>
        <Pagination count={1} size="small" />
      </Stack>
    </>
  )
}

export default ProductList
