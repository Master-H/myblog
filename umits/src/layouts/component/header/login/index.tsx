// import {
//   Avatar, Icon, Menu, Spin,
// } from 'antd';
// import { ClickParam } from 'antd/es/menu';
// import { FormattedMessage } from 'umi-plugin-react/locale';
// import React from 'react';
// import { connect } from 'dva';
// import router from 'umi/router';

// import { ConnectProps, ConnectState } from '@/models/connect';
// import { CurrentUser } from '@/models/user';
// import HeaderDropdown from '../HeaderDropdown';
// import styles from './index.less';

// export interface GlobalHeaderRightProps extends ConnectProps {
//   currentUser?: CurrentUser;
//   menu?: boolean;
// }

// class AvatarDropdown extends React.Component<GlobalHeaderRightProps> {
//   onMenuClick = (event: ClickParam) => {
//     console.log(111);
//   };

//   render(): React.ReactNode {
//     const { currentUser = { avatar: '', name: '' }, menu } = this.props;

//     const menuHeaderDropdown = (
//       <Menu className={styles.menu} selectedKeys={[]} onClick={this.onMenuClick}>
//         <Menu.Item key="logout">
//           <Icon type="logout" />
//           <FormattedMessage id="menu.account.logout" defaultMessage="logout" />
//         </Menu.Item>
//       </Menu>
//     );

//     return (
//       <HeaderDropdown overlay={menuHeaderDropdown}>
//         <span className={`${styles.action} ${styles.account}`}>
//           <Avatar size="small" className={styles.avatar} src={currentUser.avatar} alt="avatar" />
//           <span className={styles.name}>didi</span>
//         </span>
//       </HeaderDropdown>
//     );
//   }
// }
// export default connect(({ user }: ConnectState) => ({
//   currentUser: user.currentUser,
// }))(AvatarDropdown);
