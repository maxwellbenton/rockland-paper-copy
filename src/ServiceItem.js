import React from 'react';
import { Container, Grid, Card, Icon, Image, Segment, Header } from 'semantic-ui-react'

const Services = (props) => (
    
        <Grid.Column computer={5} tablet={14} mobile={16}>
        <Segment>
        
        <Header>
        <Icon name='arrow right' />{props.name}
        </Header>
        
        <p>
            {props.info}
        </p>
        
        <p>
        
            
            
        
        </p>
        </Segment>
        </Grid.Column>
    
)
  
export default Services