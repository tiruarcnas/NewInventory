import React ,{Component} from 'react';
import ActiveOrders from './ActiveOrders';

import Calandar from './Calandar';
class Home extends Component{

    render()
    {
        return(

<div className="home">
      <Calandar/>
      {/* <FeaturedInfo /> */}
      {/* <Chart data={userData} title="User Analytics" grid dataKey="Active User"/> */}
      <div className="homeWidgets">
        {/* <WidgetSm/> */}
        
        <ActiveOrders />
        
      </div>
    </div>


           
        )
       
}
}
export default Home;