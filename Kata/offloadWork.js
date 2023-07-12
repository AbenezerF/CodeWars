// Offload your work! (7Kyu)


function workNeeded(projectMinutes, freelancers){
  let countMins = freelancers.reduce((acc,[hour, minutes]) => acc + hour * 60 + minutes, 0)
  let remainingHours = Math.floor((projectMinutes - countMins) / 60)
  let remainingMin = (projectMinutes - countMins) % 60
  return projectMinutes - countMins <= 0 ? "Easy Money!" : `I need to work ${remainingHours} hour(s) and ${remainingMin} minute(s)`
}
