import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function HomePage() {
  return(
    <>
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Welcome to the  RTNA-v0.1 -Blogs!
        </Typography>
        <Typography variant="body1">
         Please login to continue . 
         <ul>
            <b>Featues :-</b>
            <li>
                You can read and write blogs
            </li>
            <li>
                You can read other's blog and like and comment
            </li>
            <li>
                New features will added very soon!
            </li>
         </ul>
        </Typography>
      </CardContent>
    </Card>
    </>
  )
}

export default HomePage;
