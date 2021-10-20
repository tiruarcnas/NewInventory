import React from 'react'
import "./VendorManagement.css";
import { Link } from 'react-router-dom';
// import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
//import { Page, Text, View, Document } from '@react-pdf/renderer';



export default function VendorAdd() {

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
          
         
        </table>
      </div>

      {/* </div>
      <div className="vendorAddContainer">
        <div className="vendorAddUpdate">
          <form className="vendorAddUpdateForm">
            <div className="vendorAddUpdateLeft">
              <div className="vendorAddUpdateItem">
                <label>Company Name</label>
                <input
                  type="text"
                  placeholder=""
                  className="vendorAddUpdateInput"
                />
              </div>
              <div className="vendorAddUpdateItem">
                <label>Partner Since</label>
                <input
                  type="text"
                  placeholder=""
                  className="vendorAddUpdateInput"
                />
              </div>
              <div className="vendorAddUpdateItem">
                <label>SPOC</label>
                <input
                  type="text"
                  placeholder=""
                  className="vendorAddUpdateInput"
                />
              </div>
              <div className="vendorAddUpdateItem">
                <label>SPOC Email ID</label>
                <input
                  type="text"
                  placeholder=""
                  className="vendorAddUpdateInput"
                />
              </div>
              <div className="vendorAddUpdateItem">
                <label>SPOC Phone No</label>
                <input
                  type="text"
                  placeholder=""
                  className="vendorAddUpdateInput"
                />
              </div>
              <div className="vendorAddUpdateItem">
                <label>Web Address</label>
                <input
                  type="text"
                  placeholder=""
                  className="vendorAddUpdateInput"
                />
              </div>
              <div className="vendorAddUpdateItem">
                <label>Company Address</label>
                <input
                  type="text"
                  placeholder=""
                  className="vendorAddUpdateInput"
                />
              </div>
              <div className="vendorAddUpdateItem">
                <label>Landline No</label>
                <input
                  type="text"
                  placeholder=""
                  className="vendorAddUpdateInput"
                />
              </div>
              <div className="vendorAddUpdateItem">
                <label>Fax No</label>
                <input
                  type="text"
                  placeholder=""
                  className="vendorAddUpdateInput"
                />
              </div>
              <div className="vendorAddUpdateItem">
                <label>Accounts SPOC</label>
                <input
                  type="text"
                  placeholder=""
                  className="vendorAddUpdateInput"
                />
              </div>
              <div className="vendorAddUpdateItem">
                <label>Accounts Email ID</label>
                <input
                  type="text"
                  placeholder=""
                  className="vendorAddUpdateInput"
                />
              </div>
               <button className="editUpdateButton">Add Vendor</button> 
            </div>
            <div className="vendorAddUpdateRight">
              <div className="vendorAddUpdateUpload">
              {/* <PictureAsPdfIcon /> 

              </div>
              <button className="vendorAddUpdateButton">Add Vendor</button>
            </div>
          </form>
        </div>
      </div>
      </div> */}
        </div>
    )
}
