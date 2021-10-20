import React,{Component} from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import './RejectedOrders.css';

class RejectedOrders extends Component {
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
      return <button className={"rejectedOrdersButton " + type}>{type}</button>;
    };
    var data =this.state.order;
    return (
      <div className="rejectedOrders">
        <div className="rejectedOrdersTitleContainer">
            <Link to="/"><span className="rejectedOrdersTitle1">Rejected Orders</span></Link>
       
        </div>
        <table className="rejectedOrdersTable">
          <thead>
          <tr className="rejectedOrdersTr">
          <th className="rejectedOrdersTh">OrderID</th>
            <th className="rejectedOrdersTh">Chemical Name</th>
            <th className="rejectedOrdersTh">Quantity</th>
            <th className="rejectedOrdersTh">CAS Number</th>
            <th className="rejectedOrdersTh">Importance Type</th>
            <th className="rejectedOrdersTh">Vendor Name</th>
            <th className="rejectedOrdersTh">Order Status</th>
            <th className="rejectedOrdersTh">Product Details</th>
          </tr>
          </thead>
          {data.length > 0 ? 
                      data.map((user, i) => {                        
                          return (
                            <tbody>
          <tr className="rejectedOrdersTr1">
            <td className="rejectedOrdersUser">
              <span className="rejectedOrdersName">{user._id}</span>
            </td>
            <td className="rejectedOrdersDate">{user.ProductName}</td>
            <td className="rejectedOrdersAmount">{user.PackSize}</td>
            <td className="rejectedOrdersStatus">{user.CASNumber}</td>
            <td className="rejectedOrdersDate">{user.ImportanceType}</td>
            <td className="rejectedOrdersAmount">{user.VendorName}</td>
            <td className="rejectedOrdersStatus">
              <Button type={user.Status}/>
            </td>
            <td className="rejectedOrdersAmount">Gaseous state </td>
          </tr>
             
         </tbody>
         )}
         ):null}
        </table>
      </div>
      
    )
  }
  }

  export default RejectedOrders;

