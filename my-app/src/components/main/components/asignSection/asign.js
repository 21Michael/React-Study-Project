import React from 'react';
import classes from './asign.module.scss'


const Asign = props => (
     <section className={classes["main__section-asign-box"]}>
		<div className={classes["asign-box__wrapper"]}>
			<h2 className={classes["asign-box__title"]}>{props.data.title}</h2>
			<p className={classes["asign-box__description"]}>{props.data.description}</p>
			<form className={classes["asign-box__form-eamil"]}>
				<input className={classes["asign-box__input-eamil"]} type="email" name="email" placeholder="Your e-mail"/>
				<button className={classes["asign-box__button-eamil"]}>add</button>
			</form>
		</div>
	</section>
)

export default Asign;