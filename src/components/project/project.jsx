import { StyledProject } from "./project.styles";
import backgroundOne from "../../images/5.jpg";
import backgroundTwo from "../../images/6.jpg";


export default function Project() {

  const bgOne = {
  background: `url(${backgroundOne})`,
  }

  const bgTwo = {
    background: `url(${backgroundTwo})`,
  }

  return (
    <StyledProject>
     <h2 className="project__title">
      <span className="project__title--main">Case</span>
      <span className="project__title--sub">Studies</span>
     </h2>
     <div className="project__img project__img--left invert" style={bgOne}></div>
     <div className="project__img project__img--right invert" style={bgTwo}></div>
    </StyledProject>
  )
}
