const menuConfigLists = [
  {
    key: 'key1',
    value: '一级菜单1',
    icon: 'mail',
    path: '/',
  },
  {
    key: 'key2',
    value: '一级菜单2',
    icon: 'rise',
    children: [
      {
        key: 'key2-1',
        value: '二级菜单1',
        icon: 'fund',
        path: '/test/route',
      },
      {
        key: 'key2-2',
        value: '二级菜单2',
        icon: 'apple',
      },
    ],
  },
  {
    key: 'key3',
    value: '一级菜单3',
    icon: 'windows',
    children: [
      {
        key: 'key311',
        value: '二级菜单1',
        icon: 'heat-map',
      },
      {
        key: 'key321',
        value: '二级菜单2',
        icon: 'github',
        children: [
          {
            key: 'key331',
            value: '三级菜单1',
          },
          {
            key: 'key332',
            value: '三级菜单2',
          },
        ],
      },
    ],
  },
];

export interface MenuConfig {
  key: string;
  value: string;
  icon?: string;
  path?: string;
  children?: Array<MenuConfig>;
}

export default menuConfigLists;
