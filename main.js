const e = React.createElement;
const button=document.getElementById("click");
const image = document.getElementById('image');
const domContainer = document.querySelector('#Timer');
const root = ReactDOM.createRoot(domContainer);
button.addEventListener('click', () => {
  fetch(' https://randomfox.ca/floof/  ') .then(function(response){
      return response.json();
  }).then(function(json){
      image.src = json["image"];
  });
});

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return e(
      "div",
      null,
      "Seconds: ",
      this.state.seconds
    );
  }
}

root.render(e(Timer, null));
