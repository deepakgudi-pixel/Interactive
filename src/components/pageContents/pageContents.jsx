import { StyledContentSection } from "./pageContents.styles";

export default function PageContents() {
  return (
    <>
      <StyledContentSection>
        <div className="content__wrapper">
          <p className="content__text--heading">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
            numquam rerum dolorem ad amet, nulla odio facilis laborum modi
            expedita.
          </p>
          <p className="content__text--copy">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut culpa
            officia asperiores tempore facilis voluptate ullam voluptates quasi
            quae, aspernatur veniam. Eaque, quisquam quasi ullam esse eum
            tenetur fugit, reprehenderit ab rerum, perspiciatis ut voluptates ea
            dicta! Omnis, sed. Modi.
          </p>
        </div>
      </StyledContentSection>
    </>
  );
}
