/*
 StorePicker
 This will let us make <StorePicker/>
 */

import React from 'react';
import { History } from 'react-router';
import h from '../helpers';
import reactMixin from 'react-mixin';
import autobind from 'autobind-decorator';

@autobind
class StorePicker extends React.Component {

  goToStore(event) {
    event.preventDefault();
    // get data from the input
    var storeId = this.refs.storeId.value;
    this.history.pushState(null, '/store/' + storeId);
    // switch from <StorePicker/> to <App/>
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        {/* React uses single curly brackets for variable insertion - no interpolation syntax needed
         also need the format displayed here to make a comment while inside of a React component, otherwise
         the text will be displayed to the browser page */}
        {/* using required in the line below forces user input before allowing submission */}
        <input type="text" ref="storeId" defaultValue={h.getFunName()} required />
        <input type="Submit" />
      </form>
    )
  }
}

reactMixin.onClass(StorePicker, History);

export default StorePicker;
