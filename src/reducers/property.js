import {
  GET_PROPERTIES, UPDATE_PROPERTY, PROPERTY_ERROR
} from '../actions/types';

const initialState = {
  properties: {},
  // property: {
    // first_name: '',
    // last_name: '',
    // manuscript_title:'',
    // editorial_decision:'',
    // cbox_one :false,
    // cbox_two :false,
    // cbox_three :false,
    // cbox_four :false,
    // cbox_five :false,
    // cbox_six :false,
    // cbox_seven :false,
    // cbox_eight :false,
    // cbox_nine :false,
    // cbox_ten :false,
    // cbox_eleven :false,
    // cbox_twelve :false,
    // cbox_thirteen :false,
    // cbox_fourteen :false,
    // cbox_fifteen :false,
    // comments: [],
  // },
  loading: true,
  error: {}
};

function propertyReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROPERTIES:
    case UPDATE_PROPERTY:
      return {
        ...state,
        properties: payload,
        loading: false
      };
    case PROPERTY_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        profile: null
      };
    default:
      return state;
  }
}

export default propertyReducer;
