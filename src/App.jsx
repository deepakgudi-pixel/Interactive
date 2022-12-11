import { useState } from "react";
import { StyledMainWrapper } from "./utils/styles/App.styles";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import PageContents from "./components/pageContents/pageContents";
import Project from "./components/project/project";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <StyledMainWrapper>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <PageContents />
      <Project />
      <Menu menuOpen={menuOpen} />
    </StyledMainWrapper>
  );
}

export default App;
