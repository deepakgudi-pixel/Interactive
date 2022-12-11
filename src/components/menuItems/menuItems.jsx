import { useLayoutEffect } from 'react';
import { StyledMenuItem } from './menuItems.styles';
import {gsap} from 'gsap';

export default function MenuItems({name, bgcolor, src}) {

  useLayoutEffect(()=>{
    document.body.style.overflow = 'hidden';

    const getAllMenuItems = gsap.utils.toArray('.menu__item');
    gsap.set(getAllMenuItems, {
      opacity: 0,
      y: "200px",
    });

    gsap.to(getAllMenuItems, {
      opacity: 1,
      stagger: 0.1,
      y: 0,
    });

    return ()=>{
      document.body.style.overflow = 'visible';
    }

  }, []);

  return (
    <StyledMenuItem
    href=""
    className="menu__item"
    data-color={bgcolor}
    data-image={src}
    >

    <span
    className="menu__item--text"
    >
    {name}
    </span>    
    
    </StyledMenuItem>
  )
}
