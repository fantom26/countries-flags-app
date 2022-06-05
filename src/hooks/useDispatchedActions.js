import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { AllActions } from "store/reducers/AllActions";

export const useDispatchedActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(AllActions, dispatch);
};
