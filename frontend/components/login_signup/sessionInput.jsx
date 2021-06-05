import React from 'react';
import { capitalize } from '../../util/Util';

const SessionInput = props => (
  <div className='session-form-input'>
    <label>{capitalize(props.title)}*</label>
    <br></br>
    <input
    type={props.type}
    value={props.value}
    onChange={props.onChange}
    autoComplete={props.autocomplete}
    ></input>
  </div>


)

export default SessionInput;