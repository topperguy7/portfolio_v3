import 'devicon/devicon.min.css';
import img1 from './images/project-1.png'
import img2 from './images/project-2.png'
import img3 from './images/project-3.png'
import img4 from './images/project-4.png'
import img5 from './images/project-5.png'
import img6 from './images/project-6.png'

function Projects(props){

  return(
    <>
      <div className="project" id="projects">

        <h1 className='lg:text-4xl font-bold'>✨ Projects</h1>

        <div className='project-contain'>
          <div className='project-wrapper'>

            <div className="project-1">
              <div className='project-1-l'>
                <h1>
                  Frontend Previewer – Browser-Based Live Code Editor
                </h1>
                <h3>⚡ Live <span className='font-cge'>●</span> 💻 Editor <span className='font-cge'>●</span> 👁 Preview</h3><br></br>
                <p><span className='font-cge'>●</span>Built a browser-based live code editor with real-time preview using iframe</p>
                <p><span className='font-cge'>●</span>Added tab navigation and theme toggle for better usability</p>
                <p><span className='font-cge'>●</span>Implemented localStorage for persistent code saving</p><br></br>
                <h2>
                  Techstack:<i className='devicon-html5-plain colored'></i>
                            <i className='devicon-css3-plain colored'></i>
                            <i className='devicon-javascript-plain'></i>
                </h2><br></br>
                <a href='https://github.com/topperguy7/frontend-previewer' 
                target='_blank' rel='noopener noreferrer'
                className='text-blue-500 hover:text-red-400'><h2>View Code</h2></a>
                <a href="https://topperguy7.github.io/frontend-previewer/" 
                target='_blank' rel='noopener noreferrer' 
                className='text-blue-500 hover:text-red-400'><h2>Live Demo</h2></a>
              </div>
              <div className='project-1-r'>
                <img src={img1}/>
              </div>
            </div>
            <div className="project-1">
              <div className='project-1-l'>
                <h1>
                  NewsMania – News Aggregator Web Application
                </h1>
                <h3>⚡ Real-time <span className='font-cge'>●</span> 📰 News <span className='font-cge'>●</span> 🎯 Filtering</h3><br></br>
                <p><span className='font-cge'>●</span>Built a MERN app delivering real-time news across 8+ categories via third-party APIs.</p>
                <p><span className='font-cge'>●</span>Integrated AI summarization using Gemini API</p>
                <p><span className='font-cge'>●</span>Implemented JWT and Bcrypt to prevent XSS and secure user sessions.</p>
                <p><span className='font-cge'>●</span>Developed role-based search and route protection using custom middleware.</p>
                <h2>
                  Techstack:<i className='devicon-react-plain colored'></i>
                            <i className='devicon-tailwindcss-plain colored'></i>
                            <i className='devicon-nodejs-plain-wordmark colored'></i>
                            <i className='devicon-express-original colored'></i>
                </h2><br></br>
                <a href='https://github.com/topperguy7/NewsMania' 
                target='_blank' rel='noopener noreferrer'
                className='text-blue-500 hover:text-red-400'><h2>View Code</h2></a>
                <a 
                target='_blank' rel='noopener noreferrer' 
                className='text-blue-500 hover:text-red-400'><h2>Live (Coming Soon)</h2></a>
              </div>
              <div className='project-1-r'>
                <img src={img2}/>
              </div>
            </div>
            <div className="project-1">
              <div className='project-1-l'>
                <h1>
                  Interactive Portfolio Website
                </h1>
                <h3>🎨 Animated <span className='font-cge'>●</span> 🧩 Interactive <span className='font-cge'>●</span> 📱 Responsive</h3><br></br>
                <p><span className='font-cge'>●</span>Built a pixel-style portfolio with animated scrolling UI</p>
                <p><span className='font-cge'>●</span>Created dynamic pop-up sections (no page reloads)</p>
                <p><span className='font-cge'>●</span>Implemented smooth CSS animations and DOM interactions</p>
                <p><span className='font-cge'>●</span>Designed fully responsive layout</p>
                <br></br>
                <h2>
                  Techstack:<i className='devicon-html5-plain colored'></i>
                            <i className='devicon-css3-plain colored'></i>
                            <i className='devicon-javascript-plain'></i>
                </h2><br></br>
                <a href='https://github.com/topperguy7/portfolio_v2' 
                target='_blank' rel='noopener noreferrer'
                className='text-blue-500 hover:text-red-400'><h2>View Code</h2></a>
                <a 
                target='_blank' rel='noopener noreferrer' 
                className='text-blue-500 hover:text-red-400'><h2>Live (Coming Soon)</h2></a>
              </div>
              <div className='project-1-r'>
                <img src={img3}/>
              </div>
            </div>
            <div className="project-1">
              <div className='project-1-l'>
                <h1>
                  Jevan Pustak: Smart Indian Recipe Platform
                </h1>
                <h3>🍛 Recipes <span className='font-cge'>●</span> ⏱ Timer <span className='font-cge'>●</span> 📂 Categories</h3><br></br>
                <p><span className='font-cge'>●</span>Developed recipe platform for regional Indian cuisines</p>
                <p><span className='font-cge'>●</span>Implemented categorized browsing with step-by-step guides</p>
                <p><span className='font-cge'>●</span>Built cooking timer using JavaScript</p>
                <p><span className='font-cge'>●</span>Designed responsive and user-friendly UI</p>
                <br></br>
                <h2>
                  Techstack:<i className='devicon-html5-plain colored'></i>
                            <i className='devicon-css3-plain colored'></i>
                            <i className='devicon-javascript-plain'></i>
                </h2><br></br>
                <a href='https://github.com/topperguy7/Jevanpustak' 
                target='_blank' rel='noopener noreferrer'
                className='text-blue-500 hover:text-red-400'><h2>View Code</h2></a>
                <a href="https://topperguy7.github.io/Jevanpustak/" 
                target='_blank' rel='noopener noreferrer' 
                className='text-blue-500 hover:text-red-400'><h2>Live Demo</h2></a>
              </div>
              <div className='project-1-r'>
                <img src={img4}/>
              </div>
            </div>
            <div className="project-1">
              <div className='project-1-l'>
                <h1>
                  Yoo!Gamer – Multi-Game React Platform
                </h1>
                <h3>🎮 Games <span className='font-cge'>●</span> ⚛️ React <span className='font-cge'>●</span> 🧠 State</h3><br></br>
                <p><span className='font-cge'>●</span>Built multi-game platform using React</p>
                <p><span className='font-cge'>●</span>Developed Tic-Tac-Toe and Hangman Memory with state management</p>
                <p><span className='font-cge'>●</span>Designed scalable component-based architecture</p>
                <p><span className='font-cge'>●</span>Created responsive and clean UI</p>
                <br></br>
                <h2>
                  Techstack:<i className='devicon-react-plain colored'></i>
                            <i className='devicon-tailwindcss-plain colored'></i>
                </h2><br></br>
                <a href='https://github.com/topperguy7/multi-game' 
                target='_blank' rel='noopener noreferrer'
                className='text-blue-500 hover:text-red-400'><h2>View Code</h2></a>
                <a 
                target='_blank' rel='noopener noreferrer' 
                className='text-blue-500 hover:text-red-400'><h2>Live (Coming Soon)</h2></a>
              </div>
              <div className='project-1-r'>
                <img src={img5}/>
              </div>
            </div>
            <div className="project-1">
              <div className='project-1-l'>
                <h1>
                  Finflow – Smart Expense Tracker
                </h1>
                <h3>🎮 Games <span className='font-cge'>●</span> ⚛️ React <span className='font-cge'>●</span> 🧠 State</h3><br></br>
                <p><span className='font-cge'>●</span>Built finance tracker with interactive dashboards and visual charts</p>
                <p><span className='font-cge'>●</span>Developed transaction management with smart spending trend insights</p>
                <p><span className='font-cge'>●</span>Implemented LocalStorage data persistence and Context API state</p>
                <p><span className='font-cge'>●</span>Designed responsive Tailwind UI with dark/light mode toggle</p>
                <br></br>
                <h2>
                  Techstack:<i className='devicon-react-plain colored'></i>
                            <i className='devicon-tailwindcss-plain colored'></i>
                </h2><br></br>
                <a href='https://github.com/topperguy7/FinFlow' 
                target='_blank' rel='noopener noreferrer'
                className='text-blue-500 hover:text-red-400'><h2>View Code</h2></a>
                <a href='https://finflow-topperguy.netlify.app/'
                target='_blank' rel='noopener noreferrer' 
                className='text-blue-500 hover:text-red-400'><h2>Live Demo</h2></a>
              </div>
              <div className='project-1-r'>
                <img src={img6}/>
              </div>
            </div>

            <div className="project-1 hidden md:block">
              <div className='project-1-l'>
                <h1>
                  Frontend Previewer – Browser-Based Live Code Editor
                </h1>
                <h3>⚡ Live <span className='font-cge'>●</span> 💻 Editor <span className='font-cge'>●</span> 👁 Preview</h3><br></br>
                <p><span className='font-cge'>●</span>Built a browser-based live code editor with real-time preview using iframe</p>
                <p><span className='font-cge'>●</span>Added tab navigation and theme toggle for better usability</p>
                <p><span className='font-cge'>●</span>Implemented localStorage for persistent code saving</p><br></br>
                <h2>
                  Techstack:<i className='devicon-html5-plain colored'></i>
                            <i className='devicon-css3-plain colored'></i>
                            <i className='devicon-javascript-plain'></i>
                </h2><br></br>
                <a href='https://github.com/topperguy7/frontend-previewer' 
                target='_blank' rel='noopener noreferrer'
                className='text-blue-500 hover:text-red-400'><h2>View Code</h2></a>
                <a href="https://topperguy7.github.io/frontend-previewer/" 
                target='_blank' rel='noopener noreferrer' 
                className='text-blue-500 hover:text-red-400'><h2>Live Demo</h2></a>
              </div>
              <div className='project-1-r'>
                <img src={img1}/>
              </div>
            </div>
            <div className="project-1 hidden md:block">
              <div className='project-1-l'>
                <h1>
                  NewsMania – News Aggregator Web Application
                </h1>
                <h3>⚡ Real-time <span className='font-cge'>●</span> 📰 News <span className='font-cge'>●</span> 🎯 Filtering</h3><br></br>
                <p><span className='font-cge'>●</span>Built a MERN app delivering real-time news across 8+ categories via third-party APIs.</p>
                <p><span className='font-cge'>●</span>Integrated AI summarization using Gemini API</p>
                <p><span className='font-cge'>●</span>Implemented JWT and Bcrypt to prevent XSS and secure user sessions.</p>
                <p><span className='font-cge'>●</span>Developed role-based search and route protection using custom middleware.</p>
                <h2>
                  Techstack:<i className='devicon-react-plain colored'></i>
                            <i className='devicon-tailwindcss-plain colored'></i>
                            <i className='devicon-nodejs-plain-wordmark colored'></i>
                            <i className='devicon-express-original colored'></i>
                </h2><br></br>
                <a href='https://github.com/topperguy7/NewsMania' 
                target='_blank' rel='noopener noreferrer'
                className='text-blue-500 hover:text-red-400'><h2>View Code</h2></a>
                <a 
                target='_blank' rel='noopener noreferrer' 
                className='text-blue-500 hover:text-red-400'><h2>Live (Coming Soon)</h2></a>
              </div>
              <div className='project-1-r'>
                <img src={img2}/>
              </div>
            </div>
            <div className="project-1  hidden md:block">
              <div className='project-1-l'>
                <h1>
                  Interactive Portfolio Website
                </h1>
                <h3>🎨 Animated <span className='font-cge'>●</span> 🧩 Interactive <span className='font-cge'>●</span> 📱 Responsive</h3><br></br>
                <p><span className='font-cge'>●</span>Built a pixel-style portfolio with animated scrolling UI</p>
                <p><span className='font-cge'>●</span>Created dynamic pop-up sections (no page reloads)</p>
                <p><span className='font-cge'>●</span>Implemented smooth CSS animations and DOM interactions</p>
                <p><span className='font-cge'>●</span>Designed fully responsive layout</p>
                <br></br>
                <h2>
                  Techstack:<i className='devicon-html5-plain colored'></i>
                            <i className='devicon-css3-plain colored'></i>
                            <i className='devicon-javascript-plain'></i>
                </h2><br></br>
                <a href='https://github.com/topperguy7/portfolio_v2' 
                target='_blank' rel='noopener noreferrer'
                className='text-blue-500 hover:text-red-400'><h2>View Code</h2></a>
                <a 
                target='_blank' rel='noopener noreferrer' 
                className='text-blue-500 hover:text-red-400'><h2>Live (Coming Soon)</h2></a>
              </div>
              <div className='project-1-r'>
                <img src={img3}/>
              </div>
            </div>
            <div className="project-1  hidden md:block">
              <div className='project-1-l'>
                <h1>
                  Jevan Pustak: Smart Indian Recipe Platform
                </h1>
                <h3>🍛 Recipes <span className='font-cge'>●</span> ⏱ Timer <span className='font-cge'>●</span> 📂 Categories</h3><br></br>
                <p><span className='font-cge'>●</span>Developed recipe platform for regional Indian cuisines</p>
                <p><span className='font-cge'>●</span>Implemented categorized browsing with step-by-step guides</p>
                <p><span className='font-cge'>●</span>Built cooking timer using JavaScript</p>
                <p><span className='font-cge'>●</span>Designed responsive and user-friendly UI</p>
                <br></br>
                <h2>
                  Techstack:<i className='devicon-html5-plain colored'></i>
                            <i className='devicon-css3-plain colored'></i>
                            <i className='devicon-javascript-plain'></i>
                </h2><br></br>
                <a href='https://github.com/topperguy7/Jevanpustak' 
                target='_blank' rel='noopener noreferrer'
                className='text-blue-500 hover:text-red-400'><h2>View Code</h2></a>
                <a href="https://topperguy7.github.io/Jevanpustak/" 
                target='_blank' rel='noopener noreferrer' 
                className='text-blue-500 hover:text-red-400'><h2>Live Demo</h2></a>
              </div>
              <div className='project-1-r'>
                <img src={img4}/>
              </div>
            </div>
            <div className="project-1 hidden md:block">
              <div className='project-1-l'>
                <h1>
                  Yoo!Gamer – Multi-Game React Platform
                </h1>
                <h3>🎮 Games <span className='font-cge'>●</span> ⚛️ React <span className='font-cge'>●</span> 🧠 State</h3><br></br>
                <p><span className='font-cge'>●</span>Built multi-game platform using React </p>
                <p><span className='font-cge'>●</span>Developed Tic-Tac-Toe and Hangman with state management </p>
                <p><span className='font-cge'>●</span>Designed scalable component-based architecture</p>
                <p><span className='font-cge'>●</span>Created responsive and clean UI</p>
                <br></br>
                <h2>
                  Techstack:<i className='devicon-react-plain colored'></i>
                            <i className='devicon-tailwindcss-plain colored'></i>
                </h2><br></br>
                <a href='https://github.com/topperguy7/multi-game' 
                target='_blank' rel='noopener noreferrer'
                className='text-blue-500 hover:text-red-400'><h2>View Code</h2></a>
                <a 
                target='_blank' rel='noopener noreferrer' 
                className='text-blue-500 hover:text-red-400'><h2>Live (Coming Soon)</h2></a>
              </div>
              <div className='project-1-r'>
                <img src={img5}/>
              </div>
            </div>
            <div className="project-1 hidden md:block">
              <div className='project-1-l'>
                <h1>
                  Finflow – Smart Expense Tracker
                </h1>
                <h3>🎮 Games <span className='font-cge'>●</span> ⚛️ React <span className='font-cge'>●</span> 🧠 State</h3><br></br>
                <p><span className='font-cge'>●</span>Built finance tracker with interactive dashboards and visual charts</p>
                <p><span className='font-cge'>●</span>Developed transaction management with smart spending trend insights</p>
                <p><span className='font-cge'>●</span>Implemented LocalStorage data persistence and Context API state</p>
                <p><span className='font-cge'>●</span>Designed responsive Tailwind UI with dark/light mode toggle</p>
                <br></br>
                <h2>
                  Techstack:<i className='devicon-react-plain colored'></i>
                            <i className='devicon-tailwindcss-plain colored'></i>
                </h2><br></br>
                <a href='https://github.com/topperguy7/FinFlow' 
                target='_blank' rel='noopener noreferrer'
                className='text-blue-500 hover:text-red-400'><h2>View Code</h2></a>
                <a href='https://finflow-topperguy.netlify.app/'
                target='_blank' rel='noopener noreferrer' 
                className='text-blue-500 hover:text-red-400'><h2>Live Demo</h2></a>
              </div>
              <div className='project-1-r'>
                <img src={img6}/>
              </div>
            </div>

          </div>
        </div>
        <p className='lastP'>swipe right to view projects</p>
      </div>
    </>
  );
}

export default Projects;