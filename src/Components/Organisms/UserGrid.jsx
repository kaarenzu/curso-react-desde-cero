import React from 'react'
import UserCard from '../Molecules/UserCard'
import withLoader from '../HOC/whitLoader'

const UserGrid = ({ users }) => {
	return (
		<>
			<div className="ed-grid">
				<h1>Usuarios</h1>
				<div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
					{users.map(u => (<UserCard
							key={u.id}
							name={u.name}
							email={u.email}
							username={u.username}
						/>
						))
					}
				</div>
			</div>
		</>
	)
}

export default withLoader(UserGrid, "users")