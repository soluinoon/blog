import React from 'react';
import { useNavigator } from './NavigatorContext';
import '../css/Navigator.css';

export default function Navigator() {
  const { setSelectedItem } = useNavigator();

  const handleClick = (itemName) => {
	console.log(itemName);
    setSelectedItem(itemName);
  };

  return (
    <div className="navigator">
      <h1>My Blog</h1>
      <nav>
        <NavItem itemName="Tech" handleClick={handleClick} />
        <NavItem itemName="Book" handleClick={handleClick} />
        <NavItem itemName="Life" handleClick={handleClick} />
        <NavItem itemName="Portfolio" handleClick={handleClick} />
      </nav>
    </div>
  );
}

function NavItem({ itemName, handleClick }) {
  return (
    <a
      onClick={() => handleClick(itemName)}
    >
      {itemName}
    </a>
  );
}
