import { useState, useEffect } from "react";
import CharsView from "../Chars/CharsView";

export default function Chars() {

    const [chars, setChars] = useState(null);
    const [page, setPage] = useState(1);
    const [searchValue, setSearchValue] = useState("")
    const [message, setMessage] = useState(null)

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
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}&name=${searchValue}`
            );

            if (!response.ok) {
                setMessage("No chars found with this description");
                setChars(null)
            }
            else {
                const data = await response.json();
                setChars(data);
                setMessage(null);
            }
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
        message={message}
    />
}