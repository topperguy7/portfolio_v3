import 'devicon/devicon.min.css';
import img1 from './images/project-1.png'
import img2 from './images/project-2.png'
import img3 from './images/project-3.png'
import img4 from './images/project-4.png'
import img5 from './images/project-5.png'

function Projects(props){

  return(
    <>
      <div className="project" id="projects">

        <h1 className='lg:text-4xl'>Projects</h1>

        <div className='project-contain'>
          <div className='project-wrapper'>

            <div className="project-1">
              <div className='project-1-l'>
                <h1>
                  Frontend Previewer – Browser-Based Live Code Editor
                </h1><br></br>
                <p><span className='font-cge'>●</span>Built browser-based previewer enabling users write HTML, CSS, JavaScript with real-time iframe output.</p>
                <p><span className='font-cge'>●</span>Implemented tab navigation and theme toggle for better usability and customizable coding environment.</p>
                <p><span className='font-cge'>●</span>Integrated localStorage for persistent code saving and designed responsive interface supporting multiple screen sizes.</p><br></br>
                <h2>
                  Techstack:<i className='devicon-html5-plain colored'></i>
                            <i className='devicon-css3-plain colored'></i>
                            <i className='devicon-javascript-plain'></i>
                </h2><br></br>
                <a href="https://topperguy7.github.io/frontend-previewer/" 
                target='_blank' rel='noopener noreferrer' 
                className='text-blue-500 hover:text-red-400'><h2>Live:- frontend-previewer</h2></a>
              </div>
              <div className='project-1-r'>
                <img src={img1}/>
              </div>
            </div>
            <div className="project-1">
              <div className='project-1-l'>
                <h1>
                  NewsMania – News Aggregator Web Application
                </h1><br></br>
                <p><span className='font-cge'>●</span> Built a dynamic news web application consuming third-party News API to display real-time headlines.</p>
                <p><span className='font-cge'>●</span>Implemented category-based filtering and DOM-based dynamic rendering for interactive content updates.</p>
                <p><span className='font-cge'>●</span> Designed a fully responsive UI for seamless mobile and desktop experience.</p>
                <br></br>
                <h2>
                  Techstack:<i className='devicon-react-plain colored'></i>
                            <i className='devicon-tailwindcss-plain colored'></i>
                            <i className='devicon-nodejs-plain-wordmark colored'></i>
                            <i className='devicon-express-original colored'></i>
                </h2><br></br>
                <a href="https://github.com/topperguy7" 
                target='_blank' rel='noopener noreferrer' 
                className='text-blue-500 hover:text-red-400'><h2>Live:- Currently unavailable | Github</h2></a>
              </div>
              <div className='project-1-r'>
                <img src={img2}/>
              </div>
            </div>
            <div className="project-1">
              <div className='project-1-l'>
                <h1>
                  Interactive Portfolio Website
                </h1><br></br>
                <p><span className='font-cge'>●</span> Built a pixel-style developer portfolio with an animated scrolling background and card-based UI for navigation.</p>
                <p><span className='font-cge'>●</span> Implemented interactive pop-up sections using JavaScript to display Skills, Projects, Experience, and Resume without reloading the page.</p>
                <p><span className='font-cge'>●</span> Designed a responsive interface with CSS animations and event-driven DOM manipulation for smooth user interaction.</p>
                <br></br>
                <h2>
                  Techstack:<i className='devicon-html5-plain colored'></i>
                            <i className='devicon-css3-plain colored'></i>
                            <i className='devicon-javascript-plain'></i>
                </h2><br></br>
                <a href="https://github.com/topperguy7/portfolio_v2" 
                target='_blank' rel='noopener noreferrer' 
                className='text-blue-500 hover:text-red-400'><h2>Live:- Currently unavailable | Github</h2></a>
              </div>
              <div className='project-1-r'>
                <img src={img3}/>
              </div>
            </div>
            <div className="project-1">
              <div className='project-1-l'>
                <h1>
                  Jevan Pustak: Smart Indian Recipe Platform
                </h1><br></br>
                <p><span className='font-cge'>●</span> Developed an Indian recipe website showcasing regional cuisines for home cooks.</p>
                <p><span className='font-cge'>●</span> Designed an intuitive UI categorizing dishes (Maharashtrian, South Indian) with ingredients and step-by-step instructions.</p>
                <p><span className='font-cge'>●</span> Built a smart cooking timer using JavaScript setInterval to notify when to add ingredients.</p>
                <br></br>
                <h2>
                  Techstack:<i className='devicon-html5-plain colored'></i>
                            <i className='devicon-css3-plain colored'></i>
                            <i className='devicon-javascript-plain'></i>
                </h2><br></br>
                <a href="https://topperguy7.github.io/Jevanpustak/" 
                target='_blank' rel='noopener noreferrer' 
                className='text-blue-500 hover:text-red-400'><h2>Live:- JevanPustak</h2></a>
              </div>
              <div className='project-1-r'>
                <img src={img4}/>
              </div>
            </div>
            <div className="project-1">
              <div className='project-1-l'>
                <h1>
                  Yoo!Gamer – Multi-Game React Platform
                </h1><br></br>
                <p><span className='font-cge'>●</span> Developed a responsive multi-game platform with clean UI for playing browser games in one place.</p>
                <p><span className='font-cge'>●</span> Implemented Tic-Tac-Toe and Hangman using React state management and component architecture.</p>
                <p><span className='font-cge'>●</span> Designed navigation to switch between games, allowing easy addition of future games.</p>
                <br></br>
                <h2>
                  Techstack:<i className='devicon-react-plain colored'></i>
                            <i className='devicon-tailwindcss-plain colored'></i>
                </h2><br></br>
                <a href="https://github.com/topperguy7/multi-game" 
                target='_blank' rel='noopener noreferrer' 
                className='text-blue-500 hover:text-red-400'><h2>Live:- Currently unavailable | Github</h2></a>
              </div>
              <div className='project-1-r'>
                <img src={img5}/>
              </div>
            </div>

            <div className="project-1">
              <div className='project-1-l'>
                <h1>
                  Frontend Previewer – Browser-Based Live Code Editor
                </h1><br></br>
                <p><span className='font-cge'>●</span>Built browser-based previewer enabling users write HTML, CSS, JavaScript with real-time iframe output.</p>
                <p><span className='font-cge'>●</span>Implemented tab navigation and theme toggle for better usability and customizable coding environment.</p>
                <p><span className='font-cge'>●</span>Integrated localStorage for persistent code saving and designed responsive interface supporting multiple screen sizes.</p><br></br>
                <h2>
                  Techstack:<i className='devicon-html5-plain colored'></i>
                            <i className='devicon-css3-plain colored'></i>
                            <i className='devicon-javascript-plain'></i>
                </h2><br></br>
                <a href="https://topperguy7.github.io/frontend-previewer/" 
                target='_blank' rel='noopener noreferrer' 
                className='text-blue-500 hover:text-red-400'><h2>Live:- frontend-previewer</h2></a>
              </div>
              <div className='project-1-r'>
                <img src={img1}/>
              </div>
            </div>
            <div className="project-1">
              <div className='project-1-l'>
                <h1>
                  NewsMania – News Aggregator Web Application
                </h1><br></br>
                <p><span className='font-cge'>●</span> Built a dynamic news web application consuming third-party News API to display real-time headlines.</p>
                <p><span className='font-cge'>●</span>Implemented category-based filtering and DOM-based dynamic rendering for interactive content updates.</p>
                <p><span className='font-cge'>●</span> Designed a fully responsive UI for seamless mobile and desktop experience.</p>
                <br></br>
                <h2>
                  Techstack:<i className='devicon-react-plain colored'></i>
                            <i className='devicon-tailwindcss-plain colored'></i>
                            <i className='devicon-nodejs-plain-wordmark colored'></i>
                            <i className='devicon-express-original colored'></i>
                </h2><br></br>
                <a href="https://github.com/topperguy7" 
                target='_blank' rel='noopener noreferrer' 
                className='text-blue-500 hover:text-red-400'><h2>Live:- Currently unavailable | Github</h2></a>
              </div>
              <div className='project-1-r'>
                <img src={img2}/>
              </div>
            </div>
            <div className="project-1">
              <div className='project-1-l'>
                <h1>
                  Interactive Portfolio Website
                </h1><br></br>
                <p><span className='font-cge'>●</span> Built a pixel-style developer portfolio with an animated scrolling background and card-based UI for navigation.</p>
                <p><span className='font-cge'>●</span> Implemented interactive pop-up sections using JavaScript to display Skills, Projects, Experience, and Resume without reloading the page.</p>
                <p><span className='font-cge'>●</span> Designed a responsive interface with CSS animations and event-driven DOM manipulation for smooth user interaction.</p>
                <br></br>
                <h2>
                  Techstack:<i className='devicon-html5-plain colored'></i>
                            <i className='devicon-css3-plain colored'></i>
                            <i className='devicon-javascript-plain'></i>
                </h2><br></br>
                <a href="https://github.com/topperguy7/portfolio_v2" 
                target='_blank' rel='noopener noreferrer' 
                className='text-blue-500 hover:text-red-400'><h2>Live:- Currently unavailable | Github</h2></a>
              </div>
              <div className='project-1-r'>
                <img src={img3}/>
              </div>
            </div>
            <div className="project-1">
              <div className='project-1-l'>
                <h1>
                  Jevan Pustak: Smart Indian Recipe Platform
                </h1><br></br>
                <p><span className='font-cge'>●</span> Developed an Indian recipe website showcasing regional cuisines for home cooks.</p>
                <p><span className='font-cge'>●</span> Designed an intuitive UI categorizing dishes (Maharashtrian, South Indian) with ingredients and step-by-step instructions.</p>
                <p><span className='font-cge'>●</span> Built a smart cooking timer using JavaScript setInterval to notify when to add ingredients.</p>
                <br></br>
                <h2>
                  Techstack:<i className='devicon-html5-plain colored'></i>
                            <i className='devicon-css3-plain colored'></i>
                            <i className='devicon-javascript-plain'></i>
                </h2><br></br>
                <a href="https://topperguy7.github.io/Jevanpustak/" 
                target='_blank' rel='noopener noreferrer' 
                className='text-blue-500 hover:text-red-400'><h2>Live:- JevanPustak</h2></a>
              </div>
              <div className='project-1-r'>
                <img src={img4}/>
              </div>
            </div>
            <div className="project-1">
              <div className='project-1-l'>
                <h1>
                  Yoo!Gamer – Multi-Game React Platform
                </h1><br></br>
                <p><span className='font-cge'>●</span> Developed a responsive multi-game platform with clean UI for playing browser games in one place.</p>
                <p><span className='font-cge'>●</span> Implemented Tic-Tac-Toe and Hangman using React state management and component architecture.</p>
                <p><span className='font-cge'>●</span> Designed navigation to switch between games, allowing easy addition of future games.</p>
                <br></br>
                <h2>
                  Techstack:<i className='devicon-react-plain colored'></i>
                            <i className='devicon-tailwindcss-plain colored'></i>
                </h2><br></br>
                <a href="https://github.com/topperguy7/multi-game" 
                target='_blank' rel='noopener noreferrer' 
                className='text-blue-500 hover:text-red-400'><h2>Live:- Currently unavailable | Github</h2></a>
              </div>
              <div className='project-1-r'>
                <img src={img5}/>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;