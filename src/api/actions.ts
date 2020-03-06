import { SetRequestErrorPayload, SetRequestLoadingPayload } from "./types";

export const SET_REQUEST_LOADING = "SET_REQUEST_LOADING";
export const dispatchSetRequestLoading = ({
    actionType,
    isLoading,
}: SetRequestLoadingPayload) => ({
    type: SET_REQUEST_LOADING,
    payload: {
        actionType,
        isLoading,
    },
});

export const SET_REQUEST_ERROR = "SET_REQUEST_ERROR";
export const dispatchSetRequestError = ({
    actionType,
    errorLabelId,
}: SetRequestErrorPayload) => ({
    type: SET_REQUEST_ERROR,
    payload: {
        actionType,
        errorLabelId,
    },
});
