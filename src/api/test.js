import axios from 'axios'

export default {
  getArticleTest(){
    return axios.get('https://raw.githubusercontent.com/codecosine/writingSource/master/posts/PostSeries/2017-01-01-%E6%B7%B1%E5%85%A5%E7%B3%BB%E5%88%97-%E7%B1%BB%E5%9E%8B%E5%92%8C%E5%80%BC(1).md')
  }
}
