import {
  GET_PROPERTIES,
  UPDATE_PROPERTY,
  PROPERTY_ERROR
} from './types';

// Get current PDF properties
export const getCurrentProperties = () => async (dispatch) => {
  // try {
  //   dispatch({
  //     type: GET_PROPERTIES,
  //     payload: res.data
  //   });
  // } catch (err) {
  //   dispatch({
  //     type: PROFILE_ERROR,
  //     payload: { msg: err.response.statusText, status: err.response.status }
  //   });
  // }
};

// set Property
// export const setProperty = (formData, navigate) => async (dispatch) => {
//   console.log(formData)
//   try {
//     dispatch({
//       type: UPDATE_PROPERTY,
//       payload: formData
//     });

//     navigate('/view-pdf');
//   } catch (err) {
//     console.log(err)
//   }
// };

export const setProperty = (formData, navigate) =>
  async (dispatch) => {
    try {

      dispatch({
        type: UPDATE_PROPERTY,
        payload: formData
      });

      navigate('/view-pdf');
    } catch (err) {
      const errors = err;

      // if (errors) {
      //   errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      // }

      dispatch({
        type: PROPERTY_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };