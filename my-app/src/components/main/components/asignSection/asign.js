import React from 'react';
import classes from './asign.module.scss'
import { connect } from 'react-redux'

const Asign = props => (
     <section className={classes["asign"]}>
		<div className={classes["asign__wrapper"]}>
			<h2 className={classes["asign__title"]}>{props.title}</h2>
			<p className={classes["asign__description"]}>{props.description}</p>
			<form className={classes["asign__form-eamil"]}>
				<input className={classes["asign__input-eamil"]} type="email" name="email" placeholder="Your e-mail"/>
				<button className={classes["asign__button-eamil"]}>add</button>
			</form>
		</div>
	</section>
)

function mapStateToProps(state) {
    return {
        title: state.main.homePage.content.asign.title,
        description: state.main.homePage.content.asign.description
    }
}

export default connect(mapStateToProps)(Asign);