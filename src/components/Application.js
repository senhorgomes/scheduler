import React, { useState, useEffect } from "react";
import DayList from "components/DayList"
import "components/Application.scss";
import Appointment from "components/Appointment/index";
import axios from "axios";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "../helpers/selectors";

export default function Application(props) {
  //const setDays = days => setState(prev => ({ ...prev, days }));
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });

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
    axios.put(`/api/appointments/${id}`, appointment);
    setState({
      ...state,
      appointments
    });
    console.log(id, interview);
  }

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ])
    .then((response) => {setState({ days: response[0].data, appointments: response[1].data, interviewers: response[2].data})
  })
}, [])
  const appointments = getAppointmentsForDay(state, state.day);
  const interviewers = getInterviewersForDay(state, state.day);
  const scheduler = appointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);
    console.log(interviewers);
    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
        interviewers={interviewers}
        bookInterview={bookInterview}
      />
    )
  })
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            day={state.day}
            setDay={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {scheduler}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
