import React, { useState, useEffect } from 'react';
import { TextField, Button, InputAdornment, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Card2 from './Card2 '
import JobData from './JobDummyData';

const Jobs = () => {
  const [input, setInput] = useState({
    job: '',
    company: '',
    location: ''
  });

  const [filteredJobs, setFilteredJobs] = useState(JobData);  // Show all jobs by default

  const [filters, setFilters] = useState({
    relevance: '',
    jobType: '',
    experience: ''
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent page reload

    const filtered = JobData.filter((job) => {
      const isTitleMatch = input.job ? job.title.toLowerCase().includes(input.job.toLowerCase()) : true;
      const isCompanyMatch = input.company ? job.company.toLowerCase().includes(input.company.toLowerCase()) : true;
      const isLocationMatch = input.location ? job.location.toLowerCase().includes(input.location.toLowerCase()) : true;
      const isJobTypeMatch = filters.jobType ? job.type.toLowerCase() === filters.jobType.toLowerCase() : true;
      const isExperienceMatch = filters.experience ? job.experience === filters.experience : true;

      return isTitleMatch && isCompanyMatch && isLocationMatch && isJobTypeMatch && isExperienceMatch;
    });

    setFilteredJobs(filtered); // Update filtered jobs
  };

  const handleClearAll = () => {
    setInput({
      job: '',
      company: '',
      location: ''
    });

    setFilters({
      relevance: '',
      jobType: '',
      experience: ''
    });

    setFilteredJobs(JobData);  // Reset to show all jobs again
  };

  return (
    <>
      <div className='job-container'>
        <div className="job-header">
          <h1>Your ideal job awaits, start the search</h1>
          <p>Get the latest job openings that best suit you!</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='card'>
            <div className='text-field-container'>
              <div>
                <TextField
                  label="Search Job here"
                  variant="outlined"
                  name='job'
                  value={input.job}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon style={{ color: "black" }} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <button
                          className='chng-btn'
                          type='button'
                          onClick={() => setInput({ ...input, job: '' })}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: 'black'
                          }}
                        >
                          <CancelIcon />
                        </button>
                      </InputAdornment>
                    )
                  }}
                />
              </div>

              <div>
                <TextField
                  label="Search by company"
                  variant="outlined"
                  name='company'
                  value={input.company}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <HomeIcon style={{ color: "black" }} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <button
                          className='chng-btn'
                          type='button'
                          onClick={() => setInput({ ...input, company: '' })}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: 'black'
                          }}
                        >
                          <CancelIcon />
                        </button>
                      </InputAdornment>
                    )
                  }}
                />
              </div>

              <div>
                <TextField
                  label="Search by location"
                  variant="outlined"
                  name='location'
                  value={input.location}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnIcon style={{ color: "black" }} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <button
                          className='chng-btn'
                          type='button'
                          onClick={() => setInput({ ...input, location: '' })}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: 'black'
                          }}
                        >
                          <CancelIcon />
                        </button>
                      </InputAdornment>
                    )
                  }}
                />
              </div>

              <Button variant="contained" type='submit'> Search</Button>
            </div>
          </div>
        </form>

      
        {/* Display filtered jobs */}
       
      </div>
       <div>
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <Card2 key={job.id} {...job} />  // Display each filtered job using Card2 component
            ))
          ) : (
            <p>No jobs found matching your search.</p>
          )}
        </div>
    </>
  );
};

export default Jobs;
