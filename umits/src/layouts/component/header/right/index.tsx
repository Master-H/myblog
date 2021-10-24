import React, { SFC } from 'react';
import { Tooltip, Icon } from 'antd';
import styles from './index.less';

const HeaderRight: SFC = () => (
  <div className={styles.theaderRight}>
    <Tooltip title="帮助文档">
      <Icon type="question" />
    </Tooltip>
    //
    {/* <THeaderLogin {...{ username }} /> */}
  </div>
);

export default HeaderRight;
