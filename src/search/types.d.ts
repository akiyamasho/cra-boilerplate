import { SearchEngineType } from "../init/ui/custom/types";

export type SearchActions =
    | "SET_SEARCH_QUERY"
    | "SET_SEARCH_ENGINE_OPTION"
    | "POST_SEARCH";

export type SearchQueryPayload = {
    query: string;
    searchEngineOption?: never;
};

export type SearchEngineOptionPayload = {
    query?: never;
    searchEngineOption: SearchEngineType;
};

export type PostSearchPayload = {
    query: string;
    searchEngineOption: SearchEngineType;
};
