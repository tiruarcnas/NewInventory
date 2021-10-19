import React from 'react'
import './SetReminder.css'

export default function SetReminder() {
    return (
            <div>
                <h3 className="setReminderTitle">Set Reminder</h3>
                     <div className="setReminder">
                            <form className="setReminderForm">
                                <div className="setReminderItem">
                                    <label>Add Title</label>
                                    <input type="text" placeholder="Apple Airpods" />
                                </div>
                                <div className="setReminderItem">
                                    <label>Time</label>
                                    <input type="time" placeholder="123" />
                                </div>
                                <div className="setReminderItem">
                                    <label>Date</label>
                                    <input type="date" placeholder="" />
                                </div>
                                <div className="setReminderItem4">
                                    <label>Add Notes</label>
                                    <textarea></textarea>
                                </div>
                                <div className="setReminderItem5">
                                    <label>Repeat Reminder</label>
                                    <input type="textarea" placeholder="" />
                                </div>
                                <button className="setReminderButton">Create</button>
                            </form>
                        </div>
            </div>
    )
}
