import React from 'react';

const BasicLayout: React.FC = ({ children }) => (
  <div>
    <h1>i am private route</h1>
    {children}
  </div>
);

export default BasicLayout;
