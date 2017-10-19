import React from 'react';
import ServiceItem from './ServiceItem'
import { Container, Segment, Grid, Header } from 'semantic-ui-react'

const serviceList = [
    {name: "Service 1", info: "Full service copying and more!", price: "$22.99 - $39.99", img: "https://static.theworks.co.uk/images/5015934049211_Z.jpg"},
    {name: "Service 2", info: "Full service copying and more!", price: "$42.99 - $69.99", img: "https://static.theworks.co.uk/images/5015934049211_Z.jpg"},
    {name: "Service 3", info: "Full service copying and more!", price: "$72.99 - $99.99", img: "https://static.theworks.co.uk/images/5015934049211_Z.jpg"}
]

const Services = () => (
    
    <Grid.Row columns={5} centered >
        
        {serviceList.map(service => <ServiceItem {...service} />)}
        
    </Grid.Row>
)
  
export default Services
