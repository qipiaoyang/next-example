import React from "react";
import TestForm from "../components/form";
import { dispatch } from '@rematch/core';
import { initStore } from '../model/store';
import withRematch from '../utils/withRematch';
import { withRouter } from 'next/router';
import "isomorphic-unfetch";

class FormComponent extends React.Component {
	
	static async getInitialProps() {
		await new Promise((resolve) => {
			setTimeout(resolve, 3000)
		})
		
		return {}
	}
	
	
	render() {
		
		const {router} = this.props;
		return (
			<div>
				<p onClick={() => {
					window.location.href = "";
				}}>带有表单的页面,处理方式</p>
				<TestForm></TestForm>
				<button onClick={() => {
					router.push("/index")
				}}>点击我发送表单数据</button>
			</div>
		)
	}
}

export default withRematch(initStore, (state) => ({
	...state.formModel,
}))(withRouter(FormComponent))