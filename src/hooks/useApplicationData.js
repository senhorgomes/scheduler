import { useState } from "react";  
import axios from "axios";
export default function useAplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });

  //Function to select and set day
  const setDay = day => setState({ ...state, day });

  //Retreiving days from api/days and storing them using useState
  // const [days, setDay] = useState([]);
  const bookInterview = (id, interview) => {

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    const newState = {...state, appointments}
    const newDays = newState.days.map(day => {
      let newSpots = 0
      const appointmentsForDay = day.appointments
      for (let appointmentId of appointmentsForDay) {
        const appointment = newState.appointments[appointmentId]
        if (appointment.interview === null) {
          newSpots++
        }
      }
      return {...day, spots: newSpots}
    })
    const finalState = {...newState, days: newDays}

    return axios.put(`/api/appointments/${id}`, appointment)
      .then(() => setState(
        finalState
      )
    );
  }
  //Deletes interview by setting the interview to null
  const cancelInterview = (id) => {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    const newState = {...state, appointments}
    const newDays = newState.days.map(day => {
      let newSpots = 0
      const appointmentsForDay = day.appointments
      for (let appointmentId of appointmentsForDay) {
        const appointment = newState.appointments[appointmentId]
        if (appointment.interview === null) {
          newSpots++
        }
      }
      return {...day, spots: newSpots}
    })
    const finalState = {...newState, days: newDays}
    return axios.delete(`/api/appointments/${id}`)
      .then(() => setState(
        finalState
      )
    );
  }
  return {state, setState, setDay, bookInterview, cancelInterview}
}