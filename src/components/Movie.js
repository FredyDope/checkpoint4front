import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Link } from '@reach/router'
import './movie.css'

const styles = {
  card: {
    maxWidth: 50,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}

const Movie = ({ movie }) => {

    return (
          <div className="container-movie">
            <Card className="card" sytle={{width:'300px'}}>
                <img src={movie.Affiche} alt={'affiche du film'}/>
              <CardContent sytle={{padding:'1rem'}} >
                <Typography gutterBottom variant="headline" component="h2">
                  {movie.Titre}
                </Typography>
                <Typography component="p">
                  Date de sortie :{movie.Sortie}<br/>
                  Genre : {movie.Genre}<br/>
                  Synopsys : {movie.Synopsys}
                </Typography>
              </CardContent>
              <CardActions paddingBottom = '2rem'>
              <Link to={`/movie/${movie.id}`}>
                <Button variant="contained" color="primary">VU</Button></Link>
              <Link to={`/delete/${movie.id}`}>
                <Button variant="contained" color="primary">Delete</Button></Link>
              <Link to={`/update/${movie.id}`}>
                <Button variant="contained" color="primary">Update</Button></Link>
              </CardActions>
            </Card>
            </div>  
    )
}

export default withStyles(styles)(Movie)

