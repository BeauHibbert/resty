import React, { useState } from 'react';
import axios from 'axios';
import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';


const [data, setData] = useState(null);
const [requestParams, setRequestParams] = useState({});

class App extends React.Component {


  callApi = (requestParams) => {
    const method  = requestParams.method
    const url = requestParams.url
    const body = requestParams.body
    let data 
    if (method === 'get') {
      data = axios.get(url)
    } else if (method === 'post') {
      data = axios.post(url, body)
    } else if (method === 'put') {
      data = axios.put(url, body)
    } else if (method === 'delete') {
      data = axios.delete(url, data)
    } else {console.log('not a valid request')}

    setData(data);
    setRequestParams(requestParams);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={this.callApi} />
        <Results data={data} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
