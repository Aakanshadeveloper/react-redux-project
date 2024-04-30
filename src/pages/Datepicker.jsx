import React, { useRef } from "react";
import { connect } from "react-redux";
import { addField, removeField, updateField } from "../store/Actions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css";
import { MDBIcon } from "mdbreact";

const Datepicker = ({ fields, addField, removeField, updateField }) => {
  const formRef = useRef(null);
  const handleSubmit = (event) => {
    console.log(event, "event");
    event.preventDefault();
    const isFormValid = formRef.current.checkValidity();
    if (isFormValid) {
      // Do something when the form is valid
      console.log("Form is valid! Submitting...");
      formRef.current.reset();
    } else {
      // Do something when the form is not valid
      console.log("Form is not valid. Please check your inputs.");
    }
  };

  const handleStartDateChange = (index, date) => {
    updateField(index, date, "startDate");
  };

  const handleEndDateChange = (index, date) => {
    updateField(index, date, "endDate");
  };

  return (
    <div className="container">
      <div className="row">
        <form ref={formRef} onSubmit={handleSubmit}>
          {fields.map((field, index) => (
            <div key={index} className="date-picker">
              <DatePicker
                className={`date-show`}
                selected={field.startDate}
                onChange={(date) => handleStartDateChange(index, date)}
                minDate={new Date()}
                placeholderText="Start Date"
                autoComplete="off"
                required
              />
              <p>to</p>
              <DatePicker
                className={`date-show`}
                selected={field.endDate}
                onChange={(date) => handleEndDateChange(index, date)}
                minDate={field.startDate}
                placeholderText="End Date"
                autoComplete="off"
                required
              />
              <button type="button" className="btn" onClick={addField}>
                <span  className="action-btn">
                  <MDBIcon fas icon="plus" />
                </span>
              </button>
              {fields.length > 1 && (
                <button
                  type="button"
                  className="btn"
                  onClick={() => removeField(index)}
                >
                  <span className="action-btn">
                    <MDBIcon fas icon="minus" />
                  </span>
                </button>
              )}
            </div>
          ))}
          <button className="btn btn-submit" type="submit">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  fields: state.fields,
});

const mapDispatchToProps = {
  addField,
  removeField,
  updateField,
};

export default connect(mapStateToProps, mapDispatchToProps)(Datepicker);
