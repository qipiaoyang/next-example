import React from "react";
import { Form, Input, Icon } from "antd";
import { connect } from 'react-redux';
import { MOBILE } from "../config/pattern";
const FormItem = Form.Item;

class TestForm extends React.Component {
	render() {
		
		const { 
			form: {
			getFieldDecorator,
			},
			dispatch
		} = this.props;
		
		
		return (
			<div>
				<Form>
					<FormItem label="手机号">
						{getFieldDecorator('username', {
							rules: [{ required: true, message: '请输入手机号', pattern: MOBILE }],
						})(
							<Input onChange={() => {
							}} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入手机号" />
						)}	
					</FormItem>
				</Form>
			</div>
		)
	}
}

export default connect((state) => ({
	...state.indexModel
}))(Form.create()(TestForm))
