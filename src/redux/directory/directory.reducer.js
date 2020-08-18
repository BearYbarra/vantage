const INITIAL_STATE = {
    sections: [
        {
          title: 'architecture',
          imageUrl: 'https://i.ibb.co/qNXxZLK/architecture.jpg',
          id: 1,
          linkUrl: 'shop/architecture'
        },
        {
          title: 'nature',
          imageUrl: 'https://i.ibb.co/VjcY74k/nature.jpg',
          id: 2,
          linkUrl: 'shop/nature'
        },
        {
          title: 'neon',
          imageUrl: 'https://i.ibb.co/njyRqXP/neon.jpg',
          id: 3,
          linkUrl: 'shop/neon'
        },
        {
          title: 'sculpture',
          imageUrl: 'https://i.ibb.co/rwDLws2/sculpture.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/sculpture'
        },
        {
          title: 'still life',
          imageUrl: 'https://i.ibb.co/92WtyqW/stillLife.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/stillLife'
        }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default directoryReducer;