import React from 'react';

import { connect } from 'react-redux';

const Calculator = ({ result }) => {
  return (
    <>
      <input type="text" placeholder="A" />
      <input type="text" placeholder="B" />

      <button>Sum</button>
      <button>Subtract</button>

      <div>{result}</div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    result: state.calculator,
  };
};

export default connect(mapStateToProps)(Calculator);
