export type SetRequestLoadingPayload = {
    actionType: string;
    isLoading: boolean;
};

export type SetRequestErrorPayload = {
    actionType: string;
    errorLabelId: string;
};

//

export type HttpMethod = "get" | "post";
