import React,{Component} from 'react'
import axios from "axios";
import "./ActiveOrders.css"

class ActiveOrders extends Component {
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
      return <button className={"activeOrdersButton " + type}>{type}</button>;
    };
    var data =this.state.order;
    return (
      <div className="activeOrders">
        <h3 className="activeOrdersTitle">ActiveOrders</h3>
        <table className="activeOrdersTable">
          <thead>
          <tr className="activeOrdersTr">
          <th className="activeOrdersTh">OrderID</th>
            <th className="activeOrdersTh">Chemical Name</th>
            <th className="activeOrdersTh">Quantity</th>
            <th className="activeOrdersTh">CAS Number</th>
            <th className="activeOrdersTh">Importance Type</th>
            <th className="activeOrdersTh">Vendor Name</th>
            <th className="activeOrdersTh">Order Status</th>
            <th className="activeOrdersTh">Product Details</th>
          </tr>
          </thead>
          {data.length > 0 ? 
                      data.map((user, i) => {                        
                          return (
                            <tbody>
          <tr className="activeOrdersTr1">
            <td className="activeOrdersUser">
              <span className="activeOrdersName">{user._id}</span>
            </td>
            <td className="activeOrdersDate">{user.ProductName}</td>
            <td className="activeOrdersAmount">{user.PackSize}</td>
            <td className="activeOrdersStatus">{user.CASNumber}</td>
            <td className="activeOrdersDate">{user.ImportanceType}</td>
            <td className="activeOrdersAmount">{user.VendorName}</td>
            <td className="activeOrdersStatus">
              <Button type={user.Status}/>
            </td>
            <td className="activeOrdersAmount">Gaseous state </td>
          </tr>
             
         </tbody>
         )}
         ):null}
        </table>
      </div>
      
    )
  }
  }

  export default ActiveOrders;
