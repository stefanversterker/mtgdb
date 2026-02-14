import './Collection.css'
import CardSearch from "../CardSearch/CardSearch.jsx";
import CardManagement from "../../Components/CardManagement/CardManagement.jsx";
import {useNavigate} from "react-router-dom";
import Card from "../../Components/Card/Card.jsx";
import ButtonAdd from "../../Components/ButtonAdd/ButtonAdd.jsx";
import axios from 'axios';
import {useState} from 'react'
import {useEffect} from 'react'
import queryBuilder from '/src/Helpers/queryBuilder.js'
import {jwtDecode} from "jwt-decode";

function Collection() {

    const navigate = useNavigate();
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(true);
    const [data, setData] = useState([]);
  /*  const [cardColor, setCardColor] = useState("");
    const [cardType, setCardType] = useState("");
    const [sortType, setSortType] = useState("name");
    const [sortDir, setSortDir] = useState("asc");
    const [searchTerm, setSearchTerm] = useState("");
    const [cmcRange, setCmcRange] = useState([0, 16]);*/
    const [idFromNovi, setIdFromNovi] = useState([]);
    const [entry, setEntry] = useState([])
    const [userId, setUserId] = useState(null)

    const jwtTokenDecoded = jwtDecode(localStorage.getItem('token'));

    console.log(userId)


    async function fetchCardId(signal, userId) {
        toggleError(false);
        toggleLoading(true);

        try {
            const response = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/userCollections/${userId}/collectionEntries`, {
                signal,
                headers: {
                    'novi-education-project-id': 'b8985a1c-c1b7-4c00-9777-666019e0877d',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })

            setIdFromNovi(response.data);
            console.log(response)

        } catch (error) {
            if (axios.isCancel(error) || error.name === "CanceledError") {
                return;
            }
            console.error("Whoops, we couldn't find your card")
            toggleError(true)

        } finally {
            toggleLoading(false)
        }
    }

    async function fetchCard(signal) {
        toggleError(false);
        toggleLoading(true);

        try {
            const response = await axios.get(`https://api.scryfall.com/cards/${idFromNovi[0]?.cardId}`, {
                signal,
            })

            setData(response.data)
            console.log(response)

        }
        catch(error) {
            toggleError(true)
        }
        finally {
            toggleLoading(false)
        }
    }

    useEffect(() => {
        void setUserId(jwtTokenDecoded.userId);
    }, []);

    useEffect(() => {
        const controller = new AbortController();
        if (!userId) return;
        fetchCardId(controller.signal);

        return () => {
            controller.abort();
        }
    }, [userId]);

    useEffect(() => {
        const controller = new AbortController();
        if (idFromNovi.length === 0) return;
        fetchCard(controller.signal);

        return () => {
            controller.abort();
        }
    }, [idFromNovi]);

    return (

        <CardSearch>
        </CardSearch>
    )
}

export default Collection