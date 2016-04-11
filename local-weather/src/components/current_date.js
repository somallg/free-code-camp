import React from 'react';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const paddingLeft = (n) => {
  return n < 10 ? `0${n}` : n;
};

const CurrentDate = () => {
  const now = new Date();
  return (
    <div className="current-date">
      {days[now.getDay()]} {months[now.getMonth()]} {now.getDate()}, {paddingLeft(now.getHours())}:{paddingLeft(now.getMinutes())}
    </div>
  );
};

export default CurrentDate;
