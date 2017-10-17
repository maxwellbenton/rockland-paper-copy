import React from 'react';
import { Container, Grid, Card, Header, Image } from 'semantic-ui-react'

const About = () => (
    <Container>
        <Header as= 'h2' textAlign='center'>About</Header>
        <Grid columns={3}>
            <Grid.Column width={12}>
                <Container text>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
                <p>Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </Container>
            </Grid.Column>
            <Grid.Column width={4}>
                <Card>
                    <Image src="http://www.rocklandtimes.com/wp-content/uploads/2017/09/Screen-Shot-2017-09-14-at-10.04.03-AM.png" fluid/>
                </Card>
            </Grid.Column>
        </Grid>
    </Container>
  )
  
export default About