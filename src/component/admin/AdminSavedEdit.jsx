
import { Link } from "react-router-dom";
import "./AdminSavedEdit.css";
import React ,{Component} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
class AdminSavedEdit extends Component {
  constructor(props){
    super(props)
    this.state ={
      //id:this.props.match.params.id,
      ProductName: "",
      CASNumber: "",
      Brand: "",
      CatalogueNumber: "",
      PackSize: "",
      OrderQuantity: "",
      ImportanceType:"",
      ProductType:"",
      VendorName:"",
      AddComments:"",
      //Status:  "pending",
      redirect:false
    }
  this.handleProductNameChange = this.handleProductNameChange.bind(this);
this.handleCASNumberChange = this.handleCASNumberChange.bind(this);
this.handleBrandChange = this.handleBrandChange.bind(this);
this.handleCatalogueNumberChange =this.handleCatalogueNumberChange.bind(this);
this.handlePackSizeChange =this.handlePackSizeChange.bind(this);
this.handleOrderQuantityChange =this.handleOrderQuantityChange.bind(this);
this.handleImportanceTypeChange =this.handleImportanceTypeChange.bind(this);
this.handleProductTypeChange = this.handleProductTypeChange.bind(this);
this.handleVendorNameChange = this.handleVendorNameChange.bind(this);
this.handleAddCommentsChange = this.handleAddCommentsChange.bind(this);
// this.handleStatusChange = this.handleStatusChange.bind(this);
this.updateUser = this.updateUser.bind(this);
  }
  componentDidMount() {
    // if (this.props.match && this.props.match.params.id) {
       //const id = this.props.match.params.id
    axios.get(`http://localhost:4000/api/singleorderget/${this.props.match.params.id}`)
    .then(res => {
        this.setState({ 
          ProductName: res.data.ProductName,
          CASNumber:res.data.CASNumber,
          Brand: res.data.Brand,
          CatalogueNumber: res.data.CatalogueNumber,
          PackSize: res.data.PackSize,
          OrderQuantity: res.data.OrderQuantity,
          ImportanceType: res.data.ImportanceType,   
          ProductType: res.data.ProductType,
          VendorName:res.data.VendorName,    
          AddComments:res.data.AddComments,
         
        })
        //console.log(res)
    });
  }
  
  handleProductNameChange (e) {
    this.setState({ProductName: e.target.value});
  }
  handleCASNumberChange (e) {
    this.setState({CASNumber: e.target.value});
  }
  handleBrandChange(e) {
    this.setState({Brand: e.target.value})
  }
 handleCatalogueNumberChange (e) {
   this.setState({CatalogueNumber: e.target.value})
 }
 handlePackSizeChange (e){
   this.setState({PackSize: e.target.value});
 }
 handleOrderQuantityChange (e){
   this.setState({OrderQuantity: e.target.value});
 }
 handleImportanceTypeChange (e) {
   this.setState({ImportanceType: e.target.value});
 }
 handleProductTypeChange (e) {
   this.setState({ProductType: e.target.value});
 }
 handleVendorNameChange (e) {
   this.setState({VendorName: e.target.value});
 }
 handleAddCommentsChange (e) {
   this.setState({AddComments: e.target.value});
 }
 updateUser(event) {
  event.preventDefault();
  const userUpdate = {
    ProductName: this.state.ProductName,
    CASNumber:this.state.CASNumber,
    Brand: this.state.Brand,
    CatalogueNumber: this.state.CatalogueNumber,
    PackSize: this.state.PackSize,
    OrderQuantity: this.state.OrderQuantity,
    ImportanceType: this.state.ImportanceType,   
    ProductType: this.state.ProductType ,
    VendorName:this.state.VendorName,    
    AddComments:this.state.AddComments,
    //Status:this.state.Status 
  }
  console.log(userUpdate)
  axios.post(`http://localhost:4000/api/update/${this.props.match.params.id}`, userUpdate)
  .then(res => { 
      console.log(res);
      if(this.state.redirect === false ){
        return <Redirect to='/products' />
      }
      //browserHistory.push("/users");
      //this.props.history.push('/users')
     // window.location.reload();

  })
  .catch(err => { console.log(err) });
}

  render(){
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit Saved Order</h1>
        <Link to="/admin/AdminCreatOrder">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userUpdate">
          {/* <span className="userUpdateTitle">Edit</span> */}
          <form className="userUpdateForm"  method="post">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Order Created By</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="userUpdateInput"
                />
              </div>
              {/* <input type="text" value={id}/> */}
              <div className="userUpdateItem">
                <label>Employee Id</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Department</label>
                <input
                  type="text"
                  placeholder="annabeck99@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Product Name</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput" name="ProductName"
                  onChange={this.handleProductNameChange} value={this.state.ProductName}
                />
              </div>
              <div className="userUpdateItem">
                <label>CAS Number</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                  name="CASNumber" onChange={this.handleCASNumberChange} value={this.state.CASNumber}
                />
              </div>
              <div className="userUpdateItem">
                <label>Brand</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                  name="Brand" onChange={this.handleBrandChange} value={this.state.Brand}
                />
              </div>
              <div className="userUpdateItem">
                <label>catalouge Number</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                  name="catalougeNumber"
                  onChange={this.handleCatalogueNumberChange} value={this.state.CatalogueNumber}
                />
              </div>
              <div className="userUpdateItem">
                <label>Pack Size</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                  name="PackSize" onChange={this.handlePackSizeChange} value={this.state.PackSize}
                />
              </div>
              <div className="userUpdateItem">
                <label>Order Quantity</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                  name="OrderQuantity" onChange={this.handleOrderQuantityChange} value={this.state.OrderQuantity}
                />
              </div>
              <div className="userUpdateItem">
                <label>Importance Type</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                  name="ImportanceType" id="active" onChange={this.handleImportanceTypeChange} value={this.state.ImportanceType}
                />
              </div>
              <div className="userUpdateItem">
                <label>Product Type</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                  name="ProductType" onChange={this.handleProductTypeChange} value={this.state.ProductType}
                />
              </div>
              <div className="userUpdateItem">
                <label>Vendor Name</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                  name="VendorName" onChange={this.handleVendorNameChange}  value={this.state.VendorName}
                />
              </div>
              <div className="userUpdateItem">
                <label>Add Comments</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="userUpdateInput"
                  name="AddComments" onChange={this.handleAddCommentsChange} value={this.state.AddComments}
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button type="submit" onClick={this.updateUser}className="userUpdateButton">Update</button>
            </div>
          </form>
          {this.state.redirect && (<Redirect to={'/users'}/>)}
        </div>
      </div>
      </div>
  );
}
}
export default  AdminSavedEdit; 
