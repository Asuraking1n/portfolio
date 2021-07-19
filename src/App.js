import Home from "./components/home";
import { Route,Switch } from 'react-router'
import About from "./components/about"
import Contact from "./components/contact"
import styled from "styled-components"
import Project from "./components/Project";
import Blog from "./components/Blog"
import Resume from "./components/Resume";
function App() {
  return (
    <>
    <Container>
    <Home/>
  <Switch>
    <Route exact path="/"><About/></Route>
    <Route  path="/contact" component={Contact}></Route>
    <Route path="/project"><Project/></Route>
    <Route path="/blog"><Blog/></Route>
    <Route path="/resume"><Resume/></Route>
  </Switch>
  </Container>
    </>
  );
}

export default App;
const Container = styled.div`
overflow: hidden;
display:flex;`