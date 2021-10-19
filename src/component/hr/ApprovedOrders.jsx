import React,{Component} from 'react'
import axios from "axios";
import './ApprovedOrders.css'

class ApproveOrders extends Component {
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
      return <button className={"approveOrdersButton " + type}>{type}</button>;
    };
    var data =this.state.order;
    return (
      <div className="approveOrders">
        <h3 className="approveOrdersTitle">Approved Orders</h3>
        <table className="approveOrdersTable">
          <thead>
          <tr className="approveOrdersTr">
          <th className="approveOrdersTh">OrderID</th>
            <th className="approveOrdersTh">Chemical Name</th>
            <th className="approveOrdersTh">Quantity</th>
            <th className="approveOrdersTh">CAS Number</th>
            <th className="approveOrdersTh">Importance Type</th>
            <th className="approveOrdersTh">Vendor Name</th>
            <th className="approveOrdersTh">Order Status</th>
            <th className="approveOrdersTh">Product Details</th>
          </tr>
          </thead>
          {data.length > 0 ? 
                      data.map((user, i) => {                        
                          return (
                            <tbody>
          <tr className="approveOrdersTr1">
            <td className="approveOrdersUser">
              <span className="approveOrdersName">{user._id}</span>
            </td>
            <td className="approveOrdersDate">{user.ProductName}</td>
            <td className="approveOrdersAmount">{user.PackSize}</td>
            <td className="approveOrdersStatus">{user.CASNumber}</td>
            <td className="approveOrdersDate">{user.ImportanceType}</td>
            <td className="approveOrdersAmount">{user.VendorName}</td>
            <td className="approveOrdersStatus">
              <Button type={user.Status}/>
            </td>
            <td className="approveOrdersAmount">Gaseous state </td>
          </tr>
             
         </tbody>
         )}
         ):null}
        </table>
      </div>
      
    )
  }
  }

  export default ApproveOrders;