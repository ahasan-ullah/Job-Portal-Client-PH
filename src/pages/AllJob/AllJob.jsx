import { useState } from "react";
import useJobs from "../../hooks/useJobs";
import HotJobCard from "../Home/HotJobCard";
import { BiSearch } from "react-icons/bi";

const AllJob = () => {
  const [sort,setSort]=useState(false);
  const [search,setSearch]=useState("");
  const {jobs,loading}=useJobs(sort,search);
  if(loading){
    return <h2>Data Loading</h2>
  }
  return (
    <div>
      <h1 className="py-5 text-4xl font-bold text-center">All Jobs</h1>
      <div className="w-11/12 mx-auto bg-base-200 py-5 p-3 flex items-center space-x-5">
        <button onClick={()=>{setSort(!sort)}} className={`btn btn-neutral ${sort && "btn-success"}`}>
          {
            sort===true?'Sorted By Salary':'Sort By Salary'
          }
        </button>
        <BiSearch className="text-4xl"></BiSearch>
        <input className="input w-full max-w-2xl" type="text" placeholder="Serach Jobs By Location"/>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8">
        {
          jobs.map(job=><HotJobCard key={job._id} job={job}></HotJobCard>)
        }
      </div>
    </div>
  );
};

export default AllJob;