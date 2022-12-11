import { contents } from "../contents/contents";
import MenuItems from "../menuItems/menuItems";
import { StyledBackground, StyledContentsContainer } from "./menu.styles";


export default function Menu({menuOpen}) {

  return (
    <>
    {menuOpen && (
      <StyledContentsContainer>
      <div className="content__wrapper">
          {
              contents.map((content)=>(
                <MenuItems
                key={content.id}
                name={content.name}
                bgcolor={content.color}
                src={content.image}
                />
              ))
          }
      </div>
  
      <div className="project__image--outer">
        <div className="project__image--inner"></div>
      </div>
      <StyledBackground/>
    </StyledContentsContainer>
    )}
  
  </>
 )
     
}
