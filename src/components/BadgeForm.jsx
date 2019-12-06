import React from "react";
const BadgeForm = props => {
  return (
    <>
      <h1>New Attendat</h1>

      <form onSubmit={props.handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            onChange={props.handleInput}
            className="form-control"
            type="text"
            name="firstName"
            value={props.form.firstName}
          />
          <label>Last Name</label>
          <input
            onChange={props.handleInput}
            className="form-control"
            type="text"
            name="lastName"
            value={props.form.lastName}
          />
          <label>Email</label>
          <input
            onChange={props.handleInput}
            className="form-control"
            type="email"
            name="email"
            value={props.form.email}
          />
          <label>Job Title</label>
          <input
            onChange={props.handleInput}
            className="form-control"
            type="text"
            name="jobTitle"
            value={props.form.jobTitle}
          />
          <label>Twitter</label>
          <input
            onChange={props.handleInput}
            className="form-control"
            type="text"
            name="twitter"
            value={props.form.twitter}
          />
        </div>

        <button className="btn btn-primary">Save</button>
      </form>
    </>
  );
};

export default BadgeForm;
