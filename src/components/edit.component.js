import React, { Component } from 'react';
import axios from 'axios';
//import { create } from 'domain';


export default class Edit extends Component {

    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeGenre = this.onChangeGenre.bind(this);
        this.onChangeOrigin = this.onChangeOrigin.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          title: '',
          genre: '',
          origin:'',
          author:''
        }
      }
    
      componentDidMount() {
          axios.get('http://localhost:4000/series/edit/'+this.props.match.params.id)
              .then(response => {
                  this.setState({ 
                    title: response.data.title, 
                    genre: response.data.genre,
                    origin: response.data.origin,
                    author: response.data.author});
              })
              .catch(function (error) {
                  console.log(error);
              })
        }
    
      onChangeTitle(e) {
        this.setState({
          title: e.target.value
        });
      }
      onChangeGenre(e) {
        this.setState({
          genre: e.target.value
        })  
      }
      onChangeOrigin(e) {
        this.setState({
          origin: e.target.value
        })
      }
      onChangeAuthor(e) {
        this.setState({
          author: e.target.value
        })
      }

      onSubmit(e) {
        e.preventDefault();
        const obj = {
          title: this.state.title,
          genre: this.state.genre,
          origin: this.state.origin,
          author: this.state.author
        };
        axios.post('http://localhost:4000/source/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        //this.props.history.push('/index');
      }
     
      render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3 align="center">Update Title</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title:  </label>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={this.state.title}
                          onChange={this.onChangeTitle}
                          />
                    </div>
                    <div className="form-group">
                        <label>Genre: </label>
                        <input type="text" 
                          className="form-control"
                          value={this.state.genre}
                          onChange={this.onChangeGenre}
                          />
                    </div>
                    <div className="form-group">
                        <label>Origin: </label>
                        <input type="text" 
                          className="form-control"
                          value={this.state.origin}
                          onChange={this.onChangeOrigin}
                          />
                    </div>
                    <div className="form-group">
                        <label>Author: </label>
                        <input type="text" 
                          className="form-control"
                          value={this.state.author}
                          onChange={this.onChangeAuthor}
                          />
                    </div>
                    <div className="form-group">
                        <input type="submit" 
                          value="Update Series" 
                          className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
      }
    }
