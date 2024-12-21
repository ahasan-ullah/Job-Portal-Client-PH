import { useLoaderData } from "react-router-dom";

const ViewApplications = () => {
  const handleStatusUpdate=(e,id)=>{
    const data={
      status: e.target.value
    }
    console.log(id)
    fetch(`https://job-portal-server-p2m3achpu-ahasan-ullahs-projects.vercel.app/job-application/${id}`,{
      method: 'PATCH',
      headers: {
        'content-type': 'applications/json'
      },
      body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>console.log(data));
  }
  const applications = useLoaderData();
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Email</th>
            <th>Status</th>
            <th>Update Status</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((job, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{job.applicant_email}</td>
              <td>{job.applicationDeadline}</td>
              <td>
                <select 
                onChange={(e)=>handleStatusUpdate(e,job._id)}
                defaultValue={job.status||"Change Status"}
                className="select select-bordered select-xs w-full max-w-xs">
                  <option disabled>
                    Change Status
                  </option>
                  <option>Under Review</option>
                  <option>Set Interview</option>
                  <option>Hired</option>
                  <option>Rejected</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ViewApplications;
