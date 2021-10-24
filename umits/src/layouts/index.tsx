import React, { SFC } from 'react';
import { withRouter } from 'umi';
import { RouteComponentProps } from 'react-router';
import Home from './component/homePage';
import NoHomwPage from './component/noHomePage';

const BasicLayout: SFC<RouteComponentProps> = ({ children }) => {
  const isHomePage = false; // 默认主页不单独处理，额外展示采用下面写法
  // const { location: { pathname } } = props.history;
  // const isHomePage = pathname === '/';

  return (
    <>
      {
        isHomePage ? <Home /> : <NoHomwPage>{children}</NoHomwPage>
      }
    </>
  );
};

export default withRouter(BasicLayout);
