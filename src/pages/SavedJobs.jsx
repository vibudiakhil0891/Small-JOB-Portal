import React, { useEffect, useState } from "react";
import JobCard from "../components/JobCard";

function SavedJobs() {
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    const jobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
    setSavedJobs(jobs);
  }, []);

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <h3 className="text-xl font-bold mb-4">Saved Jobs</h3>
      {savedJobs.length === 0 && <p>No saved jobs.</p>}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {savedJobs.map(job => (
          <JobCard key={job.id} job={job} saved />
        ))}
      </div>
    </div>
  );
}

export default SavedJobs;
