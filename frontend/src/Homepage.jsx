import React from 'react';
import './Homepage.css';

import Navbar from './components/Navbar';
import { useNavigate } from 'react-router-dom';

const Circle = ({ text, icon, link, navigate }) => (
  <div className="circle" onClick={() => navigate(link)}>
    <svg width="300" height="300">
      <circle cx="150" cy="150" r="150" fill="rgb(28,117,188)" />
      <text
        x="150"
        y="150"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#fff"
        fontSize="30"
      >
        {text}
      </text>
      <image x="120" y="175" width="60" height="60" xlinkHref={icon} />
    </svg>
  </div>
);

const Homepage = () => {
  const navItems = [
    { text: 'Home', icon: 'home.svg', link: '/' },
    { text: 'Newsletter', icon: 'news.svg', link: '/newsletter' },
    { text: 'Training', icon: 'board.svg', link: '/training' },
    { text: 'Messages', icon: 'messages.svg', link: '/messages' },
    { text: 'Feedback', icon: 'notepad.svg', link: '/feedback' },
    { text: 'Leaderboard', icon: 'leaderboard.svg', link: '/leaderboard' }
  ];

  const navigate = useNavigate(); // Initialize the useHistory hook

  return (
    <>
      <Navbar />
      <div id="circleDiv">
        <div id="row1">
        
        <div>
        <Circle
          key={1} // You can use a constant key since there's only one item
          text={navItems[1].text}
          icon={navItems[1].icon}
          link={navItems[1].link}
          navigate={navigate}
        />
        </div>
        <div>
        <Circle
          key={2} // You can use a constant key since there's only one item
          text={navItems[2].text}
          icon={navItems[2].icon}
          link={navItems[2].link}
          navigate={navigate}
        />
        </div>
        </div>
        <div id="row2">
        <div>
        <Circle
          key={3} // You can use a constant key since there's only one item
          text={navItems[3].text}
          icon={navItems[3].icon}
          link={navItems[3].link}
          navigate={navigate}
        />
        </div>
        <div>
        <Circle
          key={4} // You can use a constant key since there's only one item
          text={navItems[4].text}
          icon={navItems[4].icon}
          link={navItems[4].link}
          navigate={navigate}
        />
        </div>
        <div>
        <Circle
          key={5} // You can use a constant key since there's only one item
          text={navItems[5].text}
          icon={navItems[5].icon}
          link={navItems[5].link}
          navigate={navigate}
        />
        </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
