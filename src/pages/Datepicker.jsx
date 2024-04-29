import React from 'react'
import {connect} from 'react-redux'
import { addField,removeField,updateField } from '../store/Actions'

const Datepicker = ({fields,addField,removeField,updateField}) => {
  return (
    <div>
      {fields.map((value, index) => (
        <div key={index}>
          <input
            type="text"
            value={value}
            onChange={(e) => updateField(index, e.target.value)}
          />
          <button onClick={() => removeField(index)}>Remove</button>
        </div>
      ))}
      <button onClick={addField}>Add Input Field</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
    fields: state.fields,
  });
  
  const mapDispatchToProps = {
    addField,
    removeField,
    updateField,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Datepicker);
