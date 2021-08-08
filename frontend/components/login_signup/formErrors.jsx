import React from 'react';
import { isEmpty } from '../../util/Util';

const FormErrors = props => {
  if (isEmpty(props.errors)) {
    return (null);
  } else {
    return (
      <div className='session-form-errors'>
        <ul>
        {props.errors.map(error => (
          <li>{error}</li>
        ))}
        </ul>
      </div>
    )
  }
}

export default FormErrors;