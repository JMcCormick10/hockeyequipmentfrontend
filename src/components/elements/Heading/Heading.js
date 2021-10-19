import React from "react";

import * as Headings from './Heading.styles';
const Heading = ({size, text, className, children}) => {
    let heading;
    switch(size){
        case 1:
            heading =  <Headings.One uppercase className={className}>{text}{children}</Headings.One>;
            break;
        case 2:
            heading =  <Headings.Two uppercase className={className}>{text}{children}</Headings.Two>;
            break;
        case 3:
            heading =  <Headings.Three uppercase className={className}>{text}{children}</Headings.Three>;
            break;
        case 4:
            heading =  <Headings.Four uppercase className={className}>{text}{children}</Headings.Four>;
            break;
        case 5:
            heading =  <Headings.Five uppercase className={className}>{text}{children}</Headings.Five>;
            break;
        case 6:
            heading =  <Headings.Six uppercase className={className}>{text}{children}</Headings.Six>;
            break;
    }
    return (
        heading
    );
}

export default Heading;