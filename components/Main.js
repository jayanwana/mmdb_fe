import React, { Component } from "react";
import Router from "next/router";
import { Form, Row, Col, Button, Alert} from "react-bootstrap";
import MmDataService from "../utils/axios.service";
import SearchBar from "./SearchBar";
import MarketDetail from "./MarketDetail";
import MarketMap from "./googleMaps";
import LocationSearch from "./locationSearch"

export default class Main extends Component {
  constructor(props) {
    super (props);
    this.state = {
      markets: [],
      currentMarket: null,
      currentIndex: -1,
      adminUser: this.props.admin
      };
    this.retrieveMarkets = this.retrieveMarkets.bind(this);
    this.selectMarket = this.selectMarket.bind(this);
    this.search = this.search.bind(this);
    this.getPosition = this.getPosition.bind(this);
    this.locationSearch = this.locationSearch.bind(this);
  }

  componentDidMount() {
    this.retrieveMarkets()
  }

  retrieveMarkets() {
    MmDataService.getAllMarkets().then(response => {
      this.setState({
        markets: response.data
      })
    }).catch(
        error => console.log(error)
      )
  }

  selectMarket(market, index) {
    this.setState({
      currentMarket: market,
      currentIndex: index
    })
  }

  async search(term, method) {
    if (term && method){
    const postData = {
      term: term,
      method: method
    }
    const headers = { headers: {
      "Content-type": "application/json"
    }}
    MmDataService.findMarket(JSON.stringify(postData), headers).then(response => {
      this.setState({markets: response.data, currentMarket: null})
    }).catch(error => console.log(error))
  }}

  async getPosition() {
    return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(res, rej);
    });
  }

  async locationSearch(){
    const headers = { headers: {
      "Content-type": "application/json"
    }}
    this.getPosition().then(position=> {
      const postData = {
        coordinates: [position.coords.latitude, position.coords.longitude]
      }
      MmDataService.findMarketByLocation(JSON.stringify(postData), headers).then(response => {
        this.setState({markets: response.data, currentMarket: null})
      }).catch(error => console.log(error))
    }).catch(error => console.log(error))
    }

  render() {
    const { markets, currentIndex, currentMarket} = this.state;
    return (
      <div className="container">
        {this.state.adminUser &&
          <Button onClick={this.props.handler} className="add-market" variant="dark">Add Market</Button>
        }
        {!this.state.adminUser && <h4>Search The Market Database</h4>}
        <SearchBar
          handler={this.search}
        />
        {!this.state.adminUser && <LocationSearch handler={this.locationSearch}/>}
        <div className="market-display">
          <div className="market-list">
            <ul className="list-group">
              {markets &&
                markets.map((market, index) => (
                  <li
                    className={
                      "list-group-item " +
                      (index === currentIndex ? "active" : "")
                    }
                    onClick={() => this.selectMarket(market, index)}
                    key={index}
                  >
                    {!this.state.adminUser && <strong>{market.name}</strong>}
                    {this.state.adminUser &&
                      <div className="admin-control">
                        <strong>{market.name}</strong>
                        <div>
                          <Button variant="dark" onClick={() => this.props.update(market)}>update</Button>
                          <Button variant="danger" onClick={() => this.props.delete(market.id)} >delete</Button>
                        </div>
                      </div>}
                  </li>
                ))}

            </ul>
          </div>
          {markets.length > 0 ? <MarketDetail currentMarket={currentMarket}/> : "No Markets"}
        </div>
        <div>
          {markets.length > 0 && <MarketMap markets={markets}/>}
        </div>
      </div>
    )
  }
}
