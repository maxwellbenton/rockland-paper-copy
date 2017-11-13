import { Grid, Container, Header, Divider, Image, Segment } from 'semantic-ui-react';
import React from 'react';
const Main = () => (
    <Grid.Row centered>
        <Grid.Column >
            <Container text textAlign='center'>
                <Header size="huge" as='h1'><h1>Rockland Instant Copy</h1></Header>
                <Header.Subheader as='h3'>132 Park Avenue, New City, NY</Header.Subheader>
                <Header.Subheader as='h3'>845-634-2000</Header.Subheader>

                <Image src="./photos/main_rockland.jpg" fluid/> 
                <Segment>   
                <Container textAlign='centered'>
                    <h3>Since 1984, our print and copy shop in New City, New York, has offered a wide range of printing and copying services. Our family-owned store specializes in large and small jobs using the most state-of-the-art equipment available. Our services include color copying, large format color print, black and white copies, digital scanning, signs, banners, newsletters, business cards, and blueprints. With over 30 years of printing experience, Rockland Instant Copy is your best choice to help design and execute your next project.</h3> 
                        <h3>Call today or come visit us at our new location!</h3> 
                        <h3>Conveniently located at 132 Park Avenue in New City, just minutes from our old Main Street location. Now with customer parking!</h3>
                    <h3>Rockland Copy specializes in both large corporate jobs, as well as small personable projects.</h3>
                </Container>
                </Segment>
            </Container>
        </Grid.Column>
        
    </Grid.Row>
  )
  
export default Main