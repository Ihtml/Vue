
import '../assets/styles/footer.styl'

export default {
  data(){
    return {
      author: "Vue2.0"
    }
  },
  render(){
    return (
        <div id="footer">
          <span>Written by {this.author}</span>
        </div>  
      )
  }
}