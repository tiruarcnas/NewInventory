import './AdminSaved.css';
//import DeleteIcon from '@mui/icons-material/Delete';
//  import { DataGrid } from "@material-ui/data-grid";
// import { DeleteOutline } from "@material-ui/icons";
//  import { userRows } from "../../dummyData";
import { Link } from 'react-router-dom';
//  import { useState } from "react";
import React, { Component } from 'react';
import axios from 'axios';
//import EditIcon from '@mui/icons-material/Edit';
import { Redirect } from 'react-router';

class AdminSavedOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pricing: [],
      redirect: false,
    };
    this.deleteUser = this.deleteUser.bind(this);
  }
  componentDidMount() {
    axios.get('http://localhost:4000/api/savedorderget').then((res) => {
      console.log(res);
      this.setState({ pricing: res.data });
    });
  }
  deleteUser = (a) => {
    //event.preventDefault();
    //console.log(this.state.a)
    axios.post(`http://localhost:4000/api/saved/delete/${a}`).then((res) => {
      console.log(res);
      this.setState({ redirect: this.state.redirect === false });
      window.location.reload();
    });
}
  render(){
    
        const Button = ({ type }) => {
          return <button className={"userListButton " + type}>{type}</button>;
        };
 var data = this.state.pricing;
        return (
            <div className="userList">
              <h3 className="userListTitle">SavedOrders</h3>
              <table className="userListTable">
                <thead>
                <tr className="userListTr">
                <th className="userListTh">OrderID</th>
                  <th className="userListTh">Chemical Name</th>
                  <th className="userListTh">Quantity</th>
                  <th className="userListTh">CAS Number</th>
                  <th className="userListTh">Importance Type</th>
                  <th className="userListTh">Vendor Name</th>
                  <th className="userListTh">Order Status</th>
                  <th className="userListTh">Product Details</th>
                  <th className="userListTh">Action</th>
                </tr>
                </thead>
               
               {data.length >0 ? data.map((save1,i)=>{
                   return(
                <tbody>
                <tr className="userListTr1">
          <td className="userListUser">
            <span className="userListName">{save1._id}</span>
          </td>
          <td className="userListDate">{save1.ProductName}</td>
          <td className="userListAmount">{save1.OrderQuantity}</td>
          <td className="userListStatus">{save1.CASNumber}</td>
          <td className="userListDate">{save1.ImportanceType}</td>
          <td className="userListAmount">{save1.VendorName}</td>
          <td className="userListStatus">
            <Button type="Saved"/>
          </td>
          <td className="productListAmount">Gaseous state</td>
          <td>
            <Link to={"/admin/AdminSavedEdit/"+save1._id}>
                          
                            <button className="userListEditIcon">Edit</button>
                    
            </Link>
            &nbsp;&nbsp;
             <button className="userListDelete"  type ="submit" onClick={(e)=>{if(window.confirm(`Are you sure to delete this record?ID::`+save1._id)){this.deleteUser(save1._id,e)}}}>Delete</button>
         {/* <button className="userListbutton" type ="submit" onClick={(e)=>{if(window.confirm(`Are you sure to delete this record?ID::`+save1._id)){this.deleteUser(save1._id,e)}}}>delete</button>  */}
          </td>
        </tr>
        </tbody>
          );
        }):null}
                </table>
                </div>


    );
  }
}
export default AdminSavedOrder;
