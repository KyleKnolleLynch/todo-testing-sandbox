import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const FollowersList = () => {
    const [followers, setFollowers] = useState([])

    const fetchFollowers = async () => {
        const { data } = await axios.get('https://randomuser.me/api/?results=5')
        setFollowers(data.results)
    }

    useEffect(() => {
        fetchFollowers()
    }, [])

    console.log(followers)
    return (
        <ul className='divide-y-2 divide-dotted divide-yellow-200'>
            {followers.map(follower => (
                <li key={follower.login.uuid} className='mt-2 pt-2 flex items-center'>
                    <img src={follower.picture.medium} alt="random follower" />
                    <div className='pl-10'>
                        <h4 className='text-lg'>{follower.name.first} {follower.name.last}</h4>
                        <p className='text-sm'>{follower.login.username}</p>
                    </div>
                </li>
            ))}
            <Link to='/' className='mt-2 pt-2 block cursor-pointer'>Go Back</Link>
        </ul>
    )
}

export default FollowersList