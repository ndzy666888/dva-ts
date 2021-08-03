import React from 'react';
import { connect } from 'dva';

const Index = (props: any) => {
  console.log(props);
  return <div>AAA</div>;
};

export default connect((s: any) => {
  return { loading: s.loading, ...s.aaa };
})(Index);
