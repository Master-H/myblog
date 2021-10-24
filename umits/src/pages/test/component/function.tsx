import React, {
  SFC, MouseEvent, ChangeEvent,
} from 'react';
import { Button, Input } from 'antd';

interface MyProps {
  onClick: (param: number) => void;
  age: number;
}
const FunctionTest: SFC<MyProps> = ({ children, onClick, age }) => {
  const handleOnClick = () => {
    onClick(age + 1);
  };

  // 关于其他事件接口，直接去安装包react/index.d.ts查找即可
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = e;
    console.log(value);
  };
  const handleMouseEnter = (e: MouseEvent<HTMLElement>) => {
    const { clientX } = e;
    console.log(clientX);
  };
  return (
    <div>
      <h1>{age}</h1>
      <Button onClick={handleOnClick}>add</Button>
      <Input onChange={handleChange} />
      <div onMouseEnter={handleMouseEnter}>MouseEvent</div>
      { children }
    </div>
  );
};
export default FunctionTest;
