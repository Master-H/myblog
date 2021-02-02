import React, { useCallback, SFC } from 'react';
import Child from './child';

interface MyProps {
  number: number;
  change: () => void;
}
const UseCallbackChild: SFC<MyProps> = ({ number }) => {
  // 这种写法，每次Child都会产生新的change函数，相当于props一直变化，性能问题
  // const change = () => {
  //   console.log(1);
  // };

  // 这种写法，change函数在name不改变的情况下，引用地址一样
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const change = useCallback(() => { }, [number]);
  return (
    <div>
      <h1>use</h1>
      <Child change={change} />
    </div>

  );
};
// memoFn: true,  UseCallbackChild才会执行render
// memoFn: flse,  UseCallbackChild不执行render
const memoFn = (nextProps: MyProps, prevProps: MyProps) => nextProps.number === prevProps.number;
export default React.memo(UseCallbackChild, memoFn);
