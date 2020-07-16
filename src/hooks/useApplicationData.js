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
    
    return axios.put(`/api/appointments/${id}`, appointment)
      .then(() => setState({
        ...state,
        appointments
      })
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
    return axios.delete(`/api/appointments/${id}`)
      .then(() => setState({
        ...state,
        appointments
      })
    );
  }
  return {state, setState, setDay, bookInterview, cancelInterview}
}