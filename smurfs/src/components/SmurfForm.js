import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurfs } from '../actions/Actions';




 function SmurfForm(props) {

    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: ''
    })

    return (
        <div>
            
        </div>
    )
}


export default connect(
    mapStateToProps, 
    {postSmurfs})(SmurfForm);
