import React, { Component } from 'react'

class Modal extends Component {
  componentWillUnmount() {
    console.log('Modal is going away......byebye~')
  }

  render() {
    return (
      <div id='modal1' className='modal'>
        <div className='modal-content'>
          <h4>{this.props.cityName}</h4>
          <p>
            High: {this.props.high} - Low: {this.props.low}
          </p>
          <p>
            {this.props.weather} <img src={this.props.iconUrl} alt='icon' />
          </p>
        </div>
        <div className='modal-footer'>
          <a
            href='#!'
            className='modal-close waves-effect waves-green btn-flat'
          >
            Close
          </a>
        </div>
      </div>
    )
  }
}

export default Modal
