import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
//import Link from '@material-ui/core/Link';
import { Link } from "gatsby"


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/Bielma/algoritmos-ia">
      IA Algorithms
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const data = [
  {
    id:1,
    tittle: "Perceptron",
    url: "https://github.com/Bielma/algoritmos-ia/tree/perceptron",
    description: "Perceptron simple",
    img: 'https://www.cs.utexas.edu/~teammco/misc/perceptron/perceptron.png',
    page: '/perceptron/'
  },
  {
    id:2,
    tittle: "Adaline",
    url: "https://github.com/Bielma/algoritmos-ia/tree/adaline",
    description: "Adaline simple",
    img: 'https://koldopina.com/wp-content/uploads/2018/04/Adaline.jpg',
    page: '/adaline/'
  },
  {
    id:3,
    tittle: "BackPropagerion",
    url: "https://github.com/Bielma/algoritmos-ia/tree/perceptron",
    description: "NN para separar n clases",    
    img: 'https://www.diegocalvo.es/wp-content/uploads/2017/07/perceptron-multicapa.png',
    page: '/back_propagation/'
  }
];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>          
          <Typography variant="h6" color="inherit" noWrap>
            IA Algorithms
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Inteligencia artificial
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Perceptron, Adaline, BackPropagation...
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">                          
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {data.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.img}
                    title=  {card.tittle}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.tittle}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to={card.page}>Ir</Link>

                    <a href={card.url}>
                       Código
                    </a>            

                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
         Create by: 
         Dany,
         Ema,
         Marce, 
         Tony. 
          
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}