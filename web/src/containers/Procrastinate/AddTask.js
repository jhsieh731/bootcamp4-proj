import React, { useState } from 'react'
import { GET_ACTIVITIES } from './graphql'
import { NoiceForm, AddActButton, FindButton, GoodSelect, ActivityDiv, DecentDiv, NiceSlectClass } from './styles'

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

const AddTask = ({ onAddTask, user_id }) => {
  const [newTask, setNewTask] = useState('')
  const [type, setType] = useState('education')

  const generateActivity = (e) => {
    e.preventDefault()
    setNewTask("loading...")
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

  const handleChange = (e) => {
    setType(e.target.value)
  }

  return (
    <DecentDiv>
      <NoiceForm onSubmit={generateActivity}>
        <NiceSlectClass>
        <GoodSelect value={type} onChange={handleChange}>
          {options.map((option) => (
            <option value={option.value} key={option.key}>{option.label}</option>
          ))}
        </GoodSelect>
        </NiceSlectClass>
        <FindButton type="submit">Find Activity</FindButton>
      </NoiceForm>
      <ActivityDiv>
        <GeneratedActivity />
      </ActivityDiv>
      <AddActButton type="button" onClick={addTask}>Add Activity</AddActButton>
    </DecentDiv>      
  )
}

export default AddTask