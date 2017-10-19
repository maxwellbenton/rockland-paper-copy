import React from 'react';
import { Item, Container, Grid, Card, Header, Image, Segment } from 'semantic-ui-react'

const Contact = () => (
    <Grid.Row centered style={{minHeight: '100vh'}}>        
        <Grid.Column  computer={11} tablet={10} mobile={10}>
        <Segment>          
        <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</span>
        <span>Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</span>
        </Segment>       
        </Grid.Column>
        <Grid.Column computer={5} tablet={10} mobile={10}>
        <Image src="http://oiltankremovalrocklandcounty.com/images/Oil_Tank_Removals_Rockland_County.jpg" fluid/>    
        </Grid.Column>
    </Grid.Row>
  )
  
export default Contact