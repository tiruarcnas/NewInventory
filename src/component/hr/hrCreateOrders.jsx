import React, { Component } from "react";
import axios from "axios";

import { Form, Button, Col, Row } from "react-bootstrap";

class hrCreateOrders extends Component {
  state = {
    roleData: [],
    positionData: [],
    departmentData: [],

  }

  loadRoleInfo = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/api/role", {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      })
      .then(response => {
        this.setState({ roleData: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
  loadPositionInfo = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/api/position", {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      })
      .then(response => {
        this.setState({ positionData: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
  loadDepartmentInfo = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/api/department", {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      })
      .then(response => {
        this.setState({ departmentData: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
  componentWillMount() {
    this.loadRoleInfo();
    this.loadPositionInfo();
    this.loadDepartmentInfo();
  }

  render() {
    return (
      <div>
        <h2 id="role-form-title">Create Orders</h2>
        <div id="role-form-outer-div">
          <Form id="form" onSubmit={this.props.onEmployeeSubmit}>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Order Created By
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="text"
                  placeholder="Order Created By"
                  value="InventoryAdmin"
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Employee ID
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="text"
                  placeholder="Employee Id"
                  value="6167fa0b4652cd15888a0817"
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} >
              <Form.Label column sm={2}>
                Department
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="text"
                  placeholder="Department"
                  value="Inventory"
                  required
                />
              </Col>
              {/* <Col sm={10} className="form-input">
                <Form.Control as="select" required>
                  <option value="1">Admin</option>
                  <option value="2">HR</option>
                  <option value="3">Employee</option>
                </Form.Control>
              </Col> */}
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Product Name
              </Form.Label>
              <Col sm={10} className="form-input">
              <Form.Control
                  type="text"
                  placeholder="Product Name"
                  required
                />

                {/* <Form.Control
                  as="select"
                  name="role"
                >
                  <option disabled selected>
                    Select your option
                  </option>
                  {this.state.roleData.map((data, index) => (
                    <option key={index} value={data["_id"]}>{data["RoleName"]}</option>
                  ))}
                </Form.Control> */}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2}>
                CAS Number
              </Form.Label>
              <Col sm={10}>
              <Form.Control
                  type="text"
                  placeholder="CAS Number"
                  required
                />
                {/* <Form.Check
                  inline
                  type="radio"
                  label="Male"
                  value="male"
                  name="gender"
                  onChange={this.props.onGenderChange}
                  required
                /> */}
                {/* <Form.Check
                  inline
                  type="radio"
                  label="Female"
                  value="female"
                  name="gender"
                  onChange={this.props.onGenderChange}
                  required
                /> */}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Brand
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="text"
                  placeholder="Brand"
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
                  type="text"
                  placeholder="Catalouge Number"
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
                  type="text"
                  placeholder="Pack Size"

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
                  placeholder="Order Quantity"
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              Importance Type
              </Form.Label>
              <Col sm={10} className="form-input">
                
              <Form.Control as="select" required>
                  <option value="1">Type</option>
                  <option value="2">A</option>
                  <option value="3">B</option>
                  <option value="4">C</option>
                </Form.Control>
              
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              Product Type
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="text"
                  placeholder="Product Type"

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
                  type="text"
                  placeholder="Vendor Name"

                  required
                />
                {/* <Form.Control
                  as="select"
                  name="department"
                  required
                >
                  <option value="" disabled selected>
                    Select your option
                  </option>
                  {this.state.departmentData.map((data, index) => (
                    <option key={index} value={data["_id"]}>{data["DepartmentName"]}</option>
                  ))}
                </Form.Control> */}
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              Add Comments
              </Form.Label>
              <Col sm={10} className="form-input">
              <Form.Control
                  as="textarea"
                  row="3"
                  placeholder="Comments"

                  required
                />
                {/* <Form.Control as="select" name="position" required>
                  <option value="" disabled selected>
                    Select your option
                  </option>
                  {this.state.positionData.map((data, index) => (
                    <option key={index} value={data["_id"]}>{data["PositionName"]}</option>
                  ))}
                </Form.Control> */}
              </Col>
            </Form.Group>
            {/* <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Date Of Joining
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="date"
                  placeholder="Date Of Joining"
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Terminate Date
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="date"
                  placeholder="Terminate Date"
                />
              </Col>
            </Form.Group> */}



            <Form.Group as={Row} id="form-submit-button">
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Submit</Button>
              </Col>
            </Form.Group>
            <Form.Group as={Row} id="form-cancel-button">
              <Col sm={{ span: 10, offset: 2 }} id="form-cancel-button-inner">
                <Button type="reset" onClick={this.props.onFormClose}>
                  cancel
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </div>

        {/* </div>
        </div> */}
      </div>
    );
  }
}

export default hrCreateOrders;
