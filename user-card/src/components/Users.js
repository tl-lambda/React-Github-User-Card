import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Users extends React.Component {
	constructor(){
		super()
		this.state = {
			user: ''
		}
	}

	componentDidMount(){
		axios.get('https://api.github.com/users/lanners-marshall')
		.then(res => {
			console.log(res)
			this.setState({
				user: res.data
			})
		})
		.catch(error => {
			console.log(error)
		})
	}

	render(){
		const { user } = this.state
		return (
			<div>
				{user && 
					<div>
						<h1>{user.name}</h1>
						<img src={user.avatar_url} width="250px" />
						<p>Public Repos: {user.public_repos}</p>
						<p><a href={user.html_url}>Github</a></p>
						<Link to="/followers">Followers</Link>
					</div>
				}
			</div>
		)
	}
}

export default Users