import { Link, useLoaderData } from "react-router-dom";

const JobDetails=()=>{
  const job=useLoaderData();
  return(
    <div>
      <h2 className="text-3xl">{job.title}</h2>
      <p>{job.company}</p>
      <p>{job.applicationDeadline}</p>
      <Link to={`/jobApply/${job._id}`} className="btn btn-primary">Apply Now</Link>
    </div>
  );
}
export default JobDetails;