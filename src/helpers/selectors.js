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