import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles, IconButton, Button } from '@material-ui/core'
import { Link } from '@reach/router'
import { Delete as DeleteIcon, Edit as EditIcon } from '@material-ui/icons';

const styles = theme =>({
  card: {
    maxWidth: 300,
    marginRight: 'auto',
  },
  cardGrid: {
    justify:"center",
    float: 'left',
    width: 200,
    height: 300,
    marginLeft: 50,
    marginRight: 30,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

function Cards({ movie, classes }) {
  return (
      <main>
         <div className={classes.cardGrid}>
            <Card className={classes.card}>
              <CardMedia 
                className={classes.media}
                image={movie.Affiche} 
                alt={'affiche du film'}
              />
              <CardContent>
                <Typography noWrap gutterBottom variant="headline" component="h2">
                  {movie.Titre}
                </Typography>
                <Typography  noWrap component="p">
                  {movie.Synopsys}
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={`/update/${movie.id}`}>
                <IconButton color="primary" ><EditIcon /></IconButton>
                </Link>
                <Link to={`/delete/${movie.id}`}>
                <IconButton color="secondary"><DeleteIcon /></IconButton>
                </Link>
                <Link to={`/movie/${movie.id}`}>
                  <Button 
                  variant="contained" 
                  color="primary">
                  VU
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </div>
      </main>
  );
}

Cards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cards);