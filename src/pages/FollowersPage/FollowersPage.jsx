import Header from '../../components/Header/Header'
import FollowersList from '../../components/FollowersList/FollowersList'

const FollowersPage = () => {
    return (
        <div className='min-h-screen py-36 flex justify-center'>
            <div className='w-3/5 mx-auto z-10'>
                <Header title='Followers' />
                <div className='w-full min-h-3/4 mt-10 p-2 bg-white shadow-md rounded'>
                    <FollowersList />
                </div>
            </div>
        </div>
    )
}

export default FollowersPage