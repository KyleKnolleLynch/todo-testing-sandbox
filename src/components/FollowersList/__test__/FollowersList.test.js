import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import FollowersList from '../FollowersList'

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  )
}

describe('FollowersList', () => {

    beforeEach(() => {
        console.log('RUNNING` BEFORE EACH TEST')
    })

    beforeAll(() => {
        console.log('RUN ONCE BEFORE ALL TESTS')
    })

    afterEach(() => {
        console.log('RAN AFTER EACH TEST')
    })

    afterAll(() => {
        console.log('RAN ONCE AFTER ALL TESTS')
    })

    test('should render follower item', async () => {
        render(<MockFollowersList />)
        const followerLiElement = await screen.findByTestId('follower-item-0')
        expect(followerLiElement).toBeInTheDocument()
    })  
    test('should render follower item', async () => {
        render(<MockFollowersList />)
        const followerLiElement = await screen.findByTestId('follower-item-0')
        expect(followerLiElement).toBeInTheDocument()
    })  
    test('should render follower item', async () => {
        render(<MockFollowersList />)
        const followerLiElement = await screen.findByTestId('follower-item-0')
        expect(followerLiElement).toBeInTheDocument()
    })  

    // test('should render 5 followers in list', async () => {
    //     render(<MockFollowersList />)
    //     const followerLiElements = await screen.findAllByTestId('/follower-item/i')
    //     expect(followerLiElements.length).toBe(5)
    // })
})
  