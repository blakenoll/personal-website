import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

class TextForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: '',
      message: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    if (!this.state.message.length) {
      return
    }
    const url = `https://cwp7tpybl7.execute-api.us-west-2.amazonaws.com/default/textFromTwillio?to=${this.state.number}&body=${this.state.message}`
    console.log(url)
    fetch(url, { method: "POST"}).then(
      res => res.json()
    )
    this.setState({number: '', message: ''})
  }

  render() {
    return(
      <div className={this.props.className}>
        <h2>Send a text</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="number">Enter Phone number</label>
          <input id="number" onChange={this.handleChange} value={this.state.number} name="number" type="number"/>
          <label htmlFor="message">Message</label>
          <textarea id="message" onChange={this.handleChange} value={this.state.message} name="message"/>
          <button>Send</button>
        </form>
      </div>
    )
  }

}

const StyledForm = styled(TextForm)`
  form {
    display: flex;
    flex-direction: column;
    input {
      width: 200px;
      margin-bottom: 10px;
      border-radius: 5px;
      border: 1px solid grey;
      padding: 0px 5px;
    }
    textarea {
      border-radius: 5px;
      border: 1px solid grey;
    }
    button {
      padding: 10px 20px;
      margin: 10px 0px;
      background: dodgerblue;
      color: #fff;
      border-radius: 50px;
      width: fit-content;
      display: block;
    }
  }
`

export default StyledForm