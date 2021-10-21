import "./AdminActive.css";
import React ,{Component} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { Button,Modal} from 'react-bootstrap';
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

  // constructor(){  
  //   super();  
  //   this.state={  
  //     show:false  
  //   }  
  // }  

  handleModal(){  
    this.setState({show:!this.state.show})  
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
            <Link onClick={()=>this.handleModal()}><span className="productListName">{user._id}</span></Link>

            <Modal show={this.state.show} onHide={()=>this.handleModal()}>  
          <Modal.Header closeButton>{user._id}</Modal.Header>  
          <Modal.Body>
          <div className="container" style={{marginTop: "50px"}}>
        <div className="card text-left">
          {/* <div className="card-header">Name : {this.state.user.name}</div> */}
              <div className="card-body"> 
                <div className="row">
                  <div className="col-lg-3">
                  {/* <img className="img-thumbnail" style={{marginBottom: "10px"}} src={userImg} alt="user"/><br/>                                             */}
                  </div>
                  <div className="col-lg-9">
                    <p className="card-text">Email : {user.ProductName}</p>                 
                    <p className="card-text">Phone : {user.PackSize}</p>
                    <p className="card-text">Job : {user.CASNumber}</p>
                    <p className="card-text">Company :{user.ImportanceType}</p>
                    {/* <p className="card-text">Age : {this.state.user.age}</p>                 
                    <p className="card-text">City : {this.state.user.city}</p> */}
                  </div>
                </div>                                        
                  <hr/>
                  <div className="row" style={{marginLeft: "0px"}}>
                    {/* <Link to={this.state.user._id+"/edit"}>
                      <button className="btn btn-primary">Edit user</button>
                    </Link>                   */}
                    <form onSubmit={this.deleteUser}>
                      <button type="submit" className="btn btn-danger" style={{marginLeft: "10px"}}>Delete</button>
                    </form>
                  </div> 
                
                  {/* {this.state.redirect && (
                    <Redirect to={'/users'}/>
                  )} */}

              </div>
          </div>
      </div>
            </Modal.Body>  
         
        </Modal>
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