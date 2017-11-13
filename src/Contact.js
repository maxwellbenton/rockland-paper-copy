import React from 'react';
import { Item, Container, Grid, Card, Header, Image, Input, Segment, Form, TextArea, Button  } from 'semantic-ui-react'

const Contact = () => (
    <Grid.Row centered style={{minHeight: '100vh'}}>        
        <Grid.Column only="computer" computer={10} >
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
        </Grid.Column>
        <Grid.Column computer={6} tablet={10} mobile={10}>
        <Image src="http://oiltankremovalrocklandcounty.com/images/Oil_Tank_Removals_Rockland_County.jpg" fluid/>    
        </Grid.Column>
        
    </Grid.Row>
  )
  
export default Contact