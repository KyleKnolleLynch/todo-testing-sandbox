const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: 'Korl',
          last: 'Lunch',
        },
        picture: {
          medium: 'https://randomuser.me/api/portraits/men/20.jpg',
        },
        login: {
          uuid: Math.random(),
          username: 'turtleback',
        },
      },
    ],
  },
}

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
}
