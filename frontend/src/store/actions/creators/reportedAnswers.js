import * as actionTypes from '../actionTypes';
import { networkError } from './networkError';
import axios from '../../../axios-base';

const fetchReportsStart = () => ({
  type: actionTypes.FETCH_REPORTS_START,
});

const fetchReportsSuccess = data => ({
  type: actionTypes.FETCH_REPORTS_SUCCESS,
  payload: data,
});

const fetchReportsFail = error => ({
  type: actionTypes.FETCH_REPORTS_FAIL,
  payload: error,
});

export const fetchReports = () => {
  return dispatch => {
    dispatch(fetchReportsStart());
    axios
      .get('answers/reports')
      .then(response => dispatch(fetchReportsSuccess(response.data.result)))
      .catch(error => {
        if (!error.response) dispatch(networkError());
        dispatch(fetchReportsFail(error.response));
      });
  };
};

const removeReportsSuccess = answer => ({
  type: actionTypes.REMOVE_REPORT_SUCCESS,
  payload: answer,
});

export const removeReport = data => {
  return dispatch => {
    dispatch(fetchReportsStart());
    axios
      .put('answers/report/remove', data)
      .then(response => dispatch(removeReportsSuccess(response.data.result)))
      .catch(error => {
        if (!error.response) dispatch(networkError());
        dispatch(fetchReportsFail(error.response));
      });
  };
};

const deleteAnswerSuccess = data => ({
  type: actionTypes.DELETE_ANSWER_SUCCESS,
  payload: data,
});

export const deleteAnswer = data => {
  return dispatch => {
    dispatch(fetchReportsStart());
    axios
      .delete(`answers/${data}`)
      .then(response => dispatch(deleteAnswerSuccess(data)))
      .catch(error => {
        if (!error.response) dispatch(networkError());
        dispatch(fetchReportsFail(error.response));
      });
  };
};

export const changeAnswersPage = page => ({
  type: actionTypes.CHANGE_ANSWERS_PAGE,
  payload: page,
});
