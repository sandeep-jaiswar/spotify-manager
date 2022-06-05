import React from 'react'
import { connect } from 'react-redux';
import "./index.scss";

export const Login = () => {

  return (
    <div className="login-wrapper">
    </div>
  )
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Login)