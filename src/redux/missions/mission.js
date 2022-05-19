import showConnectionError from '../shared/error';
import * as API from '../shared/api';

// actions
const RECEIVE_MISSIONS = 'spacetraveler/missions/RECEIVE_MISSIONS';

// reducer
export default function missions(state = [], action) {
  switch (action.type) {
    // case ADD_BOOK:
    //   return [...state, {
    //     id: action.book.id,
    //     title: action.book.title,
    //     category: action.book.category,
    //     author: action.book.author,
    //     completion: action.book.completion,
    //   }];
    // case REMOVE_BOOK:
    //   return state.filter((book) => book.id !== action.id);
    // case TOGGLE_BOOK:
    //   return state.map((book) => {
    //     if (book.id !== action.id) {
    //       return book;
    //     }
    //     return { ...book, complete: !book.complete };
    //   });
    case RECEIVE_MISSIONS:
      return action.missions;
    default:
      return state;
  }
}

// action creators
function receiveMissions(missions) {
  return {
    type: RECEIVE_MISSIONS,
    missions,
  };
}
// function removeBook(id) {
//   return {
//     type: REMOVE_BOOK,
//     id,
//   };
// }

// Thunk action creators
// export function handleAddBook(appid, bookobj) {
//   return (dispatch) => {
//     dispatch(addBook(bookobj));

//     return createBook(appid, bookobj)
//       .catch(() => {
//         showConnectionError();
//         dispatch(removeBook(bookobj.id));
//       });
//   };
// }

export function handleReceiveMissions(missions) {
  return (dispatch) => API.getAllMissions(missions)
    .then((missions) => {
      const reserved = { reserved: false };
      const modifiedMissions = missions.map((mission) => {
        const modifiedMission = { ...mission, ...reserved };
        return modifiedMission;
      });

      dispatch(receiveMissions(modifiedMissions));
    })
    .catch(() => {
      showConnectionError();
    });
}
