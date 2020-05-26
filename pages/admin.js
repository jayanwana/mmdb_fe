import React, { Component } from "react";
import Router from "next/router";
import Head from "next/head";
import { Form, Row, Col, Button, Alert} from "react-bootstrap";
import PropTypes from 'prop-types';
import AuthToken from "../utils/auth_token";
import MmDataService from "../utils/axios.service";
import MarketForm from '../components/marketForm';
import Navigation from '../components/nav';
import ico from '../public/favicon.ico';
import Main from '../components/Main';


class Admin extends Component {
  static pageTransitionDelayEnter = true
  constructor(props) {
    super (props);
    this.state = {
      loaded: false,
      adminUser: false,
      showForm: false,
      market: null,
      update: false
    }
    this.showForm = this.showForm.bind(this);
    this.deleteMarket = this.deleteMarket.bind(this);
    this.updateMarket = this.updateMarket.bind(this);
  }

  componentDidMount() {
      this.timeoutId = setTimeout(() => {
      this.props.pageTransitionReadyToEnter()
      this.setState({ loaded: true })
    }, 2000);
    let token = AuthToken.getToken();
    let df = AuthToken.decodeToken(token)
    if (token){
      let Auth = new AuthToken(token);
      if (Auth.isValid()){
        this.setState({
            adminUser: true,
           })
    }
  }}

  componentWillUnmount() {
    if (this.timeoutId) clearTimeout(this.timeoutId)
  }

  showForm(clear){
    clear ?
    this.setState({showForm: !this.state.showForm, market: null, update: false}) :
    this.setState({showForm: !this.state.showForm})
  }

  updateMarket(market) {
    this.setState({
      market: market,
      update: true,
      showForm: true,
    })
    //
  }

  deleteMarket(id) {
    const token = AuthToken.getToken();
    const headers = {  headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
      }}
    MmDataService.deleteMarket(id, headers).then(response => {
      alert("Market Successfully Deleted")
      Router.push(`${process.env.BACKEND_URL}/admin`);
    }).catch(error => {
      if(error.response.status===401){
        AuthToken.deleteToken()
        alert("Please Login Again")
        Router.push(`${process.env.BACKEND_URL}/login`);
      }
      console.log(error)
      })
  }

  render() {
    const rand = () => Math.floor(Math.random()*100)
    if (!this.state.adminUser) {
      return null;
    }
    return(
      <div>
        <Head>
          <title>Admin</title>
          <link rel="icon" href={ico} />
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
          <link href="https://fonts.googleapis.com/css?family=Big+Shoulders+Display|Montserrat|Orbitron|Roboto&display=swap" rel="stylesheet"/>
        </Head>
        <div className="container">
          <Navigation/>
          {this.state.showForm &&
            <MarketForm key={rand()} close={this.showForm} market={this.state.market} update={this.state.update}/>}
          <h1>Admin</h1>
          <Main admin={true} handler={this.showForm} update={this.updateMarket} delete={this.deleteMarket}/>
        </div>
      </div>
        )
  }
}

Admin.propTypes = {
  pageTransitionReadyToEnter: PropTypes.func,
}

Admin.defaultProps = {
  pageTransitionReadyToEnter: () => {},
}


export default Admin
