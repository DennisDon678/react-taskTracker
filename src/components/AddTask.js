import { useState } from "react"

function AddTask() {
    const [text, setText] = useState('')
    const [day,setDay] = useState('')
    const [reminder,setReminder] = useState(false)
  return (
    <form className="add-form">
        <div className="form-control">
            <label htmlFor="task">Task</label>
            <input type="text" name="" placeholder="Add Task" id="" value={text} onChange={(e)=>setText(e.target.value)} />
        </div>

        <div className="form-control">
            <label htmlFor="task">Day and Time</label>
            <input type="text" name="" placeholder="Add day and time" id="" value={day} onChange={(e)=>setDay(e.target.value)} />
        </div>

        <div className="form-control form-control-check">
            <label htmlFor="task">Set Reminder</label>
            <input type="checkbox" name=""  id="" value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)} />
        </div>

        <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  )
}

export default AddTask