let React = require('react')
let EmailField = require('./EmailField.jsx')
let NameField = require('./NameField.jsx')

let LeadCapture = React.createClass({
  render: function () {
    return (
      <div className="col-sm-3">
        <div className="panel panel-default">
          <div className="panel-body">
            <NameField type="First" ref="fieldName" />
            <EmailField ref="fieldEmail" />
            <button className="btn btn-primary" onClick={this.onSubmit}> Submit </button>
          </div>
        </div>
      </div>
    )
  },
  onSubmit: function () {
    if (!this.refs.fieldEmail.state.valid) {
      console.log('email is invalid')
    } else {
      let email = this.refs.fieldEmail.state.value
      let name = this.refs.fieldName.state.value
      let result = {
        email: email,
        name: name
      }
      this.refs.fieldEmail.clear()
      this.refs.fieldName.clear()
      console.log('do submit')
      console.log(result)
    }
  }
})

module.exports = LeadCapture
