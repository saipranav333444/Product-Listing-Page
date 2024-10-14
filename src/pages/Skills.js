// src/components/TechnicalOverview.js
import React from 'react';
import './Skills.css'; // Optional: Add custom styles for this component
import Footer from './Footer';
import Layout from './Layout';

const Skills = () => {
  const skills = [
    {
      title: 'React Hooks',
      description: 'Utilized useState and useEffect for managing local state and handling side effects.',
    },
    {
      title: 'React Router',
      description: 'Implemented dynamic navigation between components and used useNavigate for programmatic routing.',
    },
    {
      title: 'Asynchronous Data Fetching',
      description: 'Used the Fetch API to retrieve data asynchronously from external sources using async/await.',
    },
    {
      title: 'State Management',
      description: 'Filtered products based on user input and selection, managing multiple states to reflect interactions.',
    },
    {
      title: 'Conditional Rendering',
      description: 'Displayed content based on user authentication status, showing product listings or a sign-in prompt.',
    },
    {
      title: 'Event Handling',
      description: 'Implemented event handlers for user interactions like form submissions and button clicks.',
    },
    {
      title: 'Pagination',
      description: 'Managed pagination logic to display a limited number of products per page.',
    },
    {
      title: 'Responsive Design',
      description: 'Ensured the layout adapts to various screen sizes for an optimal user experience.',
    },
    {
      title: 'CSS Styling',
      description: 'Applied CSS for styling components, maintaining a visually appealing interface.',
    },
    {
      title: 'Local Storage',
      description: 'Utilized local storage to manage user authentication state and store credentials.',
    },
  ];

  return (
    <>
    <Layout/>
    <div className="technical-overview">
      
      <h2>SKILLS</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </li>
        ))}
      </ul>
      <Footer/>
    </div>
    </>
    
  );
};

export default Skills;
