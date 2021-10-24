import React, { useState, SFC } from 'react';
import {
  Layout,
} from 'antd';
import { withRouter } from 'umi';
import { RouteComponentProps } from 'react-router';
import Menu from '../menu/Menu';
import Header from '../header';
import styles from './index.less';

const {
  Content, Sider,
  Footer,
} = Layout;

const BasicLayout: SFC<RouteComponentProps> = ({ children, history }) => {
  const [collapsed, setCollapsed] = useState(false);
  const handleChangeCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Layout>
        <Sider collapsible collapsed={collapsed} onCollapse={handleChangeCollapse}>
          <Menu />
        </Sider>
        <Content>
          {children}
          <Footer className={styles.footer}>
            <a href="https://beian.miit.gov.cn/">京ICP备19056401号-1</a>
          </Footer>
        </Content>

      </Layout>
    </Layout>
  );
};

export default withRouter(BasicLayout);
