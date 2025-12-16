import React from "react";

function JobCard({ job, saved }) {
  const saveJob = () => {
    let savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
    savedJobs.push(job);
    localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
    alert("Job Saved!");
  };

  return (
    <div className="bg-white p-4 rounded shadow flex flex-col justify-between">
      <h4 className="font-bold mb-2">{job.title}</h4>
      <p className="text-gray-700 mb-2">{job.body}</p>
      {!saved && (
        <button
          onClick={saveJob}
          className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
        >
          Save Job
        </button>
      )}
    </div>
  );
}

export default JobCard;
