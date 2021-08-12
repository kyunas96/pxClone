import React from 'react';

const NotFoundPage = ({errors}) => {
  return (
    <div className="not-found-page">
      <span>404 {errors}</span>
    </div>
  );
}

export default NotFoundPage;