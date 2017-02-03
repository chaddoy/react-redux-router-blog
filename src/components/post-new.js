import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions';
import { Link } from 'react-router';

class PostsNew extends React.Component {

	static contextTypes = {
		router : PropTypes.object
	};

	onSubmit(props) {
		this.props.createPost( props )
			.then( () => {
				// blog post has been created, navigate the user to the index
				// We navigate by calling this.context.router.push with the
				// new path to navigate to.
				this.context.router.push( '/' );
			})
	}

	render () {
		const { fields: { title, categories, content }, handleSubmit } = this.props;

		return (
			<form onSubmit={ handleSubmit( this.onSubmit.bind( this ) ) }>
				<h3>Create A New Post</h3>

				<div className={ `form-group ${ title.touched && title.invalid ? 'has-danger' : '' }` }>
					<label>Title</label>
					<input type="text" className="form-control" { ...title } />
					<div className="text-help text-danger">
						{ title.touched ? title.error : '' }
					</div>
				</div>

				<div className={ `form-group ${ categories.touched && categories.invalid ? 'has-danger' : '' }` }>
					<label>Categories</label>
					<input type="text" className="form-control" { ...categories } />
					<div className="text-help text-danger">
						{ categories.touched ? categories.error : '' }
					</div>
				</div>

				<div className={ `form-group ${ content.touched && content.invalid ? 'has-danger' : '' }` }>
					<label>Content</label>
					<textarea className="form-control" { ...content }></textarea>
					<div className="text-help text-danger">
						{ content.touched ? content.error : '' }
					</div>
				</div>

				<button type="submit" className="btn btn-primary">Save</button>
				<Link to="/" className="btn btn-danger">
					Cancel
				</Link>
			</form>
		);
	}

}

function validate(values) {
	const errors = {};

	if ( !values.title ) {
		errors.title = 'Enter a username';
	}

	if ( !values.categories ) {
		errors.categories = 'Enter a username';
	}

	if ( !values.content ) {
		errors.content = 'Enter a username';
	}

	return errors;
}

export default reduxForm( {
	form: 'PostsNewForm',
	fields: [ 'title', 'categories', 'content' ],
	validate
}, null, { createPost } )( PostsNew );