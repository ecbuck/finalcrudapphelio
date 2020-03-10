import React, { Component } from "react";
import axios from "axios";

//import { create } from "domain";

export default class Create extends Component {
  constructor(props) {
    super(props);

    this.state= {
      title: "",
      genre: "",
      origin: "",
      author: ""
    };

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeGenre = this.onChangeGenre.bind(this);
    this.onChangeOrigin = this.onChangeOrigin.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChangeTitle(e) {
    this.setState ( {
      title: e.target.value
    });
  }
  onChangeGenre(e) {
    this.setState ( {
      genre: e.target.value
    });
  }
  onChangeOrigin(e) {
    this.setState ( {
      origin: e.target.value
    });
  }
  onChangeAuthor(e) {
    console.log('Setting author to: ', e.target.value);
    this.setState({
      author: e.target.value
    });
    console.log('state is now: ', this.state);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('my current state is: ', this.state);

    const obj = {
      title:this.state.title,
   
      genre:this.state.genre,
      
      origin:this.state.origin,
     
      author:this.state.author,
   
    };
    //localhost:4000/api/series
    console.log('current obj: ', obj);
    console.log('state was: ', this.state);
    axios
      .post("http://localhost:4000/api/series", obj)
      .then(res => console.log(res.data));
      
      

    console.log(
      `The values are ${this.state.title}, ${this.state.genre}, and ${this.state.origin}, and ${this.state.author}`
    );

    // this.props.onSubmit(this.props.id);
  }
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Add New Series</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Add Title: </label>
            <input
              type="text"
              id="title"
          
              //value={this.state.title}
              onChange={this.onChangeTitle}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Add Genre: </label>
            <input
              type="text"
              id="genre"
              //value={this.state.genre}
              onChange={this.onChangeGenre}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Add Origin : </label>
            <input
              type="text"
              id="origin"
              //value={this.state.origin}
              onChange={this.onChangeOrigin}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Add Author : </label>
            <input
              type="text"
              id="author"
              //value={this.state.author}
              onChange={this.onChangeAuthor}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Add Series"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
