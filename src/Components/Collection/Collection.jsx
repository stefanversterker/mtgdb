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

function Collection() {

    const navigate = useNavigate();
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(true);
    const [data, setData] = useState([]);
    const [cardColor, setCardColor] = useState("");
    const [cardType, setCardType] = useState("");
    const [sortType, setSortType] = useState("name");
    const [sortDir, setSortDir] = useState("asc");
    const [searchTerm, setSearchTerm] = useState("");
    const [cmcRange, setCmcRange] = useState([0, 16]);

    async function fetchCard(signal) {
        toggleError(false);
        toggleLoading(true);

        try {
            const response = await axios.get("https://novi-backend-api-wgsgz.ondigitalocean.app/api/user_collections/1", {
                signal,
                headers: {
                    'novi-education-project-id': 'b8985a1c-c1b7-4c00-9777-666019e0877d',
                    /*Authorization: `Bearer ${localStorage.getItem('token')}`,*/
                },
            })

            setData(response);
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

    useEffect(() => {
        const controller = new AbortController();
        void fetchCard(controller.signal);

        return () => {
            controller.abort();
        }
    }, [cardColor, cardType, sortType, sortDir, searchTerm, cmcRange]);

    return (

        <CardSearch>

        </CardSearch>
    )
}

export default Collection