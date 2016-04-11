import React from 'react';

const LocationDetail = ({ location }) => {
  if (!location) {
    return <div>Loading location...</div>;
  }

  return (
    <div className="location">
      <p>Location: {location.city}, {location.region}, {location.country}</p>
    </div>
  );
};

export default LocationDetail;
