import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect, useState } from "react";

const App=()=>{
const[popUp,setPopUp]=useState(false)

const handlePopUp=()=>{
  setPopUp(!popUp)
}

  useEffect(()=>{
  AOS.init({
    offset:100,duration:800,
    easinng:"ease-in-sine",
    delay:100,
  });
  AOS.refresh();
  },[]);

  return(
    <div className="bg-blue-300 dark:bg-gray-900ndark:text-white duration-200">
      all
    </div>
  )
} 
export default App;