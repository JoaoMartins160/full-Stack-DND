import { useState, useEffect } from "react";

const URL = `https://www.dnd5eapi.co/api`

function Useapi() {
    const [context, setcontext] = useState(0)

    useEffect(() =>{
        const fetchData = async () => {
            const result = await fetch(URL)
        }
    })

    return(

    ); 
  }
  
  export default Useapi;