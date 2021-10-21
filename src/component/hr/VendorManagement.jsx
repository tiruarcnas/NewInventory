import React from 'react'
import "./VendorManagement.css";
import { Link } from 'react-router-dom';
// import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
//import { Page, Text, View, Document } from '@react-pdf/renderer';



export default function VendorAdd() {
  // const Button = ({ type }) => {
  //   return <button className={"userListButton " + type}>{type}</button>;
  // };

    return (
        <div>
           <div className="vendorAdd">
      <div className="vendorAddTitleContainer">
        <span className="vendorAddTitle1">Existing Vendor</span>
        <Link to="/hr/AddVendor"><span className="vendorAddTitle2">Add New Vendor</span></Link>

                  {/* <h1 className="profileTitle">My Profile</h1>
                  <Link to="/edit">
                   <button className="profileAddButton">Edit</button>
                  </Link> */}
</div>
        <table className="vendorAddTable">
          <thead>
          <tr className="vendorAddTr">
          <th className="vendorAddTh">Company Name</th>
            <th className="vendorAddTh">Partner Since</th>
            <th className="vendorAddTh">SPOC</th>
            <th className="vendorAddTh">SPOC Email ID</th>
            <th className="vendorAddTh">SPOC Phone No</th>
            <th className="vendorAddTh">Web Address</th>
            <th className="vendorAddTh">Company Address</th>
            <th className="vendorAddTh">Landline No</th>
            <th className="vendorAddTh">Fax Number</th>
            <th className="vendorAddTh">Accounts SPOC</th>
            <th className="vendorAddTh">Accounts Email ID</th>
            <th className="vendorAddTh">Finance Phone No</th>
            <th className="vendorAddTh">Action</th>
          </tr>
          </thead>
          <tr className="vendorAddTr1">
          <td className="vendorAddTd">
            <span className="vendorAddTd"></span>
          </td>
          <td className="vendorAddTd"></td>
          <td className="vendorAddTd"></td>
          <td className="vendorAddTd"></td>
          <td className="vendorAddTd"></td>
          <td className="vendorAddTd"></td>
          <td className="vendorAddTd"></td>
          <td className="vendorAddTd"></td>
          <td className="vendorAddTd"></td>
          <td className="vendorAddTd">
            {/* <Button type="Saved"/> */}
          </td>
          <td className="productListTd"></td>
          <td>
            <Link to={"/"}>
                          
                            <button className="vendorAddEditIcon">Edit</button>
                    
            </Link>
            &nbsp;&nbsp;
             <button className="vendorAddDelete"  type ="submit">Delete</button>
         {/* <button className="userListbutton" type ="submit" onClick={(e)=>{if(window.confirm(`Are you sure to delete this record?ID::`+save1._id)){this.deleteUser(save1._id,e)}}}>delete</button>  */}
          </td>
        </tr>
         
        </table>
      </div>

      
        </div>
    )
}
