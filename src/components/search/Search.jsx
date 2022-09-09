import { useState } from 'react';
import './search.css';

export const Search = ({ setSearchTerm, setFilterTerm }) => {
    const [localTerm, setLocalTerm] = useState('');
    return (
        <div className='search'>
            <div className="search-bar">
                <div className="search-control">
                    <input type='text' placeholder='Search Games by Topic, Level or Subject' className='search-text-field' value={localTerm} onChange={e => setLocalTerm(e.target.value)} />
                    <button type='button' className='btn' onClick={() => setSearchTerm(localTerm)}>Search</button>
                </div>
            </div>
            {/* <h3 style={{ fontSize: "20px", marginBottom: "20px", }}>Filter Games By</h3>
            <div className="search-control">
                <select id="" className='search-text-field' onChange={e => setFilterTerm(e.target.value)} style={{ padding: "10px" }}>
                    <option value="Groups">Groups</option>
                    <option value="Levels">Levels</option>
                </select>
            </div> */}
        </div>
    );
};