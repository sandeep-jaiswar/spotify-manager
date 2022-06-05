import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import locationHoc from '../../template/locationHoc'

export const Home = (props) => {
  return (
    <div className='home-wrapper'>Home</div>
  )
}

Home.propTypes = {
  
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(locationHoc(Home))