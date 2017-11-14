import React from 'react';
import { Item, Container, Grid, Card, Header, Image, Input, Segment, Form, TextArea, Button  } from 'semantic-ui-react'
import GoogleMapReact from 'google-map-react'

const Contact = () => (
   
        

<Grid.Row centered>
<Grid.Column >
    <Container text textAlign='center'>
        <Segment style={{height: '100vh'}}>   
          <Container textAlign='justified'>  
              Contact Stuff
              <GoogleMapReact style={{width: '50%', height: '100%'}}
                apiKey={process.env.GOOGLE_} 
                center={[41.142538, -73.987943]}
                zoom={12}
                
              />
          </Container>
      </Segment>
    </Container>
</Grid.Column>

</Grid.Row>
  )
  
export default Contact

{/* <Grid.Column only="computer" computer={10} >
        <Segment>          
        <Form>
          <Form.Field id='form-input-control-name' control={Input} label='Name' placeholder='Name' />
          <Form.Field id='form-input-control-phone' control={Input} label='Phone' placeholder='Phone' />
          <Form.Field required id='form-input-control-email' control={Input} label='Email' placeholder='Email' />
          <Form.Field required id='form-textarea-control-message' control={TextArea} label='Message or Inquiry' placeholder='Message or Inquiry' />
          <Form.Field id='form-button-control' control={Button} content='Submit' />
        </Form>
        </Segment>       
        </Grid.Column>
        
        <Grid.Column only="mobile tablet" tablet={14} mobile={14}>
        <Segment>          
        <Form size={'huge'} key={'huge'}>
          <Form.Field id='form-input-control-name' control={Input} label='Name' placeholder='Name' />
          <Form.Field id='form-input-control-phone' control={Input} label='Phone' placeholder='Phone' />
          <Form.Field required id='form-input-control-email' control={Input} label='Email' placeholder='Email' />
          <Form.Field required id='form-textarea-control-message' control={TextArea} label='Message or Inquiry' placeholder='Message or Inquiry' />
          <Form.Field id='form-button-control' control={Button} content='Submit' />
        </Form> 
        </Segment>       
        </Grid.Column> */}