import React from 'react'
import btn from '../../../img/screen_3/btn.png'
import bottle from '../../../img/screen_3/bottle.png'
import './thirdScreenContent.min.css'

export const ThirdScreenContent = ({toggleModal}) => {
	return (
		<div className="content-background">
			<div className="bottle">
				<img src={bottle} alt="bottle"/>
			</div>
			<div className="content">
				<div className="content__header">
					<div className="content__header-subtitle">Ключевое сообщение</div>
					<div className="content__header-title">BREND <span>XY</span></div>
				</div>
				<div className="content__cards">
					<div className="content__cards-left">
						Ehicula ipsum a arcu <br/>cursus vitae. Eu non <br/>diam phasellus <br/>vestibulum lorem sed <br/>risus ultricies
					</div>
					<div className="content__cards-right">
						<div className="content__cards-right_descr">
							A arcu <br/>cursus vitae
						</div>
						<button className="content__cards-right_button" onClick={() => toggleModal()}>
							<img src={btn} alt="btn"/>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
