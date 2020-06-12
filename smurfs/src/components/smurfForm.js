import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import axios from "axios";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions/actions";

class FormSmurf extends React.Component {
  renderInput({ input, label }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  onSubmit = (formValues) => {
    axios
      .post("http://localhost:3333/smurfs", formValues)
      .then((response) => {});
    this.props.fetchSmurfs();
  };

  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    console.log(this.props);

    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="name" component={this.renderInput} label="Name:" />
        <Field name="age" component={this.renderInput} label="Age:" />
        <Field name="height" component={this.renderInput} label="Height:" />
        <button type="submit">Add Smurf</button>
        <div>
          {this.props.smurfs.map((smurf) => {
            return (
              <div>
                <div>{smurf.name}</div>
                <div>{smurf.age} </div>
                <div>{smurf.height} </div>
              </div>
            );
          })}{" "}
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return { smurfs: state.smurfs };
};

const Component = connect(mapStateToProps, { fetchSmurfs })(FormSmurf);

export default reduxForm({ form: "newSmurfs" })(Component);
