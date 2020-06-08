import * as ActionTypes from './ActionTypes';

export const Comments = (state = { errMess: null, comments:[]}, action) => { //reducer
    switch (action.type) {  //switch

    case ActionTypes.ADD_COMMENTS:
      return {...state, errMess: null, comments: action.payload};

    case ActionTypes.COMMENTS_FAILED:
      return {...state, errMess: action.payload};


        case ActionTypes.ADD_COMMENT: // in case action type is ADD_COMMENT

            let comment = action.payload; //get data from payload
            console.log("Comment: ", comment);

            return {...state, comments: state.comments.concat(comment)};  //return new state
            
        default:
          return state //else return old state      }
}
};