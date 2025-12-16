import React, { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "../components/JobCard";
import SearchBar from "../components/SearchBar";

function Home() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Replace this URL with a real job API later
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => setJobs(res.data.slice(0, 20)))
      .catch(err => console.log(err));
  }, []);

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <SearchBar setSearch={setSearch} />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredJobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default Home;
