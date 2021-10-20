import React from 'react'
import "./AddVendor.css";
import { Link } from 'react-router-dom';
// import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
//import { Page, Text, View, Document } from '@react-pdf/renderer';



export default function AddVendor() {

    return (
        <div>
           <div className="vendorAdd">
      <div className="vendorAddTitleContainer">
        {/* <Link to="/"><span className="vendorAddTitle1">Existing Vendor</span></Link> */}
        <span className="vendorAddTitle2">Add New Vendor</span>

                  {/* <h1 className="profileTitle">My Profile</h1>
                  <Link to="/edit">
                   <button className="profileAddButton">Edit</button>
                  </Link> */}


      </div>
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
              <div className="vendorAddUpdateItem">
                <label>Accounts Phone No</label>
                <input
                  type="text"
                  placeholder=""
                  className="vendorAddUpdateInput"
                />
              </div>
              <div className="vendorAddUpdateItem">
                <label>Finance SPOC</label>
                <input
                  type="text"
                  placeholder=""
                  className="vendorAddUpdateInput"
                />
              </div>
              <div className="vendorAddUpdateItem">
                <label>Finance Email ID</label>
                <input
                  type="text"
                  placeholder=""
                  className="vendorAddUpdateInput"
                />
              </div>
              <div className="vendorAddUpdateItem">
                <label>Finance Phone No</label>
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
               {/* <button className="editUpdateButton">Add Vendor</button>  */}
            </div> 
            <div className="vendorAddUpdateRight">
              <div className="vendorAddUpdateUpload">
               {/* <PictureAsPdfIcon />  */}

              </div>
              Add Attachments
              <button className="vendorAddUpdateButton">Add Vendor</button>
            </div>
          </form>
        
        </div>
      </div>
      </div>
        </div>
    )
}
