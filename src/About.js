import React from 'react';
import { Container, Item, Segment, Grid, Card, Header, Image } from 'semantic-ui-react'

const About = () => (
    
    <Grid.Row centered style={{minHeight: '100vh'}}>
  
          <Grid.Column computer={5} tablet={10} mobile={10}>
          <Image src="./photos/keith.jpg" fluid/>    
          </Grid.Column>
          <Grid.Column  computer={11} tablet={10} mobile={10}>
          <Segment>   
                <Container textAlign='justified'>  
                        
                <h3>Since 1984, Keith Henderson has been helping Rockland, Westchester, and Bergen communities with all of their printing needs. Keith was born and raised in Rockland County and now lives in Chestnut Ridge, NY with his family and 2 dogs. With over 30 years of experience in the business, Keith is confident he can help you design, print, and distribute your next printing project.</h3>
                
            </Container>
          </Segment>       
          </Grid.Column>
      </Grid.Row>
    
    
  )
  
export default About