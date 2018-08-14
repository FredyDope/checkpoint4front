import React from 'react'


const Movie = ({ Titre, Affiche }) => {
	return(
		<div>
			<div>
				<img src={Affiche} alt="affiche de film"/>
				<div className="container">
					<h2 className="Titre"> {Titre}</h2>
			</div>
			</div>
		</div>
	)
}
export default Movie