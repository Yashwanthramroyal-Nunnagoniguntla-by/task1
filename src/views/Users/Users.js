import React from "react";
import People from "@material-ui/icons/People";
import Add from "@material-ui/icons/Add";
import { Jumbotron , Button,Col, Navbar ,Nav,InputGroup , NavDropdown ,Form,FormControl}  from 'react-bootstrap'
import "views/Users/User.css"
import { Route, Switch,Link, BrowserRouter as Router } from 'react-router-dom'
import Validatedform from "views/Validatedform/Validatedform.js"
export default function Users() {     
  return (
  <div>
   <Navbar bg="light" expand="lg">
   <Navbar.Brand >
    <People style={{ fontSize: "40px" }}/> &emsp; <strong>Users</strong>
    </Navbar.Brand>
</Navbar>
<br/>
<Navbar bg="light" expand="lg">
<Form>
<Form.Row>         
          <Form.Row as={Col} md="4">
            <Form.Group   as={Col} md="6" controlId="validationFormik01">
              <Form.Label>Search By Category</Form.Label>
            <select className="ready">
            <option>---select---</option>
            <option value="candname">Candidate name</option>
            <option value="recname">Recruiter Name</option>
            <option value="Requi">Requirment name</option>
            <option value="rol">Role</option>
          </select>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationFormik02">
              <Form.Label>Last name</Form.Label>
              <Form.Control className="ready"
                type="text"
                name="lastName"
              />
            </Form.Group>
           </Form.Row>
             <Form.Row as={Col} md="4">
            <Form.Group  as={Col} md="4" controlId="validationFormik01">
              <Form.Label>Sort by</Form.Label><br/>
              <select className="ready">
              <option>--select--</option>
              <option value="candname">Candidate name</option>
            <option value="recname">Recruiter Name</option>
            <option value="Requi">Requirment name</option>
            <option value="rol">Role</option>
            <option value="dat">Date</option>
          </select>
            </Form.Group> 
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>Order by</Form.Label><br/>
              <select className="ready" >   
              <option>--select--</option>
              <option value="Ascen">Ascending</option>
            <option value="Descen">Descending</option>
          </select>
            </Form.Group>
           
            <Form.Group as={Col} md="2" controlId="validationFormikUsername">
            <Form.Label>&emsp;</Form.Label>
              <InputGroup>
              <Button variant="info" size="sm" >Search</Button>
              </InputGroup>   
            </Form.Group>

            <Form.Group as={Col} md="2" controlId="validationFormikUsername">
            <Form.Label>&emsp;</Form.Label>
              <InputGroup>
              <Button variant="danger" size="sm" >Reset</Button>
              </InputGroup>
            </Form.Group>
</Form.Row>

            <Form.Row as={Col} md="4">

            <Form.Row className="align" as={Col} md="9">
            <Form.Group as={Col} md="5" controlId="validationFormikUsername">
             <br/>
              <InputGroup>
              <p>Items per page</p>
              </InputGroup>
            </Form.Group>
       

          <Form.Group as={Col} md="4" controlId="validationFormik01">
            <br/>
              <select className="ready" >   
              <option value="10">10</option>
            <option value="Descen">15</option>
            <option value="10">20</option>
            <option value="Descen">25</option>
          </select>
            </Form.Group>
 </Form.Row>

<Form.Row as={Col} md="3">
<Form.Group as={Col} md="12" controlId="validationFormikUsername">
              <br/>
              <InputGroup>
              <Router>
      <Switch>
        <Route path="/Validatedform" children={Validatedform} />

        <Link to="/Validatedform"><Button variant="info" size="sm" ><b><Add
    style={{ fontSize: "20px" }}
  />Add</b></Button></Link>
  </Switch>
  </Router>
              </InputGroup>
            </Form.Group>
            </Form.Row>
</Form.Row>
</Form.Row>
</Form>
</Navbar>



          </div>


  );
}
