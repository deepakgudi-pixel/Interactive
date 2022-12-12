import { useRef } from "react";
import { contents } from "../contents/contents";
import MenuItems from "../menuItems/menuItems";
import { StyledBackground, StyledContentsContainer } from "./menu.styles";


export default function Menu({menuOpen}) {

  const innerRef = useRef();
  const outerRef = useRef();
  const backgroundRef = useRef();
  const contentRef = useRef();

  return (
    <>
    {menuOpen && (
      <StyledContentsContainer>
      <div className="content__wrapper"  ref={contentRef}>
          {
              contents.map((content)=>(
                <MenuItems
                key={content.id}
                name={content.name}
                bgcolor={content.color}
                src={content.image}
                outerRef={outerRef}
                innerRef={innerRef}
                backgroundRef={backgroundRef}
                contentRef={contentRef}
                />
              ))
          }
      </div>
  
      <div className="project__image--outer" ref={outerRef}>
        <div className="project__image--inner" ref={innerRef}></div>
      </div>
      <StyledBackground ref={backgroundRef}/>
    </StyledContentsContainer>
    )}
  
  </>
 )
     
}
