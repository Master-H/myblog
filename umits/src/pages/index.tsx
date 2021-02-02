/**
 * Routes:
 *  - src/routes/privateRoute.tsx
 */
import React from 'react';
import { connect } from 'dva';
// import Memo from './memo';

class Test extends React.Component<any, any> {
  info = {
    hair: 'white',
    height: 22,
  };


  componentDidMount() {
    // eslint-disable-next-line no-console
    console.log(111);
  }

  handleClick = () => {
    const { age, obj } = this.state;
    // obj.height = 99999
    this.info.height = 33;
    this.setState({
      age: age + 1,
      obj: { ...obj, height: 8888 },
    });
  };

  render() {
    return (
      <div>
        <div>4444dddttt</div>
        <div>4444dddttt</div>
      </div>
    );
  }
}

const mapStateToProps = () => ({
});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
