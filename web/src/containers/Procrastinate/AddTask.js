import React, { useState } from 'react'
import { GET_ACTIVITIES } from './graphql'

const AddTask = ({ onAddTask, user_id }) => {
  const [newTask, setNewTask] = useState('')
  const [type, setType] = useState('education')

  const generateActivity = (e) => {
    e.preventDefault()
    setNewTask('loading...')
    const fetchData = async () => {
      const res = await fetch(`http://www.boredapi.com/api/activity?type=${type}`)
      const data = await res.json()
      setNewTask(data.activity)
    }
    fetchData()
  }

  const GeneratedActivity = () => (
    <p>{newTask}</p>
  )

  const addTask = e => {
    e.preventDefault()
    onAddTask({
      variables: {
        taskInput: {
          title: newTask.toLowerCase(),
          type: 'activity',
          UserId: user_id,
        }
      },
      refetchQueries: () => [{ 
        query: GET_ACTIVITIES, 
        variables: {
          id: user_id
        } 
      }],
    })
    setNewTask('')
  }

  const options = [
    {
      label: "Education",
      value: "education",
      key: 0
    },
    {
      label: "Recreational",
      value: "recreational",
      key: 1
    },
    {
      label: "Social",
      value: "social",
      key: 2
    },
    {
      label: "DIY",
      value: "diy",
      key: 3
    },
    {
      label: "Charity",
      value: "charity",
      key: 4
    },
    {
      label: "Cooking",
      value: "cooking",
      key: 5
    },
    {
      label: "Relaxation",
      value: "relaxation",
      key: 6
    },
    {
      label: "Music",
      value: "music",
      key: 7
    },
    {
      label: "Busywork",
      value: "busywork",
      key: 8
    },
  ];

  const handleChange = (e) => {
    setType(e.target.value)
  }

  return (
    <div>
      <form onSubmit={generateActivity}>
        <label>Choose an activity:</label>
        <select value={type} onChange={handleChange}>
          {options.map((option) => (
            <option value={option.value} key={option.key}>{option.label}</option>
          ))}
      </select>
      <button type="submit">Find Activity</button>
    </form>
      
      <GeneratedActivity />
      <button type="button" onClick={addTask}>AddTask</button>
    </div>
      
  )
}

export default AddTask