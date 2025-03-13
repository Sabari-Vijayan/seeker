"use client";

import { useEffect, useState, useRef } from "react";

const mockJobs = (page: number) => {
  return Array.from({ length: 5 }, (_, i) => ({
    id: page * 5 + i,
    title: `Job Title ${page * 5 + i}`,
    company: `Company ${page * 5 + i}`,
    location: "Remote",
    description: "This is a mock job listing.",
  }));
};

const JobFeed = () => {
  const [jobs, setJobs] = useState(mockJobs(0));
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastJobRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setLoading(true);
          setTimeout(() => {
            setJobs((prevJobs) => [...prevJobs, ...mockJobs(page)]);
            setPage((prevPage) => prevPage + 1);
            setLoading(false);
          }, 1000); // Simulated API delay
        }
      },
      { threshold: 1.0 }
    );

    if (lastJobRef.current) {
      observerRef.current.observe(lastJobRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [jobs, loading, page]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Job Listings</h2>
      <div className="space-y-4">
        {jobs.map((job, index) => (
          <div
            key={job.id}
            ref={index === jobs.length - 1 ? lastJobRef : null}
            className="p-4 border rounded shadow"
          >
            <h3 className="text-lg font-semibold">{job.title}</h3>
            <p className="text-gray-600">{job.company} - {job.location}</p>
            <p className="text-sm">{job.description}</p>
          </div>
        ))}
      </div>
      {loading && <p className="text-center mt-4">Loading more jobs...</p>}
    </div>
  );
};

export default JobFeed;
