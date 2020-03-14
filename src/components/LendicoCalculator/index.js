import React from 'react'
import PropTypes from 'prop-types'

class LendicoCalculator extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      amount: '',
      duration: '',
      monthlyInstallment: ''
    }

    this.handleClicked = this.handleClicked.bind(this)
    this.handleAmount = this.handleAmount.bind(this)
    this.handleDuration = this.handleDuration.bind(this)
  }

  handleAmount (event) {
    this.setState({
      amount: event.target.value
    })
  }

  handleDuration (event) {
    this.setState({
      duration: event.target.value
    })
  }

  handleClicked (event) {
    event.preventDefault()

    this.setState({
      monthlyInstallment: parseFloat(
        parseFloat(this.state.amount) / parseInt(this.state.duration)
      ).toFixed(2)
    })
  }

  render () {
    const { amount, duration, monthlyInstallment } = this.state
    return (
      <>
        <div className='calculator'>
          <div className='from'>
            <div className='form-control'>
              <label htmlFor='name'>Amount: </label>
              <input
                type='text'
                id='amount'
                name='amount'
                required
                value={amount}
                onChange={this.handleAmount}
              />
            </div>
            <div className='form-control'>
              <label htmlFor='name'>Duration: </label>
              <input
                type='text'
                id='duration'
                name='duration'
                required
                value={duration}
                onChange={this.handleDuration}
              />
            </div>
            <button onClick={this.handleClicked}>Ok</button>
          </div>
          <div className='display-installment'>
            <h1>
              Monthly Installment: <span>{monthlyInstallment}</span>
            </h1>
          </div>
        </div>
      </>
    )
  }
}
LendicoCalculator.propTypes = {
  amount: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired
}

LendicoCalculator.defaultProps = {
  amount: 1000.0,
  duration: 12
}

export default LendicoCalculator
