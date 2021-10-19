import React from "react";
import { StyledAvatar } from "./Avatar.styles";
import avatar from 'assets/images/avatar.png'
const Avatar = ({url, alt}) => (
    <StyledAvatar src={url ? url : avatar } alt={alt}/>
);

export default Avatar;