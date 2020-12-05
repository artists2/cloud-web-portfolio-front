import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Radio } from 'antd';

function RadioHandler() {
  
    const [value, setValue] = React.useState(1);

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    return (
        <Radio.Group onChange={onChange} value={value} defaultValue="a" buttonStyle="solid">
            <Radio.Button value={1}>매수</Radio.Button>
            <Radio.Button value={2}>매도</Radio.Button>
        </Radio.Group>
    )
}
export default RadioHandler;



/**
<Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>매수</Radio>
            <Radio value={2}>매도</Radio>
</Radio.Group>


import { Radio } from 'antd';

ReactDOM.render(
  <>
    <Radio.Group defaultValue="a" buttonStyle="solid">
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b">Shanghai</Radio.Button>
      <Radio.Button value="c">Beijing</Radio.Button>
      <Radio.Button value="d">Chengdu</Radio.Button>
    </Radio.Group>
    <Radio.Group defaultValue="c" buttonStyle="solid" style={{ marginTop: 16 }}>
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b" disabled>
        Shanghai
      </Radio.Button>
      <Radio.Button value="c">Beijing</Radio.Button>
      <Radio.Button value="d">Chengdu</Radio.Button>
    </Radio.Group>
  </>,
  mountNode,
);

 */