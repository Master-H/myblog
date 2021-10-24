// import React, { Component } from 'react';
// import { Menu } from 'antd';
// import { connect } from 'dva';
// // import { headerMenuLists } from 'LAYOUTS/headerConfig';
// import { headerMenuLists } from 'CM/THeader/headerConfig';

// import classnames from 'classnames';
// import styles from './index.less';

// class TMenu extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   renderMenu = () => headerMenuLists.map((item) => (
//     <Menu.Item key={item.key} onClick={() => changeRouter(item.key)}>
//       <span>{item.menuName}</span>
//     </Menu.Item>
//   ))s;

//   render() {
//     const { headerBg, selectedKey } = this.props;
//     // debugger
//     return (
//       <div>
//         <Menu
//           selectedKeys={[selectedKey]}
//           mode="horizontal"
//           theme="dark"
//           onClick={this.handleClickMenu}
//         >
//           {this.renderMenu()}
//         </Menu>
//       </div>
//     );
//   }
// }
// const mapStateToProps = (state) => ({
//   selectedKey: state.global.selectedKey,
// });
// const mapDispatchToProps = (dispatch) => ({
//   changeRouter: (key) => dispatch({
//     type: 'global/getCurrentMenuList',
//     payload: {
//       key,
//     },
//   }),
//   setHeaderSelectedKey: (selectedKey) => dispatch({
//     type: 'global/setHeaderSelectedKey',
//     payload: {
//       selectedKey,
//     },
//   }),
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(TMenu);

// // export default TMenu;
