import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Modal from './Modal.jsx';
import FrontImages from './FrontImages.jsx';

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
    axios({
      method: 'GET',
      url: `/listing/${Math.ceil(Math.random() * 100)}`,
    })
      .then((res) => {
        console.log(res.data);
        this.setState({ data: res.data.imgArr, name: res.data.name });
      })
      .catch((err) => { console.log(err); });

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
