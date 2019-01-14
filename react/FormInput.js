import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'

class FormInput extends Component {
  static propTypes = {
    for: PropTypes.string,
    nameKey: PropTypes.string,
    initialValue: PropTypes.string,
    isRequired: PropTypes.bool,
  }

  static defaultTypes = {
    initialValue: ""
  }

  render () {
    const { ffor, nameKey, initialValue, isRequired } = this.props
    return (
      <div className="ph5 pt4">
        <label className="db f6 f5-ns mb4 gray" htmlFor={ffor}>
          <FormattedMessage id={nameKey} />
        </label>
        <input
          type="text"
          placeholder=""
          id={ffor}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          className="db ba b--black-20 w-100 w-100-ns pa4 pa5-ns lh-copy f4-ns mb5 mb6-ns"
          defaultValue={initialValue}
          required={isRequired}
        />
      </div>
    )
  }

}

export default FormInput
