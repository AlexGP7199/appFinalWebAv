import React from 'react';
import axios from 'axios';


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
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Type the title to search:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Search</button>
          <ul>
              { this.state.photos.map(photo => <li>{photo.title}</li>)}
              { this.state.photos.map(photo => <li> <img src= {photo.thumbnailUrl} alt = 'IMG'></img></li>)}
              { this.state.photos.map(photo => <li>{photo.url}</li>)}
          </ul>
        </form>
      </div>
    )
  }
}