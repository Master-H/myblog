import React from 'react';
import { connect } from 'dva';
import { withRouter } from 'umi';

import { RouteComponentProps } from 'react-router';
import { Button } from 'antd';
import FunctionTest from './component/function';

interface MyState {
  age: number;
}
interface MyProps extends RouteComponentProps <{}>{
  age: number;
}
class Test extends React.PureComponent<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      age: 0,
    };
  }

  handleClick = () => {
    const { age } = this.state;
    this.setState({
      age: age + 1,
    });
  }

  handleRouterChange = () => {
    const { history, location } = this.props;
    console.log(location);
    history.push('/test/route');
  }

  render() {
    const { age } = this.state;
    return (
      <div>
        <Button onClick={this.handleRouterChange}>跳转页面</Button>
        <FunctionTest age={age} onClick={this.handleClick} />
      </div>
    );
  }
}

const mapStateToProps = () => ({
});
const mapDispatchToProps = () => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Test));
