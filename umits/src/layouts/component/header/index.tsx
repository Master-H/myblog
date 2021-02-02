import React, {
  SFC,
} from 'react';
import {
  Layout,
} from 'antd';

import HeaderLeft from './left';
import HeaderRight from './right';
import './index.less';

const { Header } = Layout;
// import HeaderMenu from './heanderMenu';

const HeaderComponent: SFC = () => (
  <Header>
    <HeaderLeft />
    <HeaderRight />
  </Header>
);
export default HeaderComponent;
