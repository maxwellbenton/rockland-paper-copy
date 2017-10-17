import React from 'react';
import ServiceItem from './ServiceItem'
import { Container, Grid, Card, Header } from 'semantic-ui-react'

const serviceList = [
    {name: "Service 1", info: "Full service copying and more!", price: "$22.99 - $39.99", img: "https://static.theworks.co.uk/images/5015934049211_Z.jpg"},
    {name: "Service 2", info: "Full service copying and more!", price: "$42.99 - $69.99", img: "https://static.theworks.co.uk/images/5015934049211_Z.jpg"},
    {name: "Service 3", info: "Full service copying and more!", price: "$72.99 - $99.99", img: "https://static.theworks.co.uk/images/5015934049211_Z.jpg"}
]

const Services = () => (
    <Container>
        <Header as= 'h2' textAlign='center'>Services</Header>
        <Grid columns={3}>
            <Grid.Row>
                {serviceList.map(service => <ServiceItem {...service} />)}
            </Grid.Row>
        </Grid>
    </Container>
)
  
export default Services
