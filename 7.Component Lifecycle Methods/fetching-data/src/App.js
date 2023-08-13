import "./styles.css";
import React from "react";
import Image from "./components/Image";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  }

  // Use the required lifecycle methods here
  static getDerivedStateFromProps(){
    return null;
  }
  componentDidMount(){
       fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
            .then(response => response.json())
            .then(photo => this.setState({photos: photo, loading: false}))
            .catch((err) => {
              console.log(err)
              this.setState({loading: false})
            })
  }
  render() {
    // Display loading status here
    const {photos, loading} = this.state;
    return (
      <div className="App">
        {loading?
        (<p>Loading...</p>)
      :
      (photos.map((photo) => {
        return <Image key={photo.id} photo={photo} />;
      }))
      }
      </div>
    );
  }
}
