import "./AdminActive.css";
import React ,{Component} from 'react';
import axios from "axios";
class AdminActiveOrder extends Component {
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
    return <button className={"productListButton " + type}>{type}</button>;
  };
  var data =this.state.order;
  return (
    <div className="productList">
      <h3 className="productListTitle">ActiveOrders</h3>
      <table className="productListTable">
        <thead>
        <tr className="productListTr">
        <th className="productListTh">OrderID</th>
          <th className="productListTh">Chemical Name</th>
          <th className="productListTh">Quantity</th>
          <th className="productListTh">CAS Number</th>
          <th className="productListTh">Importance Type</th>
          <th className="productListTh">Vendor Name</th>
          <th className="productListTh">Order Status</th>
          <th className="productListTh">Product Details</th>
        </tr>
        </thead>
        {data.length > 0 ? 
                    data.map((user, i) => {                        
                        return (
                          <tbody>
        <tr className="productListTr1">
          <td className="productListUser">
            <span className="productListName">{user._id}</span>
          </td>
          <td className="productListDate">{user.ProductName}</td>
          <td className="productListAmount">{user.PackSize}</td>
          <td className="productListStatus">{user.CASNumber}</td>
          <td className="productListDate">{user.ImportanceType}</td>
          <td className="productListAmount">{user.VendorName}</td>
          <td className="productListStatus">
            <Button type={user.Status}/>
          </td>
          <td className="productListAmount">Gaseous state </td>
        </tr>
           
       </tbody>
       )}
       ):null}
      </table>
    </div>
    
  )
}
}
export default AdminActiveOrder;