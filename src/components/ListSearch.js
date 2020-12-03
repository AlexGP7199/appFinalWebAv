import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';


export default class List extends React.Component {

  state = {
    title: '',
    photos: []
  }

  handleChange = event => {
    this.setState({ title: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const photo = {
      title: this.state.title
    };

    axios.get(`https://jsonplaceholder.typicode.com/photos?title=${photo.title}`)
      .then(res => {
        const photos = res.data;
        this.setState({ photos });
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div className='d-flex justify-content-center align-items-center'>
        <form onSubmit={this.handleSubmit}>
          <label>
            Type the title to search:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Search</button>
          <Card style={{ width: '18rem' }}>
          {this.state.photos.map(photo => <Card.Img variant="top" src={photo.thumbnailUrl} alt = 'IMG' />)}
            <Card.Body>
              <Card.Title> Title: { this.state.photos.map(photo => <p>{photo.title}</p>)}</Card.Title>
              <Card.Text>
                URL :{ this.state.photos.map(photo => <p>{photo.url}</p>)}
              </Card.Text>
            </Card.Body>
          </Card>
        </form>
      </div>
    )
  }
}