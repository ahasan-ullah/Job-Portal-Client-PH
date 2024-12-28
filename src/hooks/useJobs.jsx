import axios from "axios";
import { useEffect, useState } from "react";

const useJobs=(sort,search,minSalary,maxSalary)=>{
  const [jobs,setJobs]=useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    axios.get(`http://localhost:5000/jobs?sort=${sort}&search=${search}&min=${minSalary}&max=${maxSalary}`)
    .then(res=>{
      setJobs(res.data);
      setLoading(false);
    })
  },[sort,search,minSalary,maxSalary])
  return {jobs,loading};
}
export default useJobs;