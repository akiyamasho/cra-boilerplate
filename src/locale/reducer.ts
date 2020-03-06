import { getBrowserLocale } from "./utils";
import { TOGGLE_LANGUAGE } from "./actions";
import { LOCALE_EN, LOCALE_JA } from "./index";

const locale = (
    state: string = getBrowserLocale(),
    { type }: { type: string }
) => {
    switch (type) {
        case TOGGLE_LANGUAGE:
            return state === LOCALE_JA ? LOCALE_EN : LOCALE_JA;
        default:
            return state;
    }
};

export default locale;
