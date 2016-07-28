let React = require('react')
let EmailField = require('./EmailField.jsx')

let LeadCapture = React.createClass({
  render: function () {
    return (
      <div className="col-sm-3">
        <div className="panel panel-default">
          <div className="panel-body">
            <EmailField />
          </div>
        </div>
      </div>
    )
  }
})

module.exports = LeadCapture
