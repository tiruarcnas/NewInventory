import React ,{Component} from 'react';
import AdminActiveOrder from './AdminActiveOrder';
import Calandar from './Calandar';
class AdminHome extends Component{

    render()
    {
        return(

<div className="home">
      <Calandar/>
      {/* <FeaturedInfo /> */}
      {/* <Chart data={userData} title="User Analytics" grid dataKey="Active User"/> */}
      <div className="homeWidgets">
        {/* <WidgetSm/> */}
        
        <AdminActiveOrder/>
        
      </div>
    </div>


           
        )
       
}
}
export default AdminHome;