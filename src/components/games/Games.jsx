import { useEffect, useState } from 'react';
import { Card } from './card/Card';
import axios from 'axios';
import './games.css';
import {Bars, Circles} from 'react-loading-icons';
import { Search } from '../search/Search';
// import { URL } from '../../data';

export const Games = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(null)
    const [dataTemp, setDataTemp] = useState(null)
    const [error, setError] = useState('')
    const [searchTerm, setSearchTerm] = useState('')
    const [filterTerm, setFilterTerm] = useState('')

    const searchGames = ()=> {
        const localData = data && data.filter(el=> {
            let term = searchTerm.toLowerCase()
            return el?.Topic?.toLowerCase()?.includes(term) || el?.Level?.toLowerCase()?.includes(term) || el?.Subject?.toLowerCase()?.includes(term)
        });

        if(Array.isArray(localData)) {
            setDataTemp(localData);
        }
    };

    const filterGames = ()=> {
        const localData = data && data.filter(el=> {
            let term = filterTerm.toLowerCase()
            return el?.Topic?.toLowerCase()?.includes(term) || el?.Level?.toLowerCase()?.includes(term)
        });

        setDataTemp(localData)
    };

    useEffect(()=> {
        console.log(filterTerm)
    }, [filterTerm])

    useEffect(()=> {
        searchGames()
    }, [searchTerm])
    

    useEffect(() => {
        async function fetchGames() {
            setIsLoading(true);
            try {
                const res = await axios.get('https://partners.9ijakids.com/index.php?partnerId=555776&accessToken=l0lawtvv-94bv-oi4d-u808-5ubz&action=catalogfilter&group=academic');
                setIsLoading(false);
                setData(res.data);
                setDataTemp(res.data);
                console.log(res.data)

            } catch (err) {
                setIsLoading(false);
                // setError(err);
                console.log('Error: ', err);
            }
        }

        fetchGames();
    }, [])

    

    return (
        <section className='games'>
            <div className='container'>
                <h2 className='games-title'>Popular Games</h2>
                <Search setSearchTerm={setSearchTerm} setFilterTerm={setFilterTerm} />
                <div className='games-row' style={{justifyContent: "center", alignItems: "center"}}>
                {isLoading && <Circles stroke="#98ff98" />}
                </div>
                <div className='games-row'>
                    
                    {dataTemp && dataTemp.length > 1 && dataTemp.map((game, i) => {
                        return <Card key={`${game.Title}${i}`} game={game} />
                    })}
                    {error && <>Error...</>}
                </div>
            </div>
        </section>
    );
};