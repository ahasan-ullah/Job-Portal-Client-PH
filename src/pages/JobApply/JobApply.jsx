import { useParams } from "react-router-dom";

const JobApply = () => {
  const { id } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;

    console.log(linkedin, github, resume);
  };
  return (
    <div className="card bg-base-100 w-full max-w-lg mx-auto my-8">
      <h1 className="text-5xl font-bold text-center">
        Apply Job and Good Luck!
      </h1>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">LinkedIn URL</span>
          </label>
          <input
            name="linkedin"
            type="url"
            placeholder="LinkedIn URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Github URL</span>
          </label>
          <input
            name="github"
            type="url"
            placeholder="Github URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume URL</span>
          </label>
          <input
            name="resume"
            type="url"
            placeholder="Resume URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Apply</button>
        </div>
      </form>
    </div>
  );
};
export default JobApply;
