import React, { ChangeEvent, SyntheticEvent } from 'react';
import { connect } from 'dva';
import { Button, Input } from 'antd';
import { axiosGet } from '@/utils/axios';

class Test extends React.Component<{}, {}> {
    info = {
      hair: 'white',
      height: 22,
    };

    handleClick = async () => {
      const res = await axiosGet('/error', { age: 1 });
    };

    // handleChange = (e: SyntheticEvent<Element, Event>) => {
    //   const { target: { value } } = e;
    //   console.log(value);
    // }
    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { target: { value } } = e;
      console.log(value);
    }

    render() {
      return (
        <div>
          <Button onClick={this.handleClick}>测试</Button>
          <iframe src="http://localhost:8000/" title="90" />
          <Input onChange={this.handleChange} />
        </div>
      );
    }
}

const mapStateToProps = () => ({
  // name: state.test.name,
  // testname: state.test.name,
});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
