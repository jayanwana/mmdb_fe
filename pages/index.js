import Link from 'next/link';
import Head from 'next/head';
import {useState} from "react"
import Navigation from '../components/nav';
import Main from '../components/Main';
const ico = require('../public/favicon.ico');

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mini Market DataBase </title>
        <link rel="icon" href={ico} />
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css?family=Big+Shoulders+Display|Montserrat|Orbitron|Roboto&display=swap" rel="stylesheet"/>
      </Head>
      <div className="container">
        <Navigation/>
        <div className="container">
          <h1>Mini Market Database</h1>
          <Main admin={false}/>
        </div>
      </div>
    </div>
  )
}
