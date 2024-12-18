import { useLoaderData } from "react-router-dom";

const JobDetails=()=>{
  const job=useLoaderData();
  console.log(job);
  return(
    <div>
      <h2 className="text-3xl">{job.title}</h2>
      <p>{job.company}</p>
      <p>{job.applicationDeadline}</p>
      <button className="btn btn-primary">Apply Now</button>
    </div>
  );
}
export default JobDetails;