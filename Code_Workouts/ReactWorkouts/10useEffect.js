//useEffect without parameters
useEffect(()=>{
    console.log("Executing useEffect inside cockpit");
    setTimeout(() => {
        console.log("API called from cockpit")
    },1000)
})            // No parameters passed, So it will execute on every render ( componentDidMount + componentDidUpdate )

// useEffect with empty square brackets  
useEffect(()=>{
    console.log("Executing useEffect inside cockpit");
    setTimeout(() => {
        console.log("API called from cockpit")
    },1000)
},[])           // Empty parameters passed, So it will execute only on the first render ( componentDidMount )

// useEffect with arguments as array
useEffect(()=>{
    console.log("Executing useEffect inside cockpit");
    setTimeout(() => {
        console.log("API called from cockpit")
    },1000)
},[props.value, currentValue])  // Array of values. So it will execute only on the first render and all the time when the values inside the array changes ( componentShouldUpdate )

//useEffect with return statement
/* return statement inside useEffect takes care of cleanup process for the component. It can be used as componentWillUnmount */
useEffect(()=>{
    console.log("Executing useEffect inside cockpit");
    const timer = setTimeout(() => {
      console.log("API called from cockpit")
    },1000)
    return () => {
      clearTimeout(timer);          // This cleanup progress executes on all the renders
    }
})

// useEffect with empty square brackets
useEffect(()=>{
    console.log("Executing useEffect inside cockpit");
    const timer = setTimeout(() => {
      console.log("API called from cockpit")
    },1000)
    return () => {
      clearTimeout(timer);          // This cleanup progress executes on the first render and the componentWillUnmount
    }
}, [])

// useEffect with parameters passed as array
useEffect(()=>{
    console.log("Executing useEffect inside cockpit");
    const timer = setTimeout(() => {
      console.log("API called from cockpit")
    },1000)
    return () => {
      clearTimeout(timer);          // This cleanup progress executes only for the values in the array changes
    }
}, [props.value, currentValue])
