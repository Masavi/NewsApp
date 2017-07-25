import React, { Component } from 'react';
import api from '../api'

class Articles extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      source: ''
    }
    this.getArticles = this.getArticles.bind(this);
  }

  componentDidMount() {
    this.getArticles()

  }

  async getArticles() {
    let response = await api.getArticlesBySource(this.props.match.params.source_id)
    // console.log(response)
    this.setState({
      articles: response.articles,
      source: response.source
    })
    console.log(response)
  }

  // This function handles the rendering of html content
  render() {
    return (
      <div className='Articles container'>
        <h1 className="center"> {this.state.source}</h1>
        <br/>
        <div className="row">
        {
          this.state.articles.map((article) =>

            <div key={article.url} className="col s6">

              <div className="card">
                {/* Imagen de la Tarjeta */}
                <div className="card-image">
                  <img src={article.urlToImage} alt="news-related"/>
                  <span className="card-title">{article.title}</span>
                 </div>

                {/* Contenido de la Tarjeta */}
                <div className="card-content">
                  <p>{article.description}</p>
                </div>

                {/* Acción con la Tarjeta */}
                <div className="card-action">
                  <a href={article.url}>Read full article</a>
                </div>
              </div>
            </div>

          )
        }
        </div>
      </div>
    );
  }
}

export default Articles;
