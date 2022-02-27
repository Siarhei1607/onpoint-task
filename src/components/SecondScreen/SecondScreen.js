import React from 'react'
import { SecondScreenAnimation } from './SecondScreenAnimation'
import './secondScreen.min.css'

export const SecondScreen = ({show}) => {
	return (
		<div className="slider__item secondScreen">
			<div className="secondScreen__title">
				текст <br/>сообщения
			</div>
			<div className="secondScreen__descr">
				<div className="secondScreen__descr__text">
					<p>
						<span>Lorem ipsum dolor sit amet</span>, lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, consectetur cupiditate delectus dicta distinctio eius eligendi exercitationem illum molestiae odio saepe soluta temporibus velit veniam vitae? Commodi facere placeat quia! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aperiam, aspernatur assumenda blanditiis, consequatur cumque debitis doloribus itaque nam odit officiis optio praesentium quia repellendus sapiente sint suscipit vitae.
						<br/>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci alias animi aperiam atque blanditiis consectetur doloribus ea eaque excepturi, libero magnam nulla odio quisquam, recusandae repudiandae sed tenetur vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, harum, quasi. Consectetur deleniti dolores error ex, facere nulla odit placeat? Adipisci cupiditate dolores maxime molestias temporibus? Eos ex nesciunt qui! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consectetur consequatur cumque cupiditate error ex explicabo iste itaque laborum modi necessitatibus non nostrum numquam optio qui quidem quis reiciendis voluptatem.
						<br/>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque harum hic odit quod voluptates. Asperiores esse excepturi facere harum, impedit, labore laborum libero, necessitatibus nemo nihil pariatur quam quidem unde! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam in itaque nostrum numquam officia quia rerum soluta sunt, ullam voluptate. Aliquam architecto maiores perferendis placeat quisquam quo rem! Praesentium, vel! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ea fugit ipsam minima, quidem quod sunt tempore. Ab doloremque error, harum maiores nihil repellat? A molestias saepe sapiente similique voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos nam possimus quibusdam quisquam, quo sit velit voluptas? Accusamus, exercitationem quod! Ad alias animi eaque ipsum minima nam numquam praesentium repellendus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consectetur corporis earum esse harum impedit inventore ipsum minima nemo nobis optio quia rerum tempora temporibus, ullam unde voluptates. Ducimus, in.
					</p>
				</div>
				<div className="secondScreen__descr__scroll">
					<div className="secondScreen__descr__scroll__thumb"/>
				</div>
				<div className="secondScreen__descr__layer"/>
			</div>
			<SecondScreenAnimation show={show}/>
		</div>
	)
}
