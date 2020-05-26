import React, { Component } from "react";
import Head from "next/head";
import PropTypes from 'prop-types';
import ico from '../public/favicon.ico';
import LoginForm from '../components/loginForm'

export default class Login extends Component {
  static pageTransitionDelayEnter = true
  constructor(props) {
    super (props);
    this.state = {
      loaded: false,
    }
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.props.pageTransitionReadyToEnter()
      this.setState({ loaded: true })
    }, 2000)
  }

  componentWillUnmount() {
    if (this.timeoutId) clearTimeout(this.timeoutId)
  }

  render () {
    if (!this.state.loaded) return null;
    return (
      <div className="container">
        <Head>
          <title>Login</title>
          <link rel="icon" href={ico} />
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
          <link href="https://fonts.googleapis.com/css?family=Big+Shoulders+Display|Montserrat|Orbitron|Roboto&display=swap" rel="stylesheet"/>
        </Head>
        <div className="Container">
          <h2>Adim Login</h2>
          <LoginForm/>
        </div>
      </div>
        )}
    }


Login.propTypes = {
  pageTransitionReadyToEnter: PropTypes.func,
}

Login.defaultProps = {
  pageTransitionReadyToEnter: () => {},
}
