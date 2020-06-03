import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = COMMENTS, action) => { //reducer
    switch (action.type) {  //switch
        case ActionTypes.ADD_COMMENT: // in case action type is ADD_COMMENT

            var comment = action.payload; //get data from payload
            comment.id = state.length;
            comment.date = new Date().toISOString();
            console.log("Comment: ", comment);

            return state.concat(comment);  //return new state
            
        default:
          return state //else return old state      }
}
};