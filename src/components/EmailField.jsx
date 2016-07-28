let React = require('react')
let validator = require('email-validator')

let EmailField = React.createClass({
  render: function () {
    let formClass = this.state.valid ? 'form-group' : 'form-group has-error'

    return (
      <div className={formClass}>
        <input className="form-control" onChange={this.onChange} placeholder="Email" value={this.state.value} />
      </div>
    )
  },
  getInitialState: function () {
    return {
      valid: true,
      value: ''
    }
  },
  onChange: function (e) {
    var value = e.target.value
    var isValid = validator.validate(value)
    this.setState({
      value: value,
      valid: isValid
    })
  }
})

module.exports = EmailField
