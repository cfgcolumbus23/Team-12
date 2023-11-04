import React, { useState } from "react";
import "./leaderboard.css";

const data = [
  {
    name: "2550 N High Street",
    location: "India",
    score: 1550,
    img: "https://www.yourgoodwill.org/images/store_images/ChambersburgStoreFront.jpg",
    dt: "2022-02-10",
  },
  {
    name: "2675 Brice Rd",
    location: "USA",
    score: 2310,
    img: "https://www.amazinggoodwill.com/hs-fs/hubfs/RET23070_DonationCenters.png?width=500&height=500&name=RET23070_DonationCenters.png",
    dt: "2021-01-01",
  },
  {
    name: "52 Robinwood",
    location: "Chaina",
    score: 350,
    img: "https://images.foxtv.com/static.fox9.com/www.fox9.com/content/uploads/2022/10/764/432/Goodwill-store.jpg?ve=1&tl=1",
    dt: "2021-08-17",
  },
  {
    name: "2933 Morse Road",
    location: "Japan",
    score: 2100,
    img: "https://www.cleveland.com/resizer/QTtjby6W32VmXv9zgQjH3dMNiqg=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/BYD56H4ZWNBWZPOQI3L4B66GTY.png",
    dt: "2021-10-23",
  },
  {
    name: "5130 N Hamilton",
    location: "London",
    score: 1250,
    img: "https://dcgoodwill.org/wp-content/uploads/2021/06/bowie-maryland-goodwill-2.jpg",
    dt: "2022-01-22",
  },
  {
    name: "5526 Renner Rd",
    location: "Canada",
    score: 5250,
    img: "https://goodwillsp.org/wp-content/uploads/2020/09/Blog-Headers.png",
    dt: "2022-01-21",
  },
];

function between(data, between) {
  const today = new Date();
  const previous = new Date(today);
  previous.setDate(previous.getDate() - (between + 1));

  let filter = data.filter((val) => {
    let userDate = new Date(val.dt);
    if (between == 0) return val;
    return previous <= userDate && today >= userDate;
  });

  // sort with asending order
  return filter.sort((a, b) => {
    if (a.score === b.score) {
      return b.score - a.score;
    } else {
      return b.score - a.score;
    }
  });
}

const Leaderboard = () => {
  const [period, setPeriod] = useState(0);

  const handleClick = (e) => {
    setPeriod(e.target.dataset.id);
  };

  return (
    <div className="board">
      <h1 className="leaderboard">Leaderboard</h1>
      <ul>
        <>
          {data.map((value, index) => (
            <div className="flex" key={index}>
              <div className="item">
                <img src={value.img} alt="" />

                <div className="info">
                  <h3 className="name text-dark">{value.name}</h3>
                  <span>{value.location}</span>
                </div>
              </div>
              <div className="item">
                <span>{value.score}</span>
              </div>
            </div>
          ))}
        </>
      </ul>
    </div>
  );
};
export default Leaderboard;
