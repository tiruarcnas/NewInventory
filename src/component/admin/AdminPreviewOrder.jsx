//import React from 'react'
import "./AdminPreview.css"
import axios from 'axios';
import React ,{Component} from 'react';
class AdminPreviewOrder extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      order: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:4000/api/orderget')
    .then(res => {
        console.log(res);
        this.setState({ order: res.data })
    });
}
  render(){
    
    const Button = ({ type }) => {
        return <button className={"saveProductsButton " + type}>{type}</button>;
      };
      var data = this.state.order;
      return (
        <div className="saveProducts">
          <h3 className="saveProductsTitle">Previwe Orders</h3>
          <table className="saveProductsTable">
           <thead>
           <tr className="saveProductsTr">
            <th className="saveProductsTh">OrderID</th>
              <th className="saveProductsTh">Chemical Name</th>
              <th className="saveProductsTh">Quantity</th>
              <th className="saveProductsTh">CAS Number</th>
              <th className="saveProductsTh">Importance Type</th>
              <th className="saveProductsTh">Vendor Name</th>
              <th className="saveProductsTh">Order Status</th>
              <th className="saveProductsTh">Product Details</th>
            </tr>
           </thead>
           {data.length > 0 ? 
                    data.map((user, i) => {                        
                        return (
           <tbody>
            <tr className="saveProductsTr1">
              <td className="saveProductsUser">
                <span className="saveProductsName">{user._id}</span>
              </td>
              <td className="saveProductsDate">{user.ProductName}</td>
              <td className="saveProductsAmount">{user.PackSize}</td>
              <td className="saveProductsStatus">{user.CASNumber}</td>
              <td className="saveProductsDate">{user.ImportanceType}</td>
              <td className="saveProductsAmount">Arcnas</td>
              <td className="saveProductsStatus">
                <Button type="Approved" />
              </td>
              <td className="saveProductsAmount">Gaseous state </td>
            </tr>
            </tbody>
                        )}
                    ):null}
          </table>
        </div>
      )
}
}
export default AdminPreviewOrder;