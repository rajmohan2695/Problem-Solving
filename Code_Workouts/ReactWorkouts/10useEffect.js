useEffect(()=>{
    console.log("Executing useEffect inside cockpit");
    setTimeout(() => {
      console.log("API called from cockpit")
    },1000)
  })

//useEffect with return statement
useEffect(()=>{
    console.log("Executing useEffect inside cockpit");
    const timer = setTimeout(() => {
      console.log("API called from cockpit")
    },1000)
    return () => {
      clearTimeout(timer);
    }
  })