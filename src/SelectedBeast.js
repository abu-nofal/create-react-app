import React, { Component } from 'react';
import {Button,Modal} from 'react-bootstrap';

class SelectedBeast extends Component {

    constructor(){
        super()
        this.state={
            show:false
        }
    }
    handleModel=()=>{
        this.setState({
            show:!this.state.show
        })
    }
    render() {
        
        
        return (
            <>
            <Button onClick={this.handleModel}>
              show more  
            </Button>
      
            <Modal show={this.state.show} onHide={this.handleModel}>
              <Modal.Header closeButton >
                <Modal.Title>{this.props.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <img src={this.props.image_url} width='100%' height='200px' />
                  <br/>
              
                  <p>{this.props.description}</p>
                  
                  <p> number of horns: {this.props.horns}</p>
                  <span> <i className="fas fa-heart"> {this.props.vote}</i></span>
                  </Modal.Body>
              <Modal.Footer>
                <Button  onClick={this.handleModel}>
                  Close
                </Button>
               
              </Modal.Footer>
            </Modal>
          </>
        )
    }
}

export default SelectedBeast
