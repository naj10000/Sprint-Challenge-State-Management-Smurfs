import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; //refactor to connect

import { getSmurfs, postSmurfs } from '../actions/Actions'


const Smurfs = () => {
    const smurfs = useSelector( state => state.smurfs);
    const dispatch = useDispatch();
  return (
    <div>
        {smurfs.isFetchingData ? (
            <h2>Getting Data</h2>
        ) : (<button onClick={()=> dispatch(getSmurfs(smurfs))}>Get Smurfed</button>)}
        {smurfs.map( smurf => (
                <div key={smurf.id}>
                <h2>{smurf.name}</h2>
        <p>{smurf.age}</p>
        <p>{smurf.height}</p>
            </div>
        )
        
        )}
    </div>
  )
}



export default Smurfs;