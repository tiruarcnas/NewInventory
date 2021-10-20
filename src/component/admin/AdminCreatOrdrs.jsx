import React, { Component } from "react";
import "./AdminProjectBidForm.css";
import axios from "axios";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Form, Button, Col, Row } from "react-bootstrap";
import { Redirect } from 'react-router';

class AdminCreatOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
          ProductName: '',
          CASNumber: '',
          Brand: '',
          CatalogueNumber: '',
          PackSize: '',
          OrderQuantity: '',
          ImportanceType: '',
          ProductType: '',
          VendorName: '',
          AddComments: '',
          Status: 'pending',
          redirect: false,
          emp:[]
        };
        this.handleProductNameChange = this.handleProductNameChange.bind(this);
        this.handleCASNumberChange = this.handleCASNumberChange.bind(this);
        this.handleBrandChange = this.handleBrandChange.bind(this);
        this.handleCatalogueNumberChange =
          this.handleCatalogueNumberChange.bind(this);
        this.handlePackSizeChange = this.handlePackSizeChange.bind(this);
        this.handleOrderQuantityChange = this.handleOrderQuantityChange.bind(this);
        this.handleImportanceTypeChange =
          this.handleImportanceTypeChange.bind(this);
        this.handleProductTypeChange = this.handleProductTypeChange.bind(this);
        this.handleVendorNameChange = this.handleVendorNameChange.bind(this);
        this.handleAddCommentsChange = this.handleAddCommentsChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.addCreate = this.addCreate.bind(this);
      }
      handleProductNameChange(e) {
        this.setState({ ProductName: e.target.value });
      }
      handleCASNumberChange(e) {
        this.setState({ CASNumber: e.target.value });
      }
      handleBrandChange(e) {
        this.setState({ Brand: e.target.value });
      }
      handleCatalogueNumberChange(e) {
        this.setState({ CatalogueNumber: e.target.value });
      }
      handlePackSizeChange(e) {
        this.setState({ PackSize: e.target.value });
      }
      handleOrderQuantityChange(e) {
        this.setState({ OrderQuantity: e.target.value });
      }
      handleImportanceTypeChange(e) {
        this.setState({ ImportanceType: e.target.value });
      }
      handleProductTypeChange(e) {
        this.setState({ ProductType: e.target.value });
      }
      handleVendorNameChange(e) {
        this.setState({ VendorName: e.target.value });
      }
      handleAddCommentsChange(e) {
        this.setState({ AddComments: e.target.value });
      }
      handleStatusChange(e) {
        this.setState({ Status: e.target.value });
      }
      addCreate(event) {
        event.preventDefault();
        const orderAdd = {
          ProductName: this.state.ProductName,
          CASNumber: this.state.CASNumber,
          Brand: this.state.Brand,
          CatalogueNumber: this.state.CatalogueNumber,
          PackSize: this.state.PackSize,
          OrderQuantity: this.state.OrderQuantity,
          ImportanceType: this.state.ImportanceType,
          ProductType: this.state.ProductType,
          VendorName: this.state.VendorName,
          AddComments: this.state.AddComments,
          Status: this.state.Status,
        };
        //console.log(orderAdd);
        axios
          .post('http://localhost:4000/api/order', orderAdd)
          .then((res) => {
            console.log(res);
            this.setState({ redirect: this.state.redirect === false });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    
      componentDidMount() {
        axios.get(`http://localhost:4000/api/emporderget/${this.props.match.params.id}`)
        .then(res => {
            console.log(res);
            this.setState({ emp: res.data })
        });
    }
     
      savedorder = (event) => {
        event.preventDefault();
        const orderAdd2 = {
          ProductName: this.state.ProductName,
          CASNumber: this.state.CASNumber,
          Brand: this.state.Brand,
          CatalogueNumber: this.state.CatalogueNumber,
          PackSize: this.state.PackSize,
          OrderQuantity: this.state.OrderQuantity,
          ImportanceType: this.state.ImportanceType,
          ProductType: this.state.ProductType,
          VendorName: this.state.VendorName,
          AddComments: this.state.AddComments,
          Status: this.state.Status,
        };
        console.log(orderAdd2);
        axios
          .post('http://localhost:4000/api/savedorder', orderAdd2)
          .then((res) => {
            console.log(res);
            this.setState({ redirect: this.state.redirect === false });
          })
          .catch((err) => {
            console.log(err);
          });
      };
   render() {
     //var data= this.state.emp;
    return (
      
      <React.Fragment>
        <h2 id="role-form-title">Create Orders</h2>
        {/* <div id="role-form-outer-div">
          <div id="role-form-inner-div"> */}
 {/* {data.length > 0 ? 
                      data.map((user, i) => {                        
                          return ( */}
        <div id="role-form-outer-div">
          <Form id="form"onSubmit={this.addCreate} method="post">
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              Order Created By
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="Text"
                  placeholder="Order Created By "
                  name="Order Created By"
                  value="UserAdmin"
                  //required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              Employee ID
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="Text"
                  placeholder="Employee ID "
                  name="Employee ID"
                 value="6167fb7f4652cd15888a0818"
                  //required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              Department
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="Text"
                  placeholder="Department "
                  name="Department"
                  value="User"
                 // required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              Product Name
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="Text"
                  placeholder="Product Name "
                  name="ProductName "
                  onChange={this.handleProductNameChange}
                value={this.state.ProductName}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              CAS Number
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="text"
                  placeholder="CASNumber "
                  name="CASNumber"
                  //name="CASNumber"
                  onChange={this.handleCASNumberChange}
                  value={this.state.CASNumber}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              Brand
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="Text"
                  placeholder="Brand "
                  name="Brand"
                  onChange={this.handleBrandChange}
                value={this.state.Brand}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              Catalogue Number
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="Number"
                  placeholder="CatalogueNumber "
                  name="CatalogueNumber"
                  onChange={this.handleCatalogueNumberChange}
                value={this.state.CatalogueNumber}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              Pack Size
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="Number"
                  placeholder="PackSize "
                  name="PackSize"
                  onChange={this.handlePackSizeChange}
                  value={this.state.PackSize}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              Order Quantity
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="Number"
                  placeholder="OrderQuantity "
                  name="OrderQuantity"
                  onChange={this.handleOrderQuantityChange}
                value={this.state.OrderQuantity}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              Importance Type
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control as="select"   name="ImportanceType"
               
                onChange={this.handleImportanceTypeChange}
                value={this.state.ImportanceType}required>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              Product Type
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="Text"
                  placeholder="Product Type "
                  name="ProductType"
                  onChange={this.handleProductTypeChange}
                  value={this.state.ProductType}
                  required
                />
              </Col>
            </Form.Group>  

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              Vendor Name
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="Text"
                  placeholder="Vendor Name "
                  name="VendorName"
                  onChange={this.handleVendorNameChange}
                  value={this.state.VendorName}
                  required
                />
              </Col>
            </Form.Group>               
            
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              Add Comments
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control as="textarea" rows="3" onChange={this.handleAddCommentsChange}
                value={this.state.AddComments} required />
              </Col>
            </Form.Group>
           

           

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Status
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control as="select"   onChange={this.handleStatusChange}
                value={this.state.Status}required>
                  <option value="1">Pending</option>
                  
                </Form.Control>
              </Col>
            </Form.Group>

           

            <Form.Group as={Row} id="form-submit-button">
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Submit</Button>
              </Col>
            </Form.Group>
            <Form.Group as={Row} id="form-cancel-button">
              <Col sm={{ span: 10, offset: 2 }} id="form-cancel-button-inner">
                <Button type="submit" onClick={this.savedorder}>
                  SavedOrder
                </Button>
              </Col>
            </Form.Group>
          </Form>
          {this.state.redirect && <Redirect to={'/admin/AdminActiveOrder'} />}
        </div>
         {/* )}
         ):null} */}
      </React.Fragment>
    );
  }
}

export default AdminCreatOrder;
