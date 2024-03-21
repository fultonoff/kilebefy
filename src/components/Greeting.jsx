export const Greeting = ()=>{
    const now = new Date().getHours()
  console.log(now);
  
  let timeOfDay;
  if (now < 12) {
    timeOfDay = 'Good Morning';
  } else if (now < 18) {
    timeOfDay = 'Good Afternoon';
  } else {
    timeOfDay = 'Good Evening';
  }
  
  return timeOfDay
  }
  