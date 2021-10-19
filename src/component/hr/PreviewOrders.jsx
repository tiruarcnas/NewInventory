//import React from 'react'
import "./PreviewOrders.css"
import axios from 'axios';
import React ,{Component} from 'react';

class PreviewOrders extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      order: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:9000/api/orderget')
    .then(res => {
        console.log(res);
        this.setState({ order: res.data })
    });
}
  render(){
    
    const Button = ({ type }) => {
        return <button className={"previewOrdersButton " + type}>{type}</button>;
      };
      var data = this.state.order;
      return (
        <div className="previewOrders">
          <h3 className="previewOrdersTitle">Previwe Orders</h3>
          <table className="previewOrdersTable">
           <thead>
           <tr className="previewOrdersTr">
            <th className="previewOrdersTh">OrderID</th>
              <th className="previewOrdersTh">Chemical Name</th>
              <th className="previewOrdersTh">Quantity</th>
              <th className="previewOrdersTh">CAS Number</th>
              <th className="previewOrdersTh">Importance Type</th>
              <th className="previewOrdersTh">Vendor Name</th>
              <th className="previewOrdersTh">Order Status</th>
              <th className="previewOrdersTh">Product Details</th>
            </tr>
           </thead>
           {data.length > 0 ? 
                    data.map((user, i) => {                        
                        return (
           <tbody>
            <tr className="previewOrdersTr1">
              <td className="previewOrdersUser">
                <span className="previewOrdersName">{user._id}</span>
              </td>
              <td className="previewOrdersDate">{user.ProductName}</td>
              <td className="previewOrdersAmount">{user.PackSize}</td>
              <td className="previewOrdersStatus">{user.CASNumber}</td>
              <td className="previewOrdersDate">{user.ImportanceType}</td>
              <td className="previewOrdersAmount">Arcnas</td>
              <td className="previewOrdersStatus">
                <Button type="Approved" />
              </td>
              <td className="previewOrdersAmount">Gaseous state </td>
            </tr>
            </tbody>
                        )}
                    ):null}
          </table>
        </div>
      )
}
}
export default PreviewOrders;