import React from 'react';
import { Menu, Icon } from 'antd';
import router from 'umi/router';
import menuConfigLists, { MenuConfig } from './menuConfig';

const { SubMenu } = Menu;
class MenuComponent extends React.Component<{}, {}> {
  renderMenu = (menuConfigList: Array<MenuConfig>) => this.renderFirstMenu(menuConfigList)

  changeRouter = (path: string | undefined) => {
    // 用a标签在页脚会显示链接遮挡信息
    router.push(path || '');
  };

  // 渲染item
  renderItem = (item: MenuConfig) => (
    <Menu.Item key={item.key} onClick={() => this.changeRouter(item.path)}>
      {item.icon && <Icon type={item.icon} />}
      <span>{item.value}</span>
    </Menu.Item>
  )

  // 渲染title
   renderTitle = (item: MenuConfig) => (
     <span>
       {item.icon && <Icon type={item.icon} />}
       <span>{item.value}</span>
     </span>
   )

  // 渲染三级菜单,默认最大三级菜单
  renderThirdMenu = (thirdMenuLists: Array<MenuConfig>) => thirdMenuLists.map((item: MenuConfig) => this.renderItem(item))

   // 渲染二级菜单
   renderSecondMenu = (secondMenuLists: Array<MenuConfig>) => secondMenuLists.map((secondMenuItem: MenuConfig) => {
     if (secondMenuItem.children) {
       return (
         <SubMenu key={secondMenuItem.key} title={this.renderTitle(secondMenuItem)}>
           { this.renderThirdMenu(secondMenuItem.children)}
         </SubMenu>
       );
     }
     return this.renderItem(secondMenuItem);
   });

  // 渲染一级菜单
  renderFirstMenu = (firstMenuLists: Array<MenuConfig>) => firstMenuLists.map((firstMenuItem: MenuConfig) => {
    if (firstMenuItem.children) {
      return (
        <SubMenu key={firstMenuItem.key} title={this.renderTitle(firstMenuItem)}>
          { this.renderSecondMenu(firstMenuItem.children)}
        </SubMenu>
      );
    }
    return this.renderItem(firstMenuItem);
  });

  render() {
    return (
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        {this.renderMenu(menuConfigLists)}
      </Menu>
    );
  }
}

export default MenuComponent;
