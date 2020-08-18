import React, {useState} from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './search.styles';

const Search  = (props) => {
    const classes = useStyles();
    const [search, setSearch] = useState('');
    const onSearchChange = e => {
        setSearch(e.target.value);
    };
    

    let content = (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Buscar…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search',  }}
                onChange={onSearchChange}
                value={search}
                onKeyUp
            />
        </div>
    )
    return content;
}


export default Search ;
