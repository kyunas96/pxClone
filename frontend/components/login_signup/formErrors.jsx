import React from 'react';
import { isEmpty } from '../../util/Util';

const FormErrors = props => {
  if (props.errors.length === 0) {
    return (null);
  } else {
    return (
      <div className='session-form-errors'>
        <ul>
        {props.errors.map((error, i) => (
          <li key={i}>{error}</li>
        ))}
        </ul>
      </div>
    )
  }
}

export default FormErrors;