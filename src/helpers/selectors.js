export function getAppointmentsForDay(state, day) {
  //Runs through scheduled days
  const filteredDays = state.days.filter(weekday => {
    return weekday.name === day;
  });
  //If an empty array is passed through the filter, it will return an empty one
  if (filteredDays.length === 0) {
    return [];
  }
  //This will run through the appointments of the days, through the appointments obj, and return a new array 
  const appointmentsMap = filteredDays[0].appointments.map((appointment) => {
    return state.appointments[appointment];
  })

  return appointmentsMap;
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  console.log(`this is getInterview ${JSON.stringify(state)}`);
  const newInterview = {
    "student": interview.student,
    "interviewer": state.interviewers[interview.interviewer]
  }
  return newInterview;
  //obtain the object above and place it interview.interviewer
}