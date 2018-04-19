import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { createPosts} from '../actions';

class PostsNew extends Component {

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''} `
    return(
      <div className="container">
        <div className="col-md-6" style={{marginTop:'3%'}}>
          <div className="form-group has-error has-feedback">
          <label>{field.label}</label>
          <input 
            className="form-control"
            type="text"
            rows="3"
            {...field.input}
          />
          <div className="text-help" style={{ color: '#970000' }}>
            {touched ? error : ''}
          </div>
        </div>
        </div>
      </div>
    )
  }

  renderContentField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${ touched && error ? 'has-danger' : ''} `;
    return (
      <div className="container">
        <div className="col-md-6" style={{ marginTop: '3%' }}>
        <div className="form-group has-danger">
          <label>{field.label}</label>
          <textarea
            className="form-control"
            type="text"
            rows="4"
            {...field.input}
          />
          <div className="text-help" style={{ color:'#970000'}}>
            {touched ? error : ''}
          </div>
        </div>
        </div>
      </div>
    )
  }

  onSubmit = (values) => {
    // console.log(values)
    this.props.createPosts(values, ()=>{
      this.props.history.push('/');
    });
  }

  render(){
    const {handleSubmit} = this.props;

    return(
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field 
            label="Title"
            name="title"
            component={this.renderField}
          />
          <Field
            label="Categories"
            name="categories"
            component={this.renderField}
          />
          <Field
            label="Post Content"
            name="content"
            component={this.renderContentField}
          />

          <div className="container" style={{padding:'2.5%'}}>
            <button className="btn btn-primary">SUBMIT</button>
            <Link to="/" className="btn btn-danger" style={{marginLeft:'3%'}}>
              CANCEL
            </Link>
          </div>
        </form>
      </div>
    )
  }
}

function validate(values){
  const errors = {};

  //validate the inputs from 'values'
  if(!values.title || values.title.length < 3){
    errors.title = "Enter the Title that is atleast 3 characters!"
  }
  if (!values.categories) {
    errors.categories = "Enter the Categories!"
  }
  if (!values.content) {
    errors.content = "Content Required!!"
  }

  //If errors is empty, the form is fine to submit
  //If errors has any properties, redux form assumes it as invalid
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, {createPosts})(PostsNew)
  );