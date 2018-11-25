import React from "react";
import {
	dispatch
} from '@rematch/core';
import {
	initStore
} from '../model/store';
import withRematch from '../utils/withRematch';
import {
	withRouter
} from 'next/router';
import "isomorphic-unfetch";
import TestForm from "../components/header";

class Index extends React.Component {

	static async getInitialProps({
		isServer,
		initialState,
		req,
	}) {
		let users = [];
		const reqInfo = req.headers;
		try {
			if (isServer) {
				const response = await fetch('https://api.github.com/users', {
					headers: {
						// 把前端request过来的cookie通过请求头传给后端
						cookie: reqInfo.cookie,
					}
				});
				users = await response.json();
				return {
					users: users,
					reqInfo: reqInfo,
				}
			}
		} catch(error) {
			// 打印错误日志
			console.log(error + new Date() + "================" + "首页 user接口");
		}		
	}

	render() {
		
		const { users, reqInfo, username, router} = this.props;
		console.log(reqInfo );
		return ( 
			<div>
				<span onClick={() => {
					router.push("/detail");
				}}>点击我跳转到详情页</span>
				{users.map((item,index) => {
					return (
						<div key={index} style={{display: "inline-block"}}>
							<img src={item.avatar_url} alt="加载失败" style={{width: "100px",height: "100px"}}/>
							<p style={{textAlign: "center"}}>{item.login}</p>
						</div>
					)
				})}
				
				<p>name:        {username}</p>
				<TestForm></TestForm>
			</div>
		)
	}
}


export default withRematch(initStore, (state) => ({
	...state.indexModel,
}))(withRouter(Index))
