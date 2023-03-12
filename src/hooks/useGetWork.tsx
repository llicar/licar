import { WorkTypes } from "../data/works";
import worksData from "../data/works"
import { useEffect, useState } from "react";

function useGetWork(workName?:string) {

    const [work,setWork] = useState<WorkTypes>()

   useEffect(()=>{
    const foundWork = worksData.find(work => work.name === workName)
    if (foundWork) {
        setWork(foundWork)
    } 
   },[workName])

    return work
 
}

export default useGetWork;