import React from "react";
import TestForm from "../components/form";
import { initStore } from '../model/store';
import withRematch from '../utils/withRematch';
import { withRouter } from 'next/router';
import "isomorphic-unfetch";

class FormComponent extends React.Component {
	
	static async getInitialProps() {
		
		return {}
	}
	
	
	render() {
		
		const {router, dispatch} = this.props;
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