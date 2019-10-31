
import React from 'react';
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import "views/Validatedform/Style.css";
import {Form,Button,Col,InputGroup} from "react-bootstrap";
import * as ReactDOM from 'react-dom';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import People from "@material-ui/icons/People";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter";
const ValidatedLoginForm = () => (
  <Formik
    initialValues={{
    firstname:"",
    email: "",
    password: "" ,
    mobile: "",
    lastname: "",
    emp:"",
    extension:"",
    username:"",
    salary:"",
    variablepay:"",
    ctc:"",
    targetmi:"",
    dob:"",
    doj:"",
    targetmx:"",
    targetd:""}}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    validationSchema={Yup.object().shape({
      firstname: Yup.string()
      .required("firstName Required"),
      lastname: Yup.string()
      .required("lastnameRequired"),
      email: Yup.string()
        .email()
        .required("Required"),
        emp: Yup.string()
        .required("Enter valid employee Id")
        .max(5, "enter the valied employee Id")
        .matches(/[0-9]/,"employee Id number contains only number"),
      mobile: Yup.string()
        .required("Enter valid mobile number")
        .min(10, "Phone number should be minimum 10 digits.")
        .max(10, "Phone number should be maximum 10 digits.")
        .matches(/[0-9]/,"mobile number contains only number"),
      extension: Yup.string()
        .required("Enter valid mobile number")
        .min(10, "Phone number should be minimum 10 digits.")
        .max(10, "Phone number should be maximum 10 digits.")
        .matches(/[0-9]/,"extension number contains only number"),
      dob: Yup.string()
        .required("date of birth is Required"),
      doj: Yup.string()
        .required("date of joining is Required"),
      username: Yup.string()
        .email()
        .required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number."),
      salary: Yup.string()
        .required("Enter valid salary")
        .min(4, "salary  should be valid.")
        .max(5, "salary  should be valid.")
        .matches(/[0-9]/,"extension number contains only number"),
        variablepay: Yup.string()
        .required("Enter valid variablePay")
        .min(4, "variablepay should be valid.")
        .max(5, "variablepay should be valid.")
        .matches(/[0-9]/,"extension number contains only number"),
      variablepay: Yup.string()
      .required("Enter valid variablePay")
      .min(4, "variablepay should be valid.")
      .max(5, "variablepay should be valid.")
      .matches(/[0-9]/,"extension number contains only number"),
      ctc: Yup.string()
      .required("Enter valid ctc")
      .min(6, "ctc should be in lacks")
      .max(7, "ctc should be in lacks")
      .matches(/[0-9]/,"ctc should be in lacks"),
      targetmx: Yup.string()
      .required("Enter valid targetvalue")
      .min(1, "enter the valid target(max) value")
      .max(3, "enter the valid target(max) value")
      .matches(/[0-9]/,"target(max) only number"),
      targetmi: Yup.string()
      .required("Enter valid target value")
      .min(1, "enter the valid target(min) value")
      .max(3, "enter the valid target(min) value")
      .matches(/[0-9]/,"target(min) only number"),
       targetd: Yup.string()
       .required("Enter valid target value")
       .min(10, "Phone number should be minimum 10 digits.")
       .max(10, "Phone number should be maximum 10 digits.")
       .matches(/[0-9]/,"extension number contains only number"),
      
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,handleChange,
        handleBlur,
        startDate,
        handleSubmit,
        handleReset,
        reset,
        submitting,
        pristine
      } = props;
  return (
    <Card>
     <CardBody>
     <h3>Users/Add User</h3>
     <hr width="170px" size="14" align="left"/>
     </CardBody>
     <br></br>
        <CardBody>
        <Form onSubmit={handleSubmit}>
    <Form.Row>
    <Form.Group as={Col} md="3">
          <Form.Label style={{color:"#090459"}}>First Name*</Form.Label>
          <Form.Control
            name="firstname"
            type="text"
            placeholder="Enter your firstname"
            value={values.firstname}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.firstname && touched.firstname && "error"}
          />
          {errors.firstname && touched.firstname && (
            <div className="input-feedback">{errors.firstname}</div>
          )}
          </Form.Group>
          <Form.Group as={Col} md="3">
          <Form.Label style={{color:"#090459"}}>Last Name*</Form.Label>
          <Form.Control
            name="lastname"
            type="text"
            placeholder="Enter your lastname"
            value={values.lastname}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.lastname && touched.lastname && "error"}
          />
          {errors.lastname && touched.lastname && (
            <div className="input-feedback">{errors.lastname}</div>
          )}
          </Form.Group>
          <Form.Group as={Col} md="3">
          <Form.Label style={{color:"#090459"}}>Email*</Form.Label>
          <Form.Control
            name="email"
            type="text"
            placeholder="Enter your Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email&& "error"}
          />
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
          )}
          </Form.Group>
          <Form.Group as={Col} md="3">
          <Form.Label style={{color:"#090459"}}>Employee Id*</Form.Label>
          <Form.Control
            name="emp"
            type="text"
            placeholder="Enter your Employee Id"
            value={values.emp}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.emp && touched.emp&& "error"}
          />
          {errors.emp && touched.emp && (
            <div className="input-feedback">{errors.emp}</div>
          )}
          </Form.Group>
   </Form.Row>
   <Form.Row>
          <Form.Group as={Col} md="3" >
          <Form.Label style={{color:"#090459"}}>Mobile Number*</Form.Label>
          <Form.Control
            name="mobile"
            type="text"
            placeholder="Enter your contact number"
            value={values.mobile}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.mobile && touched.mobile&& "error"}
          />
          {errors.mobile&& touched.mobile && (
            <span className="input-feedback">{errors.mobile}</span>
          )}
          </Form.Group>
          <Form.Group as={Col} md="3" >
          <Form.Label style={{color:"#090459"}} >Extension number*</Form.Label>
          <Form.Control
            name="extension"
            type="text"
            placeholder="Enter your contact number"
            value={values.extension}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.extension && touched.extension&& "error"}
          />
          {errors.extension&& touched.extension && (
            <span className="input-feedback">{errors.extension}</span>
          )}
          </Form.Group>
          <Form.Group as={Col} md="3" >
          <Form.Label style={{color:"#090459"}}>Role*</Form.Label>
         <Form.Control as="select">
         <option>Choose...</option>
         <option>...</option>
         </Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="3">
          <Form.Label style={{color:"#090459"}}>DOB*</Form.Label>
          <Form.Control
            name="dob"
            type="date"
            placeholder="Enter your date of birth"
            value={values.dob}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.dob&& touched.dob&& "error"}
          />
          {errors.dob&& touched.dob && (
            <span className="input-feedback">{errors.dob}</span>
          )}
          </Form.Group>
      </Form.Row>
      <Form.Row>
          <Form.Group as={Col} md="3">
          <Form.Label style={{color:"#090459"}}>DOJ*</Form.Label>
          <Form.Control
            name="doj"
            type="date"
            placeholder="Enter your date of joining"
            value={values.doj}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.doj&& touched.doj&& "error"}
          />
          {errors.doj&& touched.doj && (
            <span className="input-feedback">{errors.doj}</span>
          )}
          </Form.Group>
          <Form.Group as={Col} md="3">
          <Form.Label style={{color:"#090459"}}>Reporting Manager*</Form.Label>
         <Form.Control as="select">
         <option>Choose...</option>
         <option>...</option>
         </Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="3">
          <Form.Label style={{color:"#090459"}}>User Name*</Form.Label>
          <Form.Control
            name="username"
            type="text"
            placeholder=".@ojas-it.com"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.username && touched.username&& "error"}
          />
          {errors.username && touched.username&& (
            <div className="input-feedback">{errors.username}</div>
          )}
          </Form.Group>
          <Form.Group as={Col} md="3">
          <Form.Label style={{color:"#090459"}}>Password*</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Enter the password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password&& "error"}
          />
          {errors.password && touched.password&& (
            <div className="input-feedback">{errors.password}</div>
          )}
          </Form.Group>
     </Form.Row>
          <hr size="8" align="center"/>
          <h4 style={{color:"#090459"}}>Salary Structure</h4>
          <Form.Row>
          <Form.Group as={Col} md="4">
          <Form.Label style={{color:"#090459"}}>Salary*</Form.Label>
          <Form.Control
            name="salary"
            type="text"
            placeholder="Enter your salary"
            value={values.salary}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.salary && touched.salary && "error"}
          />
          {errors.salary && touched.salary && (
            <span className="input-feedback">{errors.salary}</span>
          )}
          </Form.Group>
          <Form.Group as={Col} md="4">
          <Form.Label style={{color:"#090459"}}>Variable Pay*</Form.Label>
          <Form.Control
            name="variablepay"
            type="text"
            placeholder="Enter your variable Pay"
            value={values.variablepay}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.variablepay && touched.variablepay && "error"}
          />
          {errors.variablepay && touched.variablepay&& (
            <div className="input-feedback">{errors.variablepay}</div>
          )}
          </Form.Group>

          <Form.Group as={Col} md="4">
          <Form.Label style={{color:"#090459"}}>CTC*</Form.Label>
          <Form.Control
            name="ctc"
            type="text"
            placeholder="Enter your ctc"
            value={values.ctc}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.ctc && touched.ctc&& "error"}
          />
          {errors.ctc && touched.ctc && (
            <div className="input-feedback">{errors.ctc}</div>
          )}
          </Form.Group>
          </Form.Row>
          <Form.Row>
          <Form.Group as={Col} md="4">
          <Form.Label style={{color:"#090459"}}>Target(min)*</Form.Label>
          <Form.Control
            name="targetmi"
            type="text"
            placeholder="Enter your (min)Target"
            value={values.targetmi}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.targetmi && touched.targetmi && "error"}
          />
          {errors.targetmi && touched.targetmi && (
            <span className="input-feedback">{errors.targetmi}</span>
          )}
          </Form.Group>
          <Form.Group as={Col} md="4">
          <Form.Label style={{color:"#090459"}}>Target(max)*</Form.Label>
          <Form.Control
            name="targetmx"
            type="text"
            placeholder="Enter your (max) Target"
            value={values.targetmx}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.targetmx && touched.targetmx && "error"}
          />
          {errors.targetmx && touched.targetmx&& (
            <div className="input-feedback">{errors.targetmx}</div>
          )}
          </Form.Group>
          <Form.Group as={Col} md="4">
          <Form.Label style={{color:"#090459"}} >Target Duration*</Form.Label>
          <Form.Control as="select">
         <option>Choose...</option>
         <option>...</option>
         </Form.Control>
          </Form.Group>
          </Form.Row>

          <Form.Row>
          <Form.Group as={Col} md="1">
          <Button type="button" onClick={handleReset}>Reset</Button></Form.Group>
          <Form.Group as={Col} md="9">
          <Button type="button">Cancel</Button> 
          </Form.Group>
          <Form.Group as={Col} md="2">
          <Button type="submit">Submit</Button>
          </Form.Group>
          </Form.Row>

        </Form>
        </CardBody>
    </Card>
  );
    }}
</Formik>
);

export default ValidatedLoginForm;
