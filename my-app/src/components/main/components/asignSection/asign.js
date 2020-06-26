import React from 'react';
import classes from './asign.module.scss'
import { connect } from 'react-redux'

const Asign = props => (
     <section className={classes["asign"]}>
		<div className={classes["wrapper"]}>
			<h2 className={classes["title"]}>{props.title}</h2>
			<p className={classes["description"]}>{props.description}</p>
			<form className={classes["form-eamil"]}>
				<input className={classes["input-eamil"]} type="email" name="email" placeholder="Your e-mail"/>
				<button className={classes["button-eamil"]}>add</button>
			</form>
		</div>
	</section>
)

function mapStateToProps(state) {
	console.log(state)
    return {
        title: state.main.home.content.asign.title,
        description: state.main.home.content.asign.description
    }
}

export default connect(mapStateToProps)(Asign);