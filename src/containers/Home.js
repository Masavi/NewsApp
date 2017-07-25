import React, { Component } from 'react';
import api from '../api';
import { NavLink } from 'react-router-dom';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sources: []
    }
    this.getSources = this.getSources.bind(this);
  }

  componentDidMount () {
    this.getSources()
  }

  async getSources() {
    // console.log("si")
    let response = await api.getSources();
    this.setState({
      sources: response.sources
    })
    console.log(response.sources)
  }

  // This function handles the rendering of html content
  render() {
    return (
      <div className='Home'>
        <br/>
        <div className="row">
        {
          this.state.sources.map((source) =>
          <NavLink to={`/articles/${source.id}`}>
            <div key={source.id} className="col s8 offset-s2">
              <div className="card deep-purple lighten-1">
                <div className="card-content white-text">
                   <span className="card-title"><i>{source.name}</i></span>
                  <p>{source.description}</p>
                </div>
              </div>
            </div>
          </NavLink>
          )
        }
        </div>
      </div>
    );
  }
}

export default Home;
