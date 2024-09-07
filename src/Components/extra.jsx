import React, { useState } from 'react';
import Layout from './Layout';
import { TextField, Button, InputAdornment, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Jobs = () => {
  const [input, setInput] = useState({
    job: '',
    company: '',
    location: ''
  });
  
  const [filters, setFilters] = useState({
    relevance: '',
    jobType: '',
    experience: ''
  });

  const [filteredJobs, setFilteredJobs] = useState([]); // To store filtered job results
  
  // Mock data for jobs
  const jobs = [
    { id: 1, title: 'Software Engineer', company: 'Tech Corp', location: 'New York', jobType: 'Full-time', experience: 2 },
    { id: 2, title: 'Frontend Developer', company: 'Code Works', location: 'San Francisco', jobType: 'Part-time', experience: 1 },
    { id: 3, title: 'Backend Developer', company: 'Server Masters', location: 'Chicago', jobType: 'Full-time', experience: 3 },
    { id: 4, title: 'React Developer', company: 'DevSolutions', location: 'New York', jobType: 'Full-time', experience: 2 },
    // Add more job data
  ];

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const handleClearAll = () => {
    setFilters({
      relevance: '',
      jobType: '',
      experience: ''
    });
  };

  // Handle search form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Filter the jobs based on search inputs and filters
    const results = jobs.filter((job) => {
      const matchesJob = input.job === '' || job.title.toLowerCase().includes(input.job.toLowerCase());
      const matchesCompany = input.company === '' || job.company.toLowerCase().includes(input.company.toLowerCase());
      const matchesLocation = input.location === '' || job.location.toLowerCase().includes(input.location.toLowerCase());
      const matchesJobType = filters.jobType === '' || job.jobType === filters.jobType;
      const matchesExperience = filters.experience === '' || job.experience === parseInt(filters.experience);

      return matchesJob && matchesCompany && matchesLocation && matchesJobType && matchesExperience;
    });

    setFilteredJobs(results); // Update the filteredJobs state with the results
  };

  return (
    <Layout>
      <div className='job-container'>
        <form onSubmit={handleSubmit}>
          <div className='card'>
            <div className='text-field-container'>
              <TextField
                id="outlined-basic1"
                label="Search Job here"
                variant="outlined"
                name='job'
                value={input.job}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                id="outlined-basic2"
                label="Search by company"
                variant="outlined"
                name='company'
                value={input.company}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <HomeIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                id="outlined-basic3"
                label="Search by location"
                variant="outlined"
                name='location'
                value={input.location}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOnIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Button variant="contained" type='submit'> Search</Button>
            </div>
          </div>
        </form>

        {/* Filter section */}

        
        <div className='card-2'>
          <div className='sort-container'>
            <label>Sort by</label>
            <FormControl>
              <InputLabel>Relevance</InputLabel>
              <Select
                name='relevance'
                value={filters.relevance}
                onChange={handleFilterChange}
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="Ten">Ten</MenuItem>
                <MenuItem value="Twenty">Twenty</MenuItem>
                <MenuItem value="Thirty">Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className='sort-container'>
            <FormControl>
              <InputLabel>Job Type</InputLabel>
              <Select
                name="jobType"
                value={filters.jobType}
                onChange={handleFilterChange}
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="Full-time">Full-time</MenuItem>
                <MenuItem value="Part-time">Part-time</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className='sort-container'>
            <FormControl>
              <InputLabel>Experience</InputLabel>
              <Select
                name='experience'
                value={filters.experience}
                onChange={handleFilterChange}
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="0">Freshers</MenuItem>
                <MenuItem value="1">1 Year</MenuItem>
                <MenuItem value="2">2 Years</MenuItem>
                <MenuItem value="3">3 Years</MenuItem>
                <MenuItem value="4">4 Years</MenuItem>
                <MenuItem value="5">5 Years</MenuItem>
                <MenuItem value="5+">5+ Years</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Button variant="contained" onClick={handleClearAll}>Clear All</Button>
        </div>

        {/* Display filtered jobs */}
        <div className='job-show-container'>
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div className='job-show' key={job.id}>
                <Card sx={{ width: 300 }}>
                  <CardContent>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                      {job.company}
                    </Typography>
                    <Typography variant="h5" component="div">
                      {job.title}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{job.location}</Typography>
                    <Typography variant="body2">
                      {`${job.experience} years experience`}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </div>
            ))
          ) : (
            <Typography>No jobs found matching the criteria</Typography>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Jobs;



// for cancel 
<div>
  <TextField
    id="outlined-basic1"
    label="Search Job here"
    variant="outlined"
    name="job"
    value={input.job}
    onChange={handleChange}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      ),
      endAdornment: (
        <InputAdornment position="end">
          {/* Button to clear input field */}
          <button
            className="chng-btn"
            type="button" // Set the button type to prevent form submission
            onClick={() => setInput({ ...input, job: '' })} // Clear the 'job' field
            style={{
              background: 'none', // Remove default button background
              border: 'none', // Remove default button border
              cursor: 'pointer' // Add pointer cursor for better UX
            }}
          >
            <CancelIcon />
          </button>
        </InputAdornment>
      )
    }}
  />
</div>

import React, { useState } from 'react';
import Layout from './Layout';
import { TextField, Button, InputAdornment, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Jobs = () => {
  // State for job inputs and filters
  const [input, setInput] = useState({
    job: '',
    company: '',
    location: ''
  });

  const [filters, setFilters] = useState({
    relevance: '',
    jobType: '',
    experience: ''
  });

  // Sample job data
  const [jobs] = useState([
    { id: 1, title: 'Software Engineer', company: 'Tech Corp', location: 'New York', experience: '2', type: 'Full-time' },
    { id: 2, title: 'Frontend Developer', company: 'Dev Solutions', location: 'San Francisco', experience: '1', type: 'Part-time' },
    { id: 3, title: 'Backend Developer', company: 'Tech Hub', location: 'Austin', experience: '3', type: 'Full-time' },
    { id: 4, title: 'UI/UX Designer', company: 'Design Pro', location: 'Los Angeles', experience: '0', type: 'Part-time' },
    // Add more job data here
  ]);

  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filterJobs();
  };

  // Filter job cards based on input and filters
  const filterJobs = () => {
    let filtered = jobs.filter(job => {
      return (
        (input.job === '' || job.title.toLowerCase().includes(input.job.toLowerCase())) &&
        (input.company === '' || job.company.toLowerCase().includes(input.company.toLowerCase())) &&
        (input.location === '' || job.location.toLowerCase().includes(input.location.toLowerCase())) &&
        (filters.relevance === '' || job.title.includes(filters.relevance)) && // Placeholder for relevance logic
        (filters.jobType === '' || job.type === filters.jobType) &&
        (filters.experience === '' || job.experience === filters.experience)
      );
    });
    setFilteredJobs(filtered);
  };

  const handleClearAll = () => {
    setFilters({
      relevance: '',
      jobType: '',
      experience: ''
    });
    setFilteredJobs(jobs); // Reset to all jobs when filters are cleared
  };

  return (
    <Layout>
      <div className="job-container">
        <form onSubmit={handleSubmit}>
          <div className="card">
            <div className="text-field-container">
              <div>
                <TextField
                  id="outlined-basic1"
                  label="Search Job here"
                  variant="outlined"
                  name="job"
                  value={input.job}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <CancelIcon className="chng-btn" onClick={() => setInput({ ...input, job: '' })} />
                      </InputAdornment>
                    )
                  }}
                />
              </div>
              <div>
                <TextField
                  id="outlined-basic2"
                  label="Search by company"
                  variant="outlined"
                  name="company"
                  value={input.company}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <HomeIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <CancelIcon className="chng-btn" onClick={() => setInput({ ...input, company: '' })} />
                      </InputAdornment>
                    )
                  }}
                />
              </div>
              <div>
                <TextField
                  id="outlined-basic3"
                  label="Search by location"
                  variant="outlined"
                  name="location"
                  value={input.location}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <CancelIcon className="chng-btn" onClick={() => setInput({ ...input, location: '' })} />
                      </InputAdornment>
                    )
                  }}
                />
              </div>
              <Button variant="contained" type="submit">Search</Button>
            </div>
          </div>
        </form>
      </div>

      {/* Filters Section */}
      <div className="card-2">
        <div className="sort-container">
          <label>Sort by</label>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Relevance</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Relevance"
              name="relevance"
              value={filters.relevance}
              onChange={handleFilterChange}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="High">High</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="sort-container">
          <label>Job Type</label>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Job Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Job Type"
              name="jobType"
              value={filters.jobType}
              onChange={handleFilterChange}
            >
              <MenuItem value="Full-time">Full-time</MenuItem>
              <MenuItem value="Part-time">Part-time</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="sort-container">
          <label>Select Experience</label>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Experience</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Experience"
              name="experience"
              value={filters.experience}
              onChange={handleFilterChange}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="0">Fresher</MenuItem>
              <MenuItem value="1">1 Year</MenuItem>
              <MenuItem value="2">2 Years</MenuItem>
              <MenuItem value="3">3 Years</MenuItem>
            </Select>
          </FormControl>
        </div>

        <Button className="clear-button" variant="contained" onClick={handleClearAll}>
          Clear All
        </Button>
      </div>

      {/* Display Job Cards */}
      <div className="job-show-container">
        {filteredJobs.map((job) => (
          <div className="job-show" key={job.id}>
            <Card sx={{ width: 300 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {job.title}
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                  {job.company} - {job.location}
                </Typography>
                <Typography variant="body2">
                  {job.experience} Years Experience - {job.type}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Jobs;



