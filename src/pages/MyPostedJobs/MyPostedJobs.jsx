import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const MyPostedJobs = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch(`https://job-portal-server-p2m3achpu-ahasan-ullahs-projects.vercel.app/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user.email]);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Job Title</th>
            <th>Deadline</th>
            <th>Application Count</th>
            <th>Applications</th>
          </tr>
        </thead>
        <tbody>
          {
            jobs.map((job,index) => 
              <tr key={index}>
                <th>{index+1}</th>
                <td>{job.title}</td>
                <td>{job.applicationDeadline}</td>
                <td>{job.applicationCount}</td>
                <td><Link to={`/viewApplications/${job._id}`} className="btn btn-link">View Application</Link></td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
};
export default MyPostedJobs;
