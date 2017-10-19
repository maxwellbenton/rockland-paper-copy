import React from 'react';
import { Container, Grid, Card, Icon, Image, Segment, Header } from 'semantic-ui-react'

const Services = (props) => (
    
        <Grid.Column computer={5} tablet={10} mobile={10}>
        <Segment>
        <Image src={props.img} fluid />
        
        <Header>
            {props.name}
        </Header>
        
        <p>
            {props.info}
        </p>
        
        <p>
        
            <Icon name='arrow right' />
            {props.price}
        
        </p>
        </Segment>
        </Grid.Column>
    
)
  
export default Services