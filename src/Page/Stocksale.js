import { Form, Space, InputNumber } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Input, Button, Radio} from '@material-ui/core';
import RadioHandler from './StocksaleonChange';
/*

*/

const Demo = () => {
    const onFinish = values => {
        console.log('Received values of form:', values);
    };

    return (
        <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
            <Form.List name="users">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(field => (
                            <Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                
                                <RadioHandler/>
                                <Form.Item
                                    {...field}
                                    name={[field.name, 'stock']}
                                    fieldKey={[field.fieldKey, 'stock']}
                                    rules={[
                                        {required: true, message: '종목을 입력하세요.' },
                                        {type: 'string', message: '주식 종목은 문자열입니다.'}]}
                                >
                                    <Input placeholder="주식 종목" />
                                </Form.Item>

                                <Form.Item
                                    {...field}
                                    name={[field.name, 'price']}
                                    fieldKey={[field.fieldKey, 'price']}
                                    rules={[
                                        { required: true, message: '평단가를 입력하세요.' }, 
                                        {type:'number', message: '평단가는 숫자로 써주세요.'}]}
                                >

                                    <InputNumber min={0} placeholder="평단가" />
                                </Form.Item>


                                <Form.Item
                                    {...field}
                                    name={[field.name, 'num']}
                                    fieldKey={[field.fieldKey, 'num']}
                                    rules={[
                                        { required: true, message: '수량을 입력하세요.' }, 
                                        {type: 'number', message: '수량은 숫자로 써주세요.'}]}
                                >
                                    <InputNumber min={0} placeholder="수량" />
                                </Form.Item>

                                <MinusCircleOutlined onClick={() => remove(field.name)} />
                            </Space>
                            
                        ))}
                        <Form.Item>
                            <Button variant="contained" color="primary" type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                종목추가
                            </Button>
                            <Button variant="contained" color="secondary" type="primary" htmlType="submit">
                                매매 진행
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
        </Form>
    );
};

export default Demo;