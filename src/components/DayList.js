import React from "react";
import DayListItem from "components/DayListItem"
export default function DayList(props) {
  const daysAvailable = props.days.map((day) => {
    return(
    <li>
      <DayListItem 
      name={day.name} 
      spots={day.spots} 
      selected={day.name === props.day}
      setDay={props.setDay}  />
    </li>
    )
  })
  return (
    <ul>
      {daysAvailable}
    </ul>
  )
}