import React from "react";
import './App.css'
import Header from './../Header/Header'
import SearchBox from "../SearchBox/SearchBox";
import Results from "../Results/Results";

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            headerText: 'Name It!',
            headerexp: true,
            res: [],
        };
    }
    handleInputChange = (inputText) => {
        this.setState({
            headerexp: (!inputText),
            res: inputText ? name(inputText) : [],
        });
    };
    render() {
        return (
            <div>
                <Header
                    headerexpanded={this.state.headerexp}
                    headTitle={this.state.headerText}
                />
                <SearchBox onInputChange={this.handleInputChange} />
                <Results suggestedNames={this.state.res} />
            </div>
        )
    }
}


export default App;