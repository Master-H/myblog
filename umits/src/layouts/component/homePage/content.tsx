import React, {
  SFC,
} from 'react';
import styles from './content.less';

interface MyProps {
  onClick: (param: number) => void;
  age: number;
}
const FunctionTest: SFC<MyProps> = () => (
  <div>
    <div className={styles.test}> i am home content</div>
  </div>
);
export default FunctionTest;
