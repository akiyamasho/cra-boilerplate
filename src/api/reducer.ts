import { SET_REQUEST_ERROR, SET_REQUEST_LOADING } from "./actions";
import { SetRequestErrorPayload, SetRequestLoadingPayload } from "./types";

const apiRequestStatusReducer = (
    state: { loading: {}; error: {} } = { loading: {}, error: {} },
    {
            type,
            payload,
        }: {
            type: string;
            payload: SetRequestErrorPayload & SetRequestLoadingPayload;
        }
) => {
    switch (type) {
        case SET_REQUEST_LOADING:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    [payload.actionType]: payload.isLoading,
                },
                error: payload.isLoading
                    ? {
                          ...state.error,
                          [payload.actionType]: null,
                      }
                    : state.error,
            };
        case SET_REQUEST_ERROR:
            return {
                ...state,
                error: {
                    ...state.error,
                    [payload.actionType]: payload.errorLabelId,
                },
            };
        default:
            return state;
    }
};

export default apiRequestStatusReducer;
