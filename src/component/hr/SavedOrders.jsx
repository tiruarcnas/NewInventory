import './SavedOrders.css'
// import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import React ,{Component} from 'react';
import axios from 'axios';
// import EditIcon from '@mui/icons-material/Edit';


class SaveOrders extends Component {
    constructor(props){
      super(props)
      this.state={
        pricing:[],
        redirect:false
      }
      this.deleteUser = this.deleteUser.bind(this);
    }
    componentDidMount() {
      axios.get('http://localhost:9000/api/savedorderget')
      .then(res => {
          console.log(res);
          this.setState({ pricing: res.data })
      });
  }
  deleteUser=(a)=> {
    //event.preventDefault();
    //console.log(this.state.a)
    axios.post(`http://localhost:9000/api/saved/delete/${a}`)
      .then(res => {
        console.log(res);
          this.setState({ redirect: this.state.redirect === false })
          window.location.reload();
      });
  }
    render(){
      
          const Button = ({ type }) => {
            return <button className={"savedOrdersButton " + type}>{type}</button>;
          };
   var data = this.state.pricing;
          return (
              <div className="savedOrders">
                <h3 className="savedOrdersTitle">SavedOrders</h3>
                <table className="savedOrdersTable">
                  <thead>
                  <tr className="savedOrdersTr">
                  <th className="savedOrdersTh">OrderID</th>
                    <th className="savedOrdersTh">Chemical Name</th>
                    <th className="savedOrdersTh">Quantity</th>
                    <th className="savedOrdersTh">CAS Number</th>
                    <th className="savedOrdersTh">Importance Type</th>
                    <th className="savedOrdersTh">Vendor Name</th>
                    <th className="savedOrdersTh">Order Status</th>
                    <th className="savedOrdersTh">Product Details</th>
                    <th className="savedOrdersTh">Action</th>
                  </tr>
                  </thead>
                 
                 {data.length >0 ? data.map((save1,i)=>{
                     return(
                  <tbody>
                  <tr className="savedOrdersTr1">
            <td className="savedOrdersUser">
              <span className="savedOrdersName">{save1._id}</span>
            </td>
            <td className="savedOrdersDate">{save1.ProductName}</td>
            <td className="savedOrdersAmount">{save1.OrderQuantity}</td>
            <td className="savedOrdersStatus">{save1.CASNumber}</td>
            <td className="savedOrdersDate">{save1.ImportanceType}</td>
            <td className="savedOrdersAmount">{save1.VendorName}</td>
            <td className="savedOrdersStatus">
              <Button type="Saved"/>
            </td>
            <td className="savedOrdersAmount">Gaseous state</td>
            <td>
              <Link to={"/user/"+save1._id}>
                            
                              <button className="savedOrdersEditIcon">Edit</button>
                      
              </Link>
              &nbsp;&nbsp;
               <button className="savedOrdersDelete"  type ="submit" onClick={(e)=>{if(window.confirm(`Are you sure to delete this record?ID::`+save1._id)){this.deleteUser(save1._id,e)}}}>Delete</button> 
           {/* <button className="userListbutton" type ="submit" onClick={(e)=>{if(window.confirm(`Are you sure to delete this record?ID::`+save1._id)){this.deleteUser(save1._id,e)}}}>delete</button>  */}
            </td>
          </tr>
          </tbody>
            );
          }):null}
                  </table>
                  </div>
  
          )
  }
  }
  export default SaveOrders;
