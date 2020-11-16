import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    handleInputChange = (event) => {
        console.log(event.target.value);
    }

    
    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    render() {
        return (
            <div className="ui category search">
                <form onSubmit={ this.handleFormSubmit } className="ui icon input">
                    <div className="field">
                        <label></label>
                        <input class="prompt" type='text' value={this.state.lat} onChange={event => this.setState({ term: event.target.value })}></input>
                        <i class="search icon"></i>
                    </div>
                </form>
            </div>

        );
    }

}


export default SearchBar;