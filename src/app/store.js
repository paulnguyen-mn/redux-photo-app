import { configureStore } from "@reduxjs/toolkit";
import photoReducer from 'features/Photo/photoSlice';

const rootReducer = {
  photos: photoReducer,
}

const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    photos: [
      {
        categoryId: 1,
        photo: 'https://picsum.photos/id/77/300/300',
        title: 'Dolor Lorem aliqua ea consectetur in tempor reprehenderit consequat officia.'
      },
      {
        categoryId: 5,
        photo: 'https://picsum.photos/id/622/300/300',
        title: 'Non aliqua proident magna pariatur eu deserunt eu ipsum velit aliquip.'
      },
      {
        categoryId: 4,
        photo: 'https://picsum.photos/id/477/300/300',
        title: 'Aliquip elit laboris eu aute irure enim reprehenderit voluptate consectetur minim minim adipisicing commodo.'
      },
      {
        categoryId: 3,
        photo: 'https://picsum.photos/id/625/300/300',
        title: 'Nostrud velit veniam esse officia.'
      },
      {
        categoryId: 3,
        photo: 'https://picsum.photos/id/20/300/300',
        title: 'Anim Lorem consectetur reprehenderit ea nulla est consectetur ullamco minim proident.'
      },
      {
        categoryId: 1,
        photo: 'https://picsum.photos/id/433/300/300',
        title: 'Laboris quis et ex exercitation do tempor in.'
      },
      {
        categoryId: 4,
        photo: 'https://picsum.photos/id/769/300/300',
        title: 'Est sunt dolor cillum duis exercitation.'
      },
      {
        categoryId: 2,
        photo: 'https://picsum.photos/id/292/300/300',
        title: 'Culpa adipisicing occaecat culpa laborum Lorem amet consectetur fugiat laborum do Lorem excepteur ea dolor.'
      },
      {
        categoryId: 5,
        photo: 'https://picsum.photos/id/397/300/300',
        title: 'Aliqua ad qui occaecat do velit elit deserunt ipsum culpa magna adipisicing.'
      },
      {
        categoryId: 2,
        photo: 'https://picsum.photos/id/756/300/300',
        title: 'Aliquip elit ullamco magna in dolore aliqua do.'
      },
      {
        categoryId: 3,
        photo: 'https://picsum.photos/id/790/300/300',
        title: 'Irure labore ut qui in.'
      }
    ]
  }
});

export default store;