var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;
var createBrowserHistory = require('history/lib/createBrowserHistory');

/*
  App
*/

var App = React.createClass({

  render : function() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order/>
        <Inventory/>
      </div>
    )
  }
});

/*
  Header
*/

var Header = React.createClass({
  render : function() {
    return (
      <header className="top">
        <h1>Catch
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span>
          Day</h1>
        <h3 className="tagline"><span>{this.props.tagline}</span></h3>
      </header>
    )
  }
});

/*
 Order
 */

var Order = React.createClass({
  render : function() {
    return (
      <p>Order</p>
    )
  }
});

/*
 Inventory
 */

var Inventory = React.createClass({
  render : function() {
    return (
      <p>Inventory</p>
    )
  }
});

/*
  StorePicker
  This will let us make <StorePicker/>
*/

var StorePicker = React.createClass({

  render : function() {
    return (
      <form className="store-selector">
        <h2>Please Enter A Store</h2>
        {/* React uses single curly brackets for variable insertion - no interpolation syntax needed
        also need the format displayed here to make a comment while inside of a React component, otherwise
        the text will be displayed to the browser page */}
        {/* using required in the line below forces user input before allowing submission */}
        <input type="text" ref="storeId" required />
        <input type="Submit" />
      </form>
    )
  }

});

/*
Not Found
 */

var NotFound = React.createClass({
  render : function() {
    return <h1>Not Found!</h1>
  }
});

/*
Routes
 */

var routes = (
  <Router history={createBrowserHistory()}>
    <Router path="/" component={StorePicker}/>
    <Router path="/store/:storeId" component={App}/>
    <Router path="*" component={NotFound}/>
  </Router>
);

ReactDOM.render(routes, document.querySelector('#main'));
