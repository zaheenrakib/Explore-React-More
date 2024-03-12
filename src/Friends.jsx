import { useEffect, useState } from 'react'
import './Friends.css'
import Single from './Single';
export default function Friends(){

    const [friends,setFriends] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])

    return (
        <div className='box'>
            <h3>Friends: {friends.length} </h3>
            {
                friends.map(single => <Single single={single}></Single>  )
            }
        </div>
    )
}
/**
 * 1.state to hold data
 * 2.use Effect with dependency array
 * 3.use fetch to load Data
 * 4.set loadded data to the state
 */