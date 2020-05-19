import React from 'react';

const greaterThan3ChildrenStrategy = ({ children }) => {
  return React.Children.count(children) > 3;
};

export default greaterThan3ChildrenStrategy;
