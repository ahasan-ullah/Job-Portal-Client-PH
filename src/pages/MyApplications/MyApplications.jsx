import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyApplications=()=>{
  const {user}=useAuth();
  const [jobs,setJobs]=useState([])
  useEffect(()=>{
    fetch(`http://localhost:5000/job-application?email=${user.email}`)
    .then(res=>res.json())
    .then(data=>setJobs(data));
  },[user.email]);
  return(
    <div>
      <h1>{jobs.length}</h1>
    </div>
  );
}
export default MyApplications;