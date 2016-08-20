var React = require('react');
var ReactDOM = require('react-dom');

/*

  StorePicker
  This will let us make <StorePicker/>

*/

var StorePicker = React.createClass({

  render : function() {
    return (
      <form className="store-selector">
        <h2>Please Enter A Store</h2>
        {/* React uses single curly brackets for variable insertion - no interpolation syntax needed */}
        <input type="text" ref="storeId" required />
        {/* using required in the line above forces user input before allowing submission */}
        <input type="Submit" />
      </form>
    )
  }

});

ReactDOM.render(<StorePicker/>, document.querySelector('#main'));
