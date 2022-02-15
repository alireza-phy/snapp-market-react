import React , {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {styled, alpha} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import ProductData from '../ProductData/ProductData';
import {useRouter} from 'next/router';


const SearchBar = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: "5rem",
    backgroundColor: alpha(theme.palette.common.white, 1),
    width: '100%',
    fontSize: "0.8rem",
    fontWeight: 600,
    [theme.breakpoints.up('sm')]: {
        marginRight: theme.spacing(1),
        width: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
        height: "2rem",
        fontSize: "0.5rem"
    },
    [theme.breakpoints.between('sm', 'md')]: {
        marginRight: "1rem"
    },
    [theme.breakpoints.up('md')]: {
        marginRight: "1rem"
    },

}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    color: 'rgb(117, 117, 117)',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'black',
    display: "flex",
    alignItems: "center",
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 0, 1, 0),
        // vertical padding + font size from searchIcon
        paddingRight: `calc(1em + ${theme.spacing(3)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '20rem',
        }, [theme.breakpoints.down('sm')]: {
            width: '80%',
        },
    },
}));

const Search = () => {
    const router = useRouter();

    return (
        <SearchBar>
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
                onKeyDown={e => {
                    if (e.keyCode === 13) {
                        router.push('/search/' + e.target.value.replace(/\s+/g, '-'))
                    }
                }}
                placeholder="جست و جوی برند یا محصول"
                inputProps={{'aria-label': 'search'}}
            />
        </SearchBar>
    )
}

export default Search