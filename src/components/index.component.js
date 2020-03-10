import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
//import { BrowserRouter } from 'react-router-dom';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {series: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4000/api/series')
        .then(response => {
          this.setState({ series: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.series.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">Series I'm Watching List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Origin</th>
                <th>Author</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }

