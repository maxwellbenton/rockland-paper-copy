import React from 'react';
import { Container, Grid, Card, Header, Image } from 'semantic-ui-react'

const Contact = () => (
    <Container>
        <Header as= 'h2' textAlign='center'>Contact</Header>
        <Grid columns={3}>
            <Grid.Column width={4}>
                <Card>
                    <Image src="http://oiltankremovalrocklandcounty.com/images/Oil_Tank_Removals_Rockland_County.jpg" fluid/>
                </Card>
            </Grid.Column>
            <Grid.Column width={12}>
                <Container text>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
                <p>Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </Container>
            </Grid.Column>
        </Grid>
    </Container>
  )
  
export default Contact