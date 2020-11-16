import React from 'react';
import Axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './imageList';

class App extends React.Component {

    state = { images : [] };

     onSearch = async (term) => {
        const response = await  Axios.get('https://api.unsplash.com//search/photos',{
            params : { query : term },
            headers : {Authorization : 'Client-ID tk03YF7E9zHdSfnK-PplA0Qo04dCHE8xorn5pA2tiM4' }

        });
        console.log(response.data.results);
        this.setState ({ images: response.data.results   });
    }


    render() {
        return (<div className="ui container" style={{ marginTop: '10px' }}>
            <SearchBar onSubmit={this.onSearch} />
            <ImageList images= {this.state.images} />
        </div>);
    }

}

//hi boy
export default App;