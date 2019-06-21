import {FETCH_BOXES, NEW_BOX} from './types';

const apiUrl = 'http://localhost:3001/api/boxes'

export const fetchBoxes = ()=> dispatch =>{
        fetch(apiUrl)
            .then(resp => resp.json())
            .then(boxData => dispatch({
                type: FETCH_BOXES,
                payload: boxData
            }))
}

export const newBox = (input) => dispatch => {
    fetch(apiUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(input)
        })
            .then(res => res.json())
            .then(boxData =>dispatch ({
                type: NEW_BOX,
                payload: boxData
            }))

}


