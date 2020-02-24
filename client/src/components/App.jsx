import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Modal from './Modal.jsx';
import FrontImages from './FrontImages.jsx';
import faker from 'faker';

const NameTitle = styled.h1`
  color: #606060;
  font-family: Helvetica;
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // show state is for Modal
    // data is an array of objects that have an image property with url string value
    // currentImage is the index in data of the current image
    this.state = {
      show: false,
      data: [],
      currentImage: 0,
      name: '',
    };
    // request images for a random accomodationId
    const userId = 500000;
    const listingId = 'f3ddf2be-0e43-4ef9-956a-0027793d5c52';
    axios.get(`/user?userId=${userId}&listingId=${listingId}`)
      .then((res) => {
        // console.log(res.data[0].title);
        const photos = [];
        for(let key in res.data[0].photos){
          photos.push(res.data[0].photos[key].split(',')[0]);
        }
        this.setState({ data: photos, name: res.data[0].title });
      })
      .catch((err) => { console.log(err); });

    const postUserId = 5000000;
    const photos = `{0: 'abc@google.com, I love hippos', 2: 'def@google.com, I love giraf'}`;
    const title = faker.company.catchPhrase();
    const user = faker.internet.userName();
    axios.post(`/user?userId=${postUserId}`, {
      photos: photos,
      title: title, 
      user: user,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    this.showModal = this.showModal.bind(this);
    this.handleArrowClick = this.handleArrowClick.bind(this);
    this.handleThumbClick = this.handleThumbClick.bind(this);
    this.handleFrontImageClick = this.handleFrontImageClick.bind(this);
  }

  // d is boolean (direction). true represents right. false represents left.
  handleArrowClick(d) {
    if (d) {
      if (this.state.currentImage < this.state.data.length - 1) {
        this.setState({ currentImage: this.state.currentImage + 1 });
      } else {
        this.setState({ currentImage: 0 });
      }
    } else {
      if (this.state.currentImage === 0) {
        this.setState({currentImage: this.state.data.length - 1});
      } else {
        this.setState({currentImage: this.state.currentImage - 1});
      }
    }
  }

  handleThumbClick(i) {
    this.setState({ currentImage: i });
  }

  showModal() {
    this.setState({ show: !this.state.show });
  }

  handleFrontImageClick(i) {
    this.setState({ currentImage: i }, () => { this.showModal(); });
  }

  render() {
    return (
      <div>
        {/* <NameTitle>air-carousel</NameTitle> */}
        <FrontImages imgs={this.state.data} click={this.handleFrontImageClick} />
        <button style={{ float: 'right' }} onClick={this.showModal}> View Images </button>
        <Modal show={this.state.show} showModal={this.showModal} imgs={this.state.data} name={this.state.name}
          currentImage={this.state.currentImage} handleArrowClick={this.handleArrowClick} handleThumbClick={this.handleThumbClick} />
        <NameTitle>{this.state.name}</NameTitle>
      </div>
    );
  };
}
