import { useLayoutEffect, useRef } from "react";
import { StyledMenuItem } from "./menuItems.styles";
import { gsap } from "gsap";

export default function MenuItems({
  name,
  bgColor,
  src,
  innerRef,
  outerRef,
  backgroundRef,
  contentRef,
}) {

  const wordRef = useRef();
  const wordRefClone = useRef();

  useLayoutEffect(() => {
    document.body.style.overflow = "hidden";

    const getAllMenuItems = gsap.utils.toArray(".menu__item");
    gsap.set(getAllMenuItems, {
      opacity: 0,
      y: "200px",
    });

    gsap.to(getAllMenuItems, {
      opacity: 1,
      stagger: 0.1,
      y: 0,
    });

    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  //mouse enter
  function mouseEnter(e) {
    const { image, color } = e.target.dataset;
    const getAllMenuItems = gsap.utils.toArray(".menu__item");
    const getSiblings = getAllMenuItems.filter((item) => item !== e.target);

    //timeline
    const enterTl = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "none",
        onStart: () => {
          gsap.set(innerRef.current, {
            backgroundImage: `url(${image})`,
          });
          gsap.to(backgroundRef.current, {
            backgroundColor: color,
            duration: 1,
            ease: "expo",
          });
        },
      },
    });

    enterTl
      .to(outerRef.current, {
        duration: 1.3,
        ease: "expo",
        autoAlpha: 1,
      })
      .to(
        innerRef.current,
        {
          duration: 1.3,
          ease: "expo",
          startAt: { scale: 1.2 },
          scale: 1,
        },
        0
      )
      .to(
        getSiblings,
        {
          autoAlpha: 0.2,
        },
        0
      )
      .to(wordRef.current.children,{
        y: "100%",
        rotationX: -90,
        opacity: 0,
        duration: 0.5,
        stagger: 0.025,
      }, 0)
      .to(wordRefClone.current.children,{
        startAt:{
          y: "-100%",
          rotationX: 90,
          opacity: 0,
        },
        y: "0%",
        rotationX: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.025,
      }, 0);
  }

  //mouse leave
  function mouseLeave() {
    const getAllMenuItems = gsap.utils.toArray(".menu__item");
    const leaveTl = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "none",
      },
    });

    leaveTl
      .to(outerRef.current, {
        autoAlpha: 0,
      })
      .to(
        getAllMenuItems,
        {
          autoAlpha: 1,
        },
        0
      )
      .to(wordRef.current.children,{
        startAt: {
          y: "100%",
          rotationX: -90,
          opacity: 0,
        },
        y: "0%",
        rotationX: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.025,
      }, 0)
      .to(wordRefClone.current.children,{
        y: "-100%",
        rotationX: 90,
        opacity: 0,
        duration: 0.5,
        stagger: 0.025,
      }, 0);
  }

  function mouseMove({ clientX, clientY }) {
    const bound = contentRef.current.getBoundingClientRect();

    const xValue = clientX - (bound.left + Math.floor(bound.width / 2));
    const yValue = clientY - (bound.top + Math.floor(bound.height / 2));

    gsap.to(outerRef.current, {
      duration: 1.2,
      ease: "none",
      x: xValue,
      y: yValue,
    });
  }

  
  return (
    <StyledMenuItem
      href=""
      className="menu__item"
      data-color={bgColor}
      data-image={src}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onMouseMove={mouseMove}
    >
      <span className="menu__item--text">

        <span className="word" ref={wordRef}>
          {name.split('').map((item, i)=>{
              return(
                <span 
                key={i}
                className=""
                style={{display: "inline-block", willChange: "transform"}}>
                   {item}
                </span>
              )
          })}
        </span>


        <span className="word clone" ref={wordRefClone}>
          {name.split('').map((item, i)=>{
              return(
                <span 
                key={i}
                className=""
                style={{display: "inline-block", willChange: "transform"}}>
                   {item}
                </span>
              )
          })}
        </span>


      </span>
    </StyledMenuItem>
  );
}
