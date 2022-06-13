// A class component can be defined as an ES6 class
// that extends the base Component class included in the React library
class GroceryListItem extends React.Component {

  // A `constructor` method is expected on all ES6 classes
  // When React instantiates the component,
  // it will pass `props` to the constructor
  constructor(props) {

    // Equivalent to ES5's React.Component.call(this, props)
    super(props);

    // `state` is just an object literal
    this.state = {
      done: false,
      hover: false
    };
  }

  // When a list item is clicked, we will toggle the `done`
  // boolean, and our component's `render` method will run again
  onListItemClick() {
    this.setState({
      done: !this.state.done,
      hover: !this.state.hover
    });
  }

  onMouseHover() {
    this.setState({
      hover: !this.state.hover
    });
  }

  onMouseOff() {
    this.setState({
      hover: !this.state.hover
    })
  }

  // Every class component must have a `render` method
  // Stateless functional components are pretty much just this method
  render() {
    // Making the style conditional on our `state` lets us
    // update it based on user interactions.
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hovering ? 'bold' : 'normal'
    };

    // You can pass inline styles using React's `style` attribute to any component
    // snake-cased css properties become camelCased this this object
    // `props` is no longer passed as an argument,
    // but instead accessed with `this.props`
    return (
      <li
        style={style}
        onMouseOver={this.onMouseHover.bind(this)}
        onMouseOff={this.onMouseOff.bind(this)}
        onClick={this.onListItemClick.bind(this)}
      >
        {this.props.meat}
      </li>
    );
  }
}

// create a GroceryList component that contains an unordered list of 2 grocery items
// Update our `TodoList` to use the new `TodoListItem` component
// This can still be a stateless function component!
const GroceryList = (props) => {
  // var onListItemClick = (event) => {
  //   console.log('I got clicked');
  // };

  return (
    <ul>
      {props.tacoMeats.map(meat =>
      <GroceryListItem meat={meat} />
      )}
    </ul>
  );
};

const App = () => (
  <h1>Hello World</h1>
  <div>
    <h2>Grocery List</h2>
    <GroceryList tacoMeats={['Carne Asada', 'Al Pastor', 'Carnitas', 'Pollo', 'Lengua', 'Chorizo']} />
  </div>
);

// Render this component to the div tag in index.html with an id of app
// ReactDOM.render(<App />, document.getElementById("actual-dom-element-where-I-want-to-render-my-component"));
ReactDOM.render(<App />, document.getElementById("app"));

// npx babel . --out-dir=compiled --presets=@babel/preset-react --ignore=node_modules,compiled --source-maps=inline -w