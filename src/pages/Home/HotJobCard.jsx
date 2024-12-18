import { FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
  return (
    <div className="card card-compact bg-base-200">
      <div className="flex gap-2 m-2">
        <figure>
          <img className="w-[52px]" src={job.company_logo} alt="Shoes" />
        </figure>
        <div>
          <h4 className="text-2xl">{job.company}</h4>
          <p className="flex gap-1 items-center">
            <FaMapMarkerAlt></FaMapMarkerAlt>
            {job.location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {job.title}
          <div className="badge badge-error ">NEW</div>
        </h2>
        <p>{job.description}</p>
        <div className="flex gap-2 flex-wrap p-1">
          {
            job.requirements.map((skill,index)=><p key={index} className="border rounded-lg text-center hover:text-purple-600 cursor-pointer hover:bg-gray-200">{skill}</p>)
          }
        </div>
        <div className="card-actions justify-end items-center">
          <p className="flex items-center">Salary: <FaDollarSign></FaDollarSign> {job.salaryRange.min}-{job.salaryRange.max} {job.salaryRange.currency}</p>
          <Link to={`jobs/${job._id}`} className="btn btn-primary">Apply</Link>
        </div>
      </div>
    </div>
  );
};
export default HotJobCard;
