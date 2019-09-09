import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Followers extends React.Component {
	constructor(){
		super()
		this.state = {
			followers: ''
		}
	}

	componentDidMount(){
		axios.get('https://api.github.com/users/lanners-marshall')
		.then(res => {
			console.log(res)
			this.setState({
				followers: res.data
			})
		})
		.catch(error => {
			console.log(error)
		})
	}

	render(){

		const { followers } = this.state

		return (
			<div>
				{followers && 
					<div>
						<p>{followers.followers}</p>
						<p>{followers.following}</p>
						<p><a href={followers.followers_url}>Followers</a></p>
					</div>
				}
				<Link to="/">User</Link>
			</div>
		)
	}
}

export default Followers;