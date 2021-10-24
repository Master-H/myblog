import React from 'react';
import { Button } from 'antd';

import UseCallbackChild from './useCallbackChild';

interface UseCallbackState {
  number: number;
}

class UseCallback extends React.Component<{}, UseCallbackState> {
  constructor(props: any) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  // 箭头函数写法，每次调用都是只向同一个
  handlChangeNumber = () => {
    const { number } = this.state;
    // User
    this.setState({
      number: number + 1,
    });
  };

  render() {
    const { number } = this.state;
    return (
      <div>
        <h1>
          Number:
          {number}
        </h1>
        <Button onClick={this.handlChangeNumber}>测试useCallback</Button>
        <UseCallbackChild change={this.handlChangeNumber} number={number} />
      </div>

    );
  }
}
export default UseCallback;
