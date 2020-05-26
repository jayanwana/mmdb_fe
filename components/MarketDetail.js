import React, { Component } from "react";
import { Image } from "react-bootstrap";

const imageBase = "https://mmdb-api.uc.r.appspot.com/static/MarketImages/"

export default class MarketDetail extends Component {
  constructor(props) {
    super (props);
    this.state = {
      currentMarket: this.props.currentMarket,
      imageList: []
    }
  }

  static getDerivedStateFromProps(props, state) {
    if(props.currentMarket !== state.currentMarket){
      if (props.currentMarket){
      let imageList = [];
      for (let key in props.currentMarket.img){
        if(key==='_id'){ continue }
        const imagePath = `${imageBase}${props.currentMarket.img[key]}`
        imageList.push(imagePath)
      }
      return {
        imageList: imageList
      }
      }}
      return null;
  }
  render() {
    const currentMarket = this.props.currentMarket
    const Images = this.state.imageList.map((key, index)=> {
      <img key={index} scr={key}/>
    })
    return (
      <div className="market-detail">
        {currentMarket ? (
          <div>
            <div className="market-info">
              <h4>Market Details</h4>
              <hr/>
              <div>
                <label>
                  <strong>Market Name:</strong>
                </label>
                <p>{currentMarket.name}</p>
              </div>
              <div>
                <label>
                  <strong>Food Category:</strong>
                </label>
                <p>{currentMarket.foodCategory}</p>
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>
                <p>{currentMarket.description}</p>
              </div>
              <div>
                <label>
                  <strong>Address:</strong>
                </label>
                <p>{currentMarket.address}</p>
              </div>
            </div>

            <div>
              {currentMarket? this.state.imageList.map((key, index)=> {
                return (<img key={index} src={key} width="60" height="80"/>)
              }) : ''
              }
            </div>
          </div>
        ) : (
          <div>
            <br></br>
            <p>Please click on a Market...</p>
          </div>
        )}
      </div>
        )}
        }
