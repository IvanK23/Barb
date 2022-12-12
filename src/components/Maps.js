import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const divStyle = {
   display: "flex",
   justifyContent: "space-around",
   margin: "0 auto",
   marginTop: "30px",
   marginBottom: "20px",
   width: "80%",
   alignItems: "center",
 };

export default function MediaCard() {
  return (
     <div style={divStyle}>
        <div>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            component="img"
            height="140"
            image="https://abc-decor.com/img/gallery/52/thumbs/thumb_l_31727.jpg"
            alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            вулиця Луганська, 30А
            </Typography>
            </CardContent>
         </Card>
        </div>
       
        <div>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            component="img"
            height="140"
            image="https://abc-decor.com/img/gallery/52/thumbs/thumb_l_31727.jpg"
            alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            вулиця Антоновича, 20А
            </Typography>
            </CardContent>
         </Card>
        </div>
        
        <div>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            component="img"
            height="140"
            image="https://abc-decor.com/img/gallery/52/thumbs/thumb_l_31727.jpg"
            alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            вулиця Князя Романа, 10А
            </Typography>
            </CardContent>
         </Card>
        </div>
     </div>
  );
}