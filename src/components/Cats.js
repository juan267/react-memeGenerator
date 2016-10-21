import React, {Component} from 'react'
import CircularProgress from 'material-ui/CircularProgress';


export default class  Cats extends Component {
  constructor() {
    super()
    this.state = {
      imgUrl: '',
      loading: true
    }
  }
  componentWillReceiveProps(){
    this.fetchImage()
  }
  componentDidMount() {
    this.fetchImage()
  }
  fetchImage(){
    fetch('http://random.cat/meow')
      .then(data => data.json())
      .then(imgUrl => this.setState({imgUrl: imgUrl.file, loading: false}))
  }
  render() {
    return (
      this.state.loading ? <CircularProgress /> :
      <div >
        <img style={styles.catImg} src={this.state.imgUrl}/>
      </div>
    )
  }
}

const styles = {
  catImg: {
    width: 700,
  }
}

