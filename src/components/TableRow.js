import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



class TableRow extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete(id) {
      console.log(`handleDelete id: ${id}`)
        axios.delete(`http://localhost:4000/api/series/delete/${id}`)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.title}
          </td>
          <td>
            {this.props.obj.genre}
          </td>
          <td>
            {this.props.obj.origin}
          </td>
          <td>
            {this.props.obj.author}
          </td>
          <td>
          <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
             {/* <button className="btn btn-primary">Edit</button>  */}
          </td>
          <td>
            <button onClick={(event)=>this.handleDelete(this.props.obj._id)} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;