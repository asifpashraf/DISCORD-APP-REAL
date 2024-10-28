import React, { useState } from 'react';
import './FamilyCenter.css';
import FamilyCenterHeader from './FamilyCenterHeader';
import FamilyCenterBody1 from './FamilyCenterBodyOne';
import FamilyCenterBody2 from './FamilyCenterBodyTwo';  // Uncomment when needed
import FamilyCenterBody3 from './FamilyCenterBodyThree'; // Uncomment when needed
import Esc from './Esc';

const FamilyCenterMain = () => {
  // State to track the active component
  const [activeComponent, setActiveComponent] = useState('body1');

  // Function to handle the menu click
  const handleMenuClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className='contuiner'>
      <Esc/>
      {/* Pass the handleMenuClick function to FamilyCenterHeader */}
      <FamilyCenterHeader handleMenuClick={handleMenuClick} />

      {/* Conditionally render components based on the activeComponent state */}
      {activeComponent === 'body1' && <FamilyCenterBody1 />}
      {/* Uncomment the following as needed */}
      {activeComponent === 'body2' && <FamilyCenterBody2 />}
      {activeComponent === 'body3' && <FamilyCenterBody3 />}
    </div>
  );
}
export default FamilyCenterMain;
