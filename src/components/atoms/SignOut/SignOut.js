import { Link } from "react-router-dom";
import { StyledLink } from "./SignOut.styles";
const SignOut = (destination) => (
    <StyledLink
    to={{
        pathname: destination ? destination : '/',
      }}
    
    >
      Sign Out
    </StyledLink> 
)

export default SignOut;