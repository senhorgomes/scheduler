export function getAppointmentsForDay(state, day) {
  const filteredDays = state.days.filter(weekday => {
    return weekday.name === day;
  });
  
  if (filteredDays.length === 0) {
    return [];
  }
  const appointmentsMap = filteredDays[0].appointments.map((appointment) => {
    return state.appointments[appointment];
  })

  return appointmentsMap;
}