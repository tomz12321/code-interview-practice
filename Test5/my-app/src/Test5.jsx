import { Component } from 'react';
import * as ReactDOM from 'react-dom';
/** Can you explain the problem with the following code, and how to fix it. **/
class Count extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleAddCount = this.handleAddCount.bind(this);
  }
  handleAddCount() {
    this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 1 }); //這邊的setState 是重複的。實際上算同一個 render 畫面，所以 count 只會 +1
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleAddCount}>Add</button>
      </div>
    );
  }
}
ReactDOM.render(<Count />, document.getElementById('root'));

export default Count