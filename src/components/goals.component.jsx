import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const Goals = (props) => {
  let { goals } = props;

//   const classes = useStyles();

console.log(goals, "goals comonent")
  if (!goals || goals.length === 0) return <p> No Goals! </p>;
  return (
    <React.Fragment>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} >
            
  
         

  
              <Grid item key={goals.id} xs={12} md={4}>
                <Card>
                  <CardContent>
                    <Typography
                      variant="h6"
                      compenent="h2"
                    >
                      {goals[0].title}
                    </Typography>
                  
                  </CardContent>
   
                </Card>

              </Grid>
       
       
           {goals.map((goal => {
         
            return(
  
              <Grid item key={goal.id} xs={12} md={4}>
                <Card>
                  <CardContent>
                    <Typography
                      variant="h6"
                      compenent="h2"
                    >
                      {goal.title}
                    </Typography>
                  
                  </CardContent>
   
                </Card>

              </Grid>
            );
       
          }))};  

        </Grid>
        
      </Container>
    </React.Fragment>
  );

};

export default Goals