import React from 'react';
import { Container, Grid, Card, Icon, Image } from 'semantic-ui-react'

const Services = (props) => (
    
    <Grid.Column>
        <Card>
        <Image src={props.img} fluid />
        <Card.Content>
        <Card.Header>
            {props.name}
        </Card.Header>
        <Card.Meta>
            some extra info
        </Card.Meta>
        <Card.Description>
            {props.info}
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
        
            <Icon name='arrow right' />
            {props.price}
        
        </Card.Content>
        </Card>
    </Grid.Column>
)
  
export default Services