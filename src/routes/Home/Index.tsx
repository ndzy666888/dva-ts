import React from 'react';
import { connect } from 'dva';

const Index = (props: any) => {
  console.log(props);
  return <div>Home</div>;
};

export default connect((s: any) => {
  return { loading: s.loading, ...s.home };
})(Index);
