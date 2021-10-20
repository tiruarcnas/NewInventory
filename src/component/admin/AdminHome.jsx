import React ,{Component} from 'react';
import AdminActiveOrder from './AdminActiveOrder';
import Calandar from './Calandar';
class AdminHome extends Component{

    render()
    {
        return(

<div className="home">
      <Calandar/>
      <div className="homeWidgets">
       
        <AdminActiveOrder/>
        
      </div>
    </div>


           
        )
       
}
}
export default AdminHome;