import { SearchEngineType } from "../init/ui/custom/types";

export type SearchActions =
    | "SET_SEARCH_QUERY"
    | "SET_SEARCH_ENGINE"
    | "POST_SEARCH";

export type SearchQueryPayload = {
    query: string;
};

export type SearchEngineOptionPayload = {
    searchEngineOption: SearchEngineType;
};

export type PostSearchPayload = {
    query: string;
    searchEngineOption: SearchEngineType;
};
