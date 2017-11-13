import React from 'react';
import ServiceItem from './ServiceItem'
import { Container, Segment, Grid, Header } from 'semantic-ui-react'

const serviceList = [
    {name: "Printing", info: "Black and White copies as low as 2 cents and Color copies as low at 15 cents!", img: "https://static.theworks.co.uk/images/5015934049211_Z.jpg"},
    {name: "Scanning", info: "Drowning in old files? Let us help you by scanning your paper files into searchable PDFs!", img: "https://static.theworks.co.uk/images/5015934049211_Z.jpg"},
    {name: "Legal Copies", info: "Rockland Instant Copy was located across from the Rockland County courthouse for 35 and has always specialized in providing fast, high quality services for the printing and copying of legal documents.", img: "https://static.theworks.co.uk/images/5015934049211_Z.jpg"},
    {name: "Booklets and Binding", info: ""},
    {name: "Blue Prints", info: ""},
    {name: "Business Cards", info: ""}
] 




 

const Services = () => (
    
    <Grid.Row columns={5} centered >
        
        {serviceList.map(service => <ServiceItem {...service} />)}
        
    </Grid.Row>
)
  
export default Services
