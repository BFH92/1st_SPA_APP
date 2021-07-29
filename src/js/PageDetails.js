
import { fetchGame } from "./fetch";

const PageDetail = (argument) => {
const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");

    fetchGame(`https://api.rawg.io/api/games/`, cleanedArgument);
    
  };

  const render = () => {
    let welcomeDOM = document.querySelector(".welcome");
    welcomeDOM.innerHTML = "";
    pageContent.innerHTML = `
      <section class="page-detail">
        <div class="article">
          <div class="gameBG"></div>
          <div class="head">
            <h1 class="title head-rating"></h1>
            <div class="rating"> </div>
          </div>
          <p class="release-date">Release date : <span></span></p>
          <div class="description text"></div>
          <div class="platforms"></div>
          <div class="developers"></div>
          <div class="tags"></div>
          <div class="genres"></div>
          <div class="publishers"></div>
          <div class="stores"></div>
          <div class="trailer"> </div>
          <div class="video"> </div>
          <div class="youtubeList"></div>
          <div class="screenshotTitle"></div>
          <div class="screenshot"></div>
          <div class= "similarGameTitle "></div>
          <div class="similarGame articles">          
          </div>
        </div>
      </section>
    `;

    preparePage();
  };

  render();
};

export { PageDetail };
