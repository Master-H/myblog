import React, { SFC } from 'react';


interface MyProps {
  change: () => void;
}
const Child: SFC<MyProps> = () => {
  // eslint-disable-next-line no-console
  console.log('i  child ');
  return (
    <h1>
      i am child
    </h1>
  );
};
export default React.memo(Child);
