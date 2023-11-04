import './Homepage.css';
import Navbar from './components/Navbar';

const Homepage = () => {
  const navItems = [
    { text: 'Home', icon: 'home.svg', link: '/' },
    { text: 'Newsletter', icon: 'news.svg', link: '/newsletter' },
    { text: 'Training', icon: 'board.svg', link: '/training' },
    { text: 'Messages', icon: 'messages.svg', link: '/messages' },
    { text: 'Feedback', icon: 'notepad.svg', link: '/feedback' },
    { text: 'Leaderboard', icon: 'leaderboard.svg', link: '/leaderboard'}
  ];

  return (
    <>
      <Navbar />
      <div id="circleDiv">
        <div className="row">
          {navItems.map((item, index) => (
            <div className="circle" key={index}>
              <svg width="300" height="300">
                <circle cx="150" cy="150" r="150" fill="rgb(28,117,188)" />
                <text
                  x="150"
                  y="150"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#fff"
                  fontSize="18"
                >
                  {item.text}
                </text>
                <image
                  x="120"
                  y="175"
                  width="60"
                  height="60"
                  xlinkHref={item.icon}
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Homepage;
