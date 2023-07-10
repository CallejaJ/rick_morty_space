import { useState, useEffect } from "react";
import CharsView from "../Chars/CharsView";


export default function Chars() {

    const [chars, setChars] = useState(null);
    const [page, setPage] = useState(1);
    const [searchValue, setSearchValue] = useState("")

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, [page]);

    function handleChange(event, value) {
        setPage(value);
    }

    function onSearchChar(e) {
        setSearchValue(e.target.value)
    }

    useEffect(function () {

        async function fetchData() {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}&name=${searchValue}`);
            const data = await response.json();
            setChars(data);
        }

        fetchData();

    }, [page, searchValue]); // ---> chars

    return <CharsView
        page={page}
        totalPages={chars?.info.pages}
        onChange={handleChange}
        chars={chars}
        onSearch={onSearchChar}
        searchValue={searchValue}
    />
}