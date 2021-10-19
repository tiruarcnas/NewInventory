import "./AdminSetReminder.css";
import React from "react";

export default function AdminSetReminder() {
  return (
    <div>
      <h1 className="addProductTitle">Set Reminder</h1>
    <div className="newProduct">
      
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Add Title</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="addProductItem">
          <label>Time</label>
          <input type="time" placeholder="123" />
        </div>
        <div className="addProductItem">
          <label>Date</label>
          <input type="date" placeholder="" />
          {/* <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select> */}
        </div>
        <div className="addProductItem4">
          <label>Add Notes</label>
         <textarea></textarea>
        </div>
        <div className="addProductItem5">
          <label>Repeat Reminder</label>
          <input type="textarea" placeholder="" />
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
    </div>
  );
}
