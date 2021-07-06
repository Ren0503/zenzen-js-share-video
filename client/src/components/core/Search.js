import React from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import useInput from 'hooks/useInput';

const Wrapper = styled.div`
    input.search {
        background: ${(props) => props.theme.black};
        padding: 0.4rem 1rem;
        border: 1px solid ${(props) => props.theme.darkGrey};
        height: 31px;
        color: ${(props) => props.theme.primaryColor};
    }

    @media screen and (max-width: 700px) {
        input.search {
        display: none;
        }
    }
`;

const Search = () => {
    const history = useHistory();
    const searchTerm = useInput('');

    const handleSearch = (e) => {
        if (e.keyCode === 13) {
            if (!searchTerm.value.trim()) {
                return toast.dark("Please enter the searchTerm");
            }

            history.push(`/results/${searchTerm.value}`);
            searchTerm.setValue('');
        }
    };

    return (
        <Wrapper>
            <input 
                className="search"
                type="text"
                placeholder="Search"
                value={searchTerm.value}
                onKeyDown={handleSearch}
                onChange={searchTerm.onChange}
            />
        </Wrapper>
    );
}

export default Search;