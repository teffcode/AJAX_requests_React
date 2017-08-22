import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'antd';
import 'antd/dist/antd.css';

const columns = [{
  title: 'Name',
  dataIndex: 'name'
}]

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        this.setState({ 
          users: res.data 
        });
      });
  }

  render() {
    return (
      <div style={{ padding:'50px' }}>
        <h1 style={{ marginBottom:'30px' }}>Names</h1>
        <Table
          columns={columns} 
          dataSource={ this.state.users.map( user => user )}
        />
      </div>
    );
  }
}

export default App;
