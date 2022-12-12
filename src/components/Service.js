import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const divStyle = {
   display: "flex",
   justifyContent: "space-around",
   margin: "0 auto",
   marginTop: "30px",
   marginBottom: "20px",
   width: "80%",
   alignItems: "center",
 };

  return (
     <div style={divStyle}>
        <div>
        <Card sx={{ maxWidth: 345 }}>
      <CardHeader

        title="Yaroslav"
      />
      <CardMedia
        component="img"
        height="250"
        image="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/93d4d681218809.60bd4ccc75c8d.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
        </Typography>
      </CardContent>
     
    </Card>
        </div>
        <div>
        <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title="Oleg"
      />
      <CardMedia
        component="img"
        height="250"
        image="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/58b74b81218809.60bc821ca385a.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          
        </Typography>
      </CardContent>
     
    </Card>
        </div>
        <div>
        <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title="Roman"
      />
      <CardMedia
        component="img"
        height="250"
        image="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/8cb27881218809.5cf89e312353d.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
        </Typography>
      </CardContent>
     
    </Card>
        </div>
   
    
    </div>

    
  );
}