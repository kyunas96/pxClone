import React from 'react';
import { isEmpty } from '../../util/Util';

const FormErrors = props => {
  if (isEmpty(props.errors)) {
    return (null);
  } else {
    return (
      <div className='session-form-errors'>
        <span>{props.errors}</span>
      </div>
    )
  }
}

export default FormErrors;