const api = {

  async getArticlesBySource(sourceId) {
      const response = await fetch(`https://newsapi.org/v1/articles?source=${sourceId}&apiKey=fdb46689713a49b8b5f9468dbcce7c3e`)
      return await response.json();
  },

  async getSources() {
    const response = await fetch(`https://newsapi.org/v1/sources?language=en`)
    return await response.json();
  }

}

export default api;
