import React, { Component } from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import './style.css';

class Autocomplete extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };
    }

    render() {
        const {
            suggestions,
            onChangeText,
            onChangeSelection,
            text,
        } = this.props;
        const {
            isOpen,
        } = this.state;

        return (
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1"><SearchIcon className="text-secondary"/></span>
                </div>
                <input
                    type="text"
                    className="form-control input-search"
                    placeholder="Ingrese el nombre del gráfico a buscar"
                    aria-label="Ingrese el nombre del gráfico a buscar"
                    value={text}
                    onChange={(event) => {
                        const newText = event.target.value;

                        onChangeText(newText);

                        if (!isOpen && newText) {
                            this.setState({ isOpen: true });
                        } else if (isOpen && !newText) {
                            this.setState({ isOpen: false });
                        }
                    }}
                    onBlur={() => {
                        setTimeout(() => this.setState({ isOpen: false }), 100);
                    }}
                    onFocus={() => {
                        if (text) {
                            this.setState({ isOpen: true });
                        }
                    }}
                    onKeyPress={(event) => {
                        if (event.key === 'Enter' && text) {
                            onChangeSelection(text);
                        }
                    }}
                />
                {isOpen &&
                <Paper className="container-results" square>
                    {suggestions.map(suggestion =>
                    <MenuItem
                        key={suggestion.name}
                        component="div"
                        onClick={() => {
                            onChangeSelection(suggestion.name);
                            this.setState({ isOpen: true });
                        }}
                    >
                        {suggestion.name}
                    </MenuItem>)}
                </Paper>}

            {/*
            <div className="main-container">
                <div className="container-icon">
                    <SearchIcon
                    style={{ color: 'grey'}}
                     />
                </div>
                <InputBase
                    placeholder="Ingrese el nombre del gráfico a buscar"
                    value={text}
                    style={{ width: '100%',position: 'static'}}
                    onChange={(event) => {
                        const newText = event.target.value;

                        onChangeText(newText);

                        if (!isOpen && newText) {
                            this.setState({ isOpen: true });
                        } else if (isOpen && !newText) {
                            this.setState({ isOpen: false });
                        }
                    }}
                    onBlur={() => {
                        setTimeout(() => this.setState({ isOpen: false }), 100);
                    }}
                    onFocus={() => {
                        if (text) {
                            this.setState({ isOpen: true });
                        }
                    }}
                    onKeyPress={(event) => {
                        if (event.key === 'Enter' && text) {
                            onChangeSelection(text);
                        }
                    }}
                />
                {isOpen &&
                <Paper className="container-results" square>
                    {suggestions.map(suggestion =>
                    <MenuItem
                        key={suggestion.name}
                        component="div"
                        onClick={() => {
                            onChangeSelection(suggestion.name);
                            this.setState({ isOpen: true });
                        }}
                    >
                        {suggestion.name}
                    </MenuItem>)}
                </Paper>}
            </div>
                    */}
</div>

        );
    }
}

export default Autocomplete;
