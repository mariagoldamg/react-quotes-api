import { Component } from 'react';
import './App.css';


class App extends Component {

state ={
 // content:'',//null
  //author:'',
  image: null//null
}

async componentDidMount(){
//const url = 'https://api.quotable.io/random';
//const response = await fetch(url);
//const data = await response.json();

//this.setState({content: data.content, author:data.author })

const url = 'https://random.dog/woof.json';
const response = await fetch(url);
const data = await response.json();
this.setState({image:data.url})

}
  render(){
  return (
    <div>
      <img src={this.state.image} alt='dog' width='300px' />
  <p>{this.state.content}</p>
  <p>{this.state.author}</p>
    </div>
  )
}
}
export default App;
