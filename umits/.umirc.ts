import { IConfig } from 'umi-types';
const path = require('path');
// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'dvats',
      dll: true,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
  proxy:{
    '/error': {
      // target:pre8999,
      target: 'lhttp://localhost:3000',
      // target: env8088,
      changeOrigin: true,
    },
  }
}

export default config;
