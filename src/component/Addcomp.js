import React, { Component } from 'react'

export default class Addcomp extends Component {

    constructor(props){
        super(props);
        this.state = {
             productName: "" , 
             productprice : 0,
        };
    }

  render() {
    return (
        <div className="container my-4">
        <form onSubmit={(e) => {
            e.preventDefault();
            this.props.additem(this.state.productName , Number(this.state.productprice));
            }}
        >
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="name"
            name = "productname"
            onChange={(e) => {
                this.setState({productName: e.currentTarget.value})
            }}
            value = {this.state.productName}
          />
     
        </div>
        <div className="mb-3">
          <label htmlFor="inputprice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name = "productprice"
            onChange={(e) => {
                this.setState({productprice: Number(e.currentTarget.value)});
            }}
            value = {this.state.productprice}
          />
        </div>
        
        <button type="submit" className="btn btn-danger" >
          ADD ITEM
        </button>
      </form>
      
      </div>
    )
  }
}
