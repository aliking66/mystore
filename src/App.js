import React from 'react';
import data from "./data.json"; 
import Products from './components/Products';


class App extends React.Component {
  constructor(){
    super();
    this.state={
      products:data.products,
      size:"",
      sort:"",
    }
  }
  render(){
  return (
<div className="grid-container">
  <header> 
    <a href="/">react shopping cart</a>
  </header>
  <main>
      <div className="content">
        <div className="main">
           <Products products={this.state.products}></Products>
        </div>
        <div className="sidebar">
            Cart items
          </div>
      </div>
  </main>
  <footer>
    all right is reserved.
  </footer>
</div>
  );
  }
}

export default App;
