import React, { Fragment } from 'react';

const ViewUser = ({ User, editProfile }) => {
	return (
		<Fragment>
			<div className="card" style={{ width: "70%" }}>
				<h1 className="container-card">Mi perfil</h1>
				<div className="card-user">
					<img src={user.imgURL} height="100" width="100" alt="foto" className="img" />
					<div>
						<h4>Nombre: {user.name}</h4>
						<h4>Apellido: {user.lastName}</h4>
						<h4>Email: {user.email}</h4>
					</div>
					<div>
						<button onClick={() => editProfile(true)} className="btn btn-dark">Editar Perfil</button>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default ViewUser;