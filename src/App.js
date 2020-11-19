import "./App.css";

//components
import ProjectsCarousel from "./components/ProjectsCarousel.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

//material-ui
import Grid from "@material-ui/core/Grid";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Grid container item xs={12}>
        <Grid item xs={2}></Grid>
          <Grid item xs={8}>
          <Header></Header>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>

        <Grid container item xs={12} alignItems="center" justify="center">
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <ProjectsCarousel  ></ProjectsCarousel>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
        <Footer></Footer>
      </header>
    
    </div>
  );
}

export default App;
