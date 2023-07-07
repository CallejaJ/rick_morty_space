import { useState } from "react";
import CharDetailsView from '../CharDetails/CharDetailsView'
import { useParams } from 'react-router-dom';
import { useEffect } from "react";

export default function CharDetails() {

    const [char, setChar] = useState(null);
    const { id } = useParams();
    useEffect(function () {
        async function fetchDetails() {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            const data = await response.json();
            setChar(data);

        }

        fetchDetails();

    },
        [id]
    ) //----> Detalles del personaje

    return (
        <CharDetailsView char={char} />
    )

}