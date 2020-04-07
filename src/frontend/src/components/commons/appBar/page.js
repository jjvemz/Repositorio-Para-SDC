import React from 'react';
import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import Autocomplete from '../Autocomplete';

function Page(props){
  const {
        text,
        suggestions,
        onChangeText,
        onChangeSelection,
    } = props;

    return (
        <AppBar
            style={{ position: 'relative', top : '-45px', right :'10px' ,backgroundColor: 'white', boxShadow: 'none', width: "22rem"}}>
                <Autocomplete
                    text={text}
                    suggestions={suggestions}
                    onChangeText={onChangeText}
                    onChangeSelection={onChangeSelection}
                />
        </AppBar>
    );
}

export default Page;
