import React from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Card2 = ({ title, company, location, type, experience, mode, skills, description, postedOn }) => {
    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff(postedOn, 'day');

    return (
        <div className='job-show-container'>
            <div className='job-show'>
                <h1>{title}</h1>
                <h5>{company} - {location}</h5>
                <p>{type} {experience} {mode}</p>
                <div className="skills-container">
                    {skills.map((skill, index) => (
                        <div className="skill-box" key={index}>
                            {skill}
                        </div>
                    ))}
                </div>
                <h4>{description}</h4>
                <p>Posted: {diffInDays} days ago</p>
                <Link to="login">
                    <button>Apply</button>
                </Link>
            </div>
        </div>
    );
};

export default Card2;
