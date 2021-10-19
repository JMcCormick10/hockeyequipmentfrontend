import { BREAKPOINTS } from "utilities/constants/Constants";

export const MediaQueries = {
    small: `@media screen and (min-width: ${BREAKPOINTS.small}px)`,
    medium: `@media screen and (min-width: ${BREAKPOINTS.medium}px)`,
    large: `@media screen and (min-width: ${BREAKPOINTS.large}px)`,
    xlarge: `@media screen and (min-width: ${BREAKPOINTS.xlarge}px)`,
}

export const customMinWidth = (breakpoint) => {
    return `@media screen and min-width: ${breakpoint}`;
}

export const customMaxWidth = (breakpoint) => {
    return `@media screen and min-width: ${breakpoint}`;
}




