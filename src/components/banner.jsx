import { Button, Grid, Typography } from "@mui/material"
import Image from "mui-image"
import { useNavigate } from "react-router-dom"

const Banner = ({img, text1, text2, text3, text4, button}) => {
  const navigate = useNavigate();
  return (
    <>
      <Grid direction='row' className="my-gradient" height='40vh' alignItems='center' container>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={5}>
          <Typography className="banner-text" noWrap>{text1}</Typography>
          <Typography className="banner-text1" noWrap>{text2}</Typography>
          <Typography className="banner-text1" noWrap>{text3}</Typography>
          <Typography className="banner-text1" noWrap>{text4}</Typography>
          {button && <Button sx={{bgcolor: 'secondary.dark'}} onClick={() => navigate('/women')} >{button}</Button>}
        </Grid>
        <Grid item xs={6}>
          <Image src={img} fit="scale-down" height='40vh' />
        </Grid>
      </Grid>
    </>
  )
}

export default Banner
