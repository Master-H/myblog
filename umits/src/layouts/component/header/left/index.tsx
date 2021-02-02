import React, { SFC } from 'react';
import router from 'umi/router';
import { Button } from 'antd';

const HeaderLeft: SFC = () => {
  const handleClick = () => {
    router.push('./');
  };
  return (
    <div>
      <Button onClick={handleClick}>主页</Button>
    </div>

  );
};

export default HeaderLeft;
