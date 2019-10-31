import React from 'react'
import "views/Skills/skill.css"
import Add from "@material-ui/icons/Add";
import { Jumbotron , Button,Col, Row, Navbar ,Nav,InputGroup , NavDropdown ,Form,FormControl}  from 'react-bootstrap'

export default function Customertype() {
  return (
  
      <div>
      <Navbar bg="light" expand="lg">
  <Navbar.Brand>
     <h4 ><b>Customer Type</b></h4>
    </Navbar.Brand>
</Navbar><br/>

<Form className="Foorm">
<Form.Row>         
          <Form.Row as={Col} md="10">
            <Form.Group className="dude" controlId="validationFormik02">
            <Form.Control  
                type="search"
                name="lastName"
                placeholder="search..."
              />
            </Form.Group>
           </Form.Row>

           <Form.Row as={Col} md="2">
          <Form.Group className="dude" controlId="validationFormik01">
          <InputGroup>
          <Button variant="info" size="sm" ><b><Add
    style={{ fontSize: "20px" }}
  />Add</b></Button>
              </InputGroup> 
            </Form.Group>
            </Form.Row>
            
 </Form.Row>
</Form>

    </div>
  
  )
}
