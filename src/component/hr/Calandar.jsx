import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import {useState} from 'react'
// import moment from 'moment'
import "./calandar.css";

export default function Calandar() {
    const [dateState, setDateState] = useState(new Date())
    const changeDate = (e) => {
        setDateState(e)
                                }
    return (
        <div className="calandar">
            
            <Calendar className="calanderbox"
            value={dateState}
            onChange={changeDate} 
            />
            {/* <p className="calanadarP">Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>  */}
        </div>
    )
}
