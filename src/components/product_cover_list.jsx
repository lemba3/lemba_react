import { ImageList, ImageListItem, ImageListItemBar, Rating, Stack, Typography } from "@mui/material"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductCoverList = ({title, products}) => {

  const navigate = useNavigate();

  function handleImgClick(to) {
    return navigate(to);
  }

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      <Typography variant="h5" textAlign='center'>{title}</Typography>
      <ImageList cols={4} sx={{overflow: 'hidden'}} gap={12}>
        {products.map((item) => (
          <ImageListItem key={item.src} className='my-img'>
            <img src={item.src} onLoad={handleImageLoad} style={{display: 'none'}}/>
            {imageLoaded ? (
              <img src={item.src} onClick={()=> handleImgClick(item.to)} loading="lazy"/>
            ) : (
              <div
                style={{
                  height: '500px',
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
              subtitle={<Stack>
                <Typography variant="h6">₹{item.price}</Typography>
                <Rating value={Number(item.rating)} readOnly/>
              </Stack>}
              title={<Typography variant="h5">{item.title}</Typography>}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  )
}

export default ProductCoverList
