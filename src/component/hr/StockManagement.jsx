import React,{Component} from 'react'
import axios from "axios";
import './StockManagement.css';
import { Link } from 'react-router-dom';

class StockManagement extends Component {
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
      return <button className={"stockDetailsButton " + type}>{type}</button>;
    };
    var data =this.state.order;
    return (
      <div className="stockDetails">
        {/* <h3 className="stockDetailsTitle">Existing Stock</h3>
        <h3 className="stockDetailsTitle">Daily Use Products</h3>
        <h3 className="stockDetailsTitle">Surplus Stock</h3>
        <h3 className="stockDetailsTitle">Additional Stock</h3> */}
        <div className="existingVTitleContainer">
        <Link to="/"><span className="stockDetailsTitle1">Existing Stock</span></Link>
        <Link to="/"><span className="stockDetailsTitle2">Daily Use Products</span></Link>
        <Link to="/"><span className="stockDetailsTitle3">Surplus Stock</span></Link>
        <Link to="/"><span className="stockDetailsTitle4">Additional Stock</span></Link>
      </div>
        <table className="stockDetailsTable">
          <thead>
          <tr className="stockDetailsTr">
          <th className="stockDetailsTh">Product Name</th>
            <th className="stockDetailsTh">CAS Number</th>
            <th className="stockDetailsTh">Brand</th>
            <th className="stockDetailsTh">Catalouge Number</th>
            <th className="stockDetailsTh">Pack Size</th>
            <th className="stockDetailsTh">Order Quantity</th>
            <th className="stockDetailsTh">Product Type</th>
            <th className="stockDetailsTh">Product Details</th>
          </tr>
          </thead>
          {data.length > 0 ? 
                      data.map((user, i) => {                        
                          return (
                            <tbody>
          <tr className="stockDetailsTr1">
            <td className="stockDetailsUser">
              <span className="stockDetailsName">{user._id}</span>
            </td>
            <td className="stockDetailsDate">{user.ProductName}</td>
            <td className="stockDetailsAmount">{user.PackSize}</td>
            <td className="stockDetailsStatus">{user.CASNumber}</td>
            <td className="stockDetailsDate">{user.ImportanceType}</td>
            <td className="stockDetailsAmount">{user.VendorName}</td>
            <td className="stockDetailsStatus"><Button type={user.Status}/></td>
            <td className="stockDetailsAmount">Gaseous state </td>
          </tr>
             
         </tbody>
         )}
         ):null}
        </table>
      </div>
      
    )
  }
  }

  export default StockManagement

