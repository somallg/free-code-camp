import React from 'react';

const SearchResult = ({ result }) => {
  const renderResult = () => {
    return result.map((e, i) => {
      return (
        <a href={e.url} key={i} className="list-group-item" target="_blank">
            <h4 className="list-group-item-heading">{e.title}</h4>
            <p className="list-group-item-text">{e.description}</p>
        </a>
      );
    })
  };

  if (!result || result.length === 0) {
    return <div className="hidden"></div>;
  }

  return (
    <div className="list-group">
      {renderResult()}
    </div>
  )
};

export default SearchResult;
