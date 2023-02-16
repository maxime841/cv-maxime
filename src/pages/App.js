import './App.css';
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ProgressBar from "@ramonak/react-progress-bar";
import profil from '../assets/homme.webp';
import QRCode from '../assets/frame.png';
import casque from '../assets/illust58-2326.jpg';

function App() {
  const totalStars = 5;
  const activeStarsHTML = 4;
  const activeStarsJavascript = 4;
  const activeStarsNodes = 4;
  const activeStarsREACT = 4;
  const activeStarsSQL = 5;
  const activeStarsSqitch = 3;
  const activeStarsGit = 4;
  const activeStarsAgile = 4;

  return ( 
    <div className="App">
      <header className="App-header">
        <img className="App-photo" src={profil} alt="Portrait" />
        <div className="App-header-content">
          <h1 className="App-header-job">Développeur web et web mobile</h1>
          <span className="App-header-name">Maxime Poirot</span>
        </div>
      </header>
      <div className="App-content">
      <nav className="App-nav">
        <article className="App-profil">
          <h2 className="App-profil-sub-title">Profil</h2>
          <p>En recherche d'un poste dans le developpement web pour developper mes competences acquises et en avoir de nouvelles pour me perfectionner, et ainsi connaître de nouvelles technologies.</p>

        </article>
        <article className="App-contact">
          <h2 className="App-profil-sub-title">Contact</h2>
          <svg xmlns="http://www.w3.org/2000/svg" 
               id="Layer_1" 
               data-name="Layer 1"
               height="20px" 
               width="20px"
               viewBox="0 0 105.67 116.43">
                <title>addresse</title>
                  <path 
                    className="cls-1" 
                    d="M84.32,80.09c13,3.68,21.35,9.56,21.35,16.19,0,11.13-23.65,20.15-52.83,20.15S0,107.41,0,96.28c0-6.79,8.79-12.79,22.27-16.44l1.48,2c1,1.37,2.13,2.73,3.26,4.06-9.43,2.28-15.47,5.8-15.47,9.75,0,6.88,18.29,12.46,40.86,12.46s40.86-5.58,40.86-12.46c0-3.67-5.24-7-13.56-9.26,1.64-2,3.18-4.14,4.62-6.3Z"/>
                  <path 
                    className="cls-2" 
                    d="M70.19,82.78A69.18,69.18,0,0,1,55.08,95.29a2.14,2.14,0,0,1-2.43.07,85,85,0,0,1-21-18.76C24,67,19.13,56.34,17.48,46.07s-.11-20.42,5.07-28.56a35,35,0,0,1,7.83-8.68C37.68,3,46-.06,54.34,0A34.89,34.89,0,0,1,83.15,16.68c5.57,9.17,6.77,20.87,4.33,32.72A71.93,71.93,0,0,1,70.19,82.75v0ZM52.76,18.51A17.88,17.88,0,1,1,34.88,36.38,17.87,17.87,0,0,1,52.76,18.51Z"/>
          </svg>
          <p className="App-contact-adress">5 chemin des comtadins 84320 Entraigues sur la sorgue</p>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="#000000" 
            height="20px" 
            width="20px" 
            version="1.1" 
            id="Capa_1" 
            viewBox="0 0 27.936 27.936">
          <g>
	        <path d="M19.846,0H8.092C6.967,0,6.059,0.913,6.059,2.034v23.868c0,1.122,0.908,2.034,2.033,2.034h11.754   c1.121,0,2.031-0.912,2.031-2.034V2.034C21.877,0.913,20.967,0,19.846,0z M11.243,1.472h5.451v0.594h-5.451V1.472z M7.584,3.433   h12.77v11.039H7.584V3.433z M16.506,19.835v-1.764h3.525v1.764H16.506z M20.032,20.823v1.764h-3.525v-1.764H20.032z M16.506,17.155   V15.39h3.525v1.765H16.506z M11.43,25.337H7.903v-1.763h3.527V25.337z M11.43,22.586H7.903v-1.764h3.527V22.586z M11.43,19.835   H7.903v-1.764h3.527V19.835z M11.43,17.155H7.903V15.39h3.527V17.155z M15.733,25.337h-3.528v-1.763h3.527L15.733,25.337   L15.733,25.337z M15.733,22.586h-3.528v-1.764h3.527L15.733,22.586L15.733,22.586z M15.733,19.835h-3.528v-1.764h3.527   L15.733,19.835L15.733,19.835z M15.733,17.155h-3.528V15.39h3.527L15.733,17.155L15.733,17.155z M16.506,23.575h3.525v1.763h-3.525   C16.506,25.338,16.506,23.575,16.506,23.575z M19.879,27.855h-0.861c-0.281,0-0.508-0.228-0.508-0.507s0.227-0.504,0.508-0.504   h0.861c0.279,0,0.508,0.225,0.508,0.504C20.387,27.627,20.159,27.855,19.879,27.855z"/>
	        </g> 
          </svg>
          <p className="App-contact-tel">06 63 89 09 84</p>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            version="1.1" 
            width="20px" 
            height="20px" 
            viewBox="0 0 256 256">
            <g 
              transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
	          <path 
              d="M 75.546 78.738 H 14.455 C 6.484 78.738 0 72.254 0 64.283 V 25.716 c 0 -7.97 6.485 -14.455 14.455 -14.455 h 61.091 c 7.97 0 14.454 6.485 14.454 14.455 v 38.567 C 90 72.254 83.516 78.738 75.546 78.738 z M 14.455 15.488 c -5.64 0 -10.228 4.588 -10.228 10.228 v 38.567 c 0 5.64 4.588 10.229 10.228 10.229 h 61.091 c 5.64 0 10.228 -4.589 10.228 -10.229 V 25.716 c 0 -5.64 -4.588 -10.228 -10.228 -10.228 H 14.455 z" 
              transform=" matrix(1 0 0 1 0 0) " 
            />
	          <path 
              d="M 11.044 25.917 C 21.848 36.445 32.652 46.972 43.456 57.5 c 2.014 1.962 5.105 -1.122 3.088 -3.088 C 35.74 43.885 24.936 33.357 14.132 22.83 C 12.118 20.867 9.027 23.952 11.044 25.917 L 11.044 25.917 z" 
              transform=" matrix(1 0 0 1 0 0) " 
            />
	          <path 
              d="M 46.544 57.5 c 10.804 -10.527 21.608 -21.055 32.412 -31.582 c 2.016 -1.965 -1.073 -5.051 -3.088 -3.088 C 65.064 33.357 54.26 43.885 43.456 54.412 C 41.44 56.377 44.529 59.463 46.544 57.5 L 46.544 57.5 z" 
              transform=" matrix(1 0 0 1 0 0) " 
            />
	          <path 
              d="M 78.837 64.952 c -7.189 -6.818 -14.379 -13.635 -21.568 -20.453 c -2.039 -1.933 -5.132 1.149 -3.088 3.088 c 7.189 6.818 14.379 13.635 21.568 20.453 C 77.788 69.973 80.881 66.89 78.837 64.952 L 78.837 64.952 z" 
              transform=" matrix(1 0 0 1 0 0) " 
            />
	          <path d="M 14.446 68.039 c 7.189 -6.818 14.379 -13.635 21.568 -20.453 c 2.043 -1.938 -1.048 -5.022 -3.088 -3.088 c -7.189 6.818 -14.379 13.635 -21.568 20.453 C 9.315 66.889 12.406 69.974 14.446 68.039 L 14.446 68.039 z" 
              transform=" matrix(1 0 0 1 0 0) " 
             />
            </g>
          </svg>
          <p className="App-contact-mail">maxime.poirot@gmail.com</p>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 30 30" 
            width="20px" 
            height="20px">    
            <path 
              d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/>
          </svg>
          <p className="App-contact-github">/maxime-poirot</p>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 30 30" 
            width="20px" 
            height="20px">    
            <path 
              d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z"/>
          </svg>
          <p className="App-contact-linkedin">https://github.com/maxime841</p>
        </article>
        <article className="App-qr-code">
          <h2 className="App-profil-sub-title">QR Code Github</h2>
          <img className="qrcode" src={QRCode} alt="portrait qr code" />
        </article>
      </nav>
      <div className="App-information">
      <section className="timeline">
        <h3 className="App-education">Scolarité</h3>
          <ol className="App-frise">
            <li>
              <div>
                <time>1984 </time>
                Naissance
              </div>
            </li>
            <li>
              <div>
                <time>2002 </time>
                BEP Electronique
              </div>
            </li>
            <li>
              <div>
                <time>2004 </time>
                BAC STI Electronique
              </div>
            </li>
            <li>
              <div>
                <time>2007 </time>
                BTS Système Electronique
              </div>
            </li>
            <li>
              <div>
                <time>2008 </time>
                Licence Professionnelle AII Option electronique embarquée
              </div>
            </li>
            <li>
              <div>
                <time>2020 </time>
                Formation Développeur web et web mobile (5 mois)
              </div>
            </li>
            <li>
              <div>
                <time>2022 </time>
                Titre professionnel Développeur web et web mobile
              </div>
            </li>
          </ol>
        </section>
        <section className="App-work">
          <h3 className="App-work-title">Expériences professionnelles</h3>
          <ul>
            <li>
              2021-2022 Blog Game of Throne API en express et blog en REACT
            </li>
            <li>
              2020-2021 Asela Site vitrine en vue.js et back office en express
            </li>
            <li>
              2014-2016 Professeur de technologie niveau collège
            </li>
            <li>
              2008-2012 2016-2018 Technicien en electronique
            </li>
            <li>
              2013-2014 Conducteur de ligne en agro-alimentaire
            </li>
          </ul>
          <svg className="svg-pc" 
            xmlns="http://www.w3.org/2000/svg" 
            id="Layer_1" 
            data-name="Layer 1" 
            viewBox="0 0 800 800">
              <title>computer</title>
              <path 
            class="cls-1" 
            d="M90.11,21.7h28.81a4,4,0,0,1,4,4V86.93a4,4,0,0,1-4,4H90.11a4,4,0,0,1-4-4V25.65a4,4,0,0,1,4-3.95ZM3,0H106.55a3.05,3.05,0,0,1,3,3v7.85h-4V7a2.69,2.69,0,0,0-2.69-2.69H6.67A2.69,2.69,0,0,0,4,7V61.87a2.7,2.7,0,0,0,2.68,2.69H76.1v11.6H3a3,3,0,0,1-3-3V3A3.05,3.05,0,0,1,3,0ZM41,80.36H68.59c.07,4.77,2,9,7.36,12.41H33.64C37.93,89.66,41,85.91,41,80.36Zm73.23-42.28h2.87v1.64h-2.87V38.08Zm-9.72,36.43a4.31,4.31,0,1,1-4.31,4.3,4.31,4.31,0,0,1,4.31-4.3Zm-13-40.18h26a.82.82,0,0,1,.82.82v4.47a.83.83,0,0,1-.82.83h-26a.82.82,0,0,1-.82-.82V35.15a.82.82,0,0,1,.82-.82Z"/>
          </svg>
          <svg className="svg-mouse"
          xmlns="http://www.w3.org/2000/svg" 
          shape-rendering="geometricPrecision" 
          text-rendering="geometricPrecision" 
          image-rendering="optimizeQuality" 
          fill-rule="evenodd" 
          clip-rule="evenodd" 
          viewBox="0 0 5000 5000">
            <path 
            fill-rule="nonzero" 
            d="M122.89 495.31h33.22c29.19 0 55.74-11.95 74.99-31.2 19.24-19.25 31.2-45.8 31.2-74.99V275.56H16.7v113.56c0 29.19 11.96 55.74 31.2 74.99 19.25 19.25 45.8 31.2 74.99 31.2zm5.23-412.59V64.69c0-9.7-1.53-17.63-4.22-23.92-3.06-7.16-7.7-12.31-13.31-15.63-5.76-3.4-12.72-5.02-20.22-5.02-8.35 0-17.26 1.99-25.9 5.68-5.1 2.16-11-.21-13.16-5.31-2.17-5.1.21-10.99 5.3-13.16C67.77 2.56 79.38 0 90.37 0c10.96 0 21.43 2.52 30.44 7.85 9.17 5.43 16.7 13.7 21.56 25.06 3.74 8.77 5.88 19.33 5.88 31.78v18.03h7.86c33.8 0 64.53 13.82 86.8 36.09 22.27 22.27 36.09 53 36.09 86.8v183.51c0 33.8-13.82 64.53-36.09 86.8-22.27 22.27-53 36.09-86.8 36.09h-33.22c-33.8 0-64.53-13.82-86.8-36.09C13.82 453.65 0 422.92 0 389.12V205.61c0-33.8 13.82-64.53 36.09-86.8 22.27-22.27 53-36.09 86.8-36.09h5.23zM262.3 258.86v-53.25c0-29.19-11.96-55.74-31.2-74.99-19.25-19.25-45.8-31.2-74.99-31.2h-6.55v50.99c7.28 3.71 12.3 11.29 12.3 19.94v35.75c0 8.64-5.03 16.22-12.3 19.93v32.83H262.3zm-132.86 0v-32.82c-7.26-3.7-12.3-11.26-12.3-19.94v-35.75c0-8.68 5.02-16.25 12.3-19.94V99.42h-6.55c-29.19 0-55.74 11.95-74.99 31.2-19.24 19.25-31.2 45.8-31.2 74.99v53.25h112.74z"/>
          </svg>
          <svg className="svg-user" 
            xmlns="http://www.w3.org/2000/svg" 
            height="50px" 
            width="50px" 
            version="1.1" 
            id="Capa_1" 
            viewBox="0 0 60.671 60.671" >
              <g>
	              <g>
		            <ellipse 
                cx="30.336" 
                cy="12.097" 
                rx="11.997" 
                ry="12.097"/>
		              <path 
                  d="M35.64,30.079H25.031c-7.021,0-12.714,5.739-12.714,12.821v17.771h36.037V42.9    C48.354,35.818,42.661,30.079,35.64,30.079z"/>
	              </g>
              </g>
            </svg>
            <svg className="svg-keyboard"
              xmlns="http://www.w3.org/2000/svg" 
              version="1.1" 
              id="_x32_" 
              viewBox="0 0 6000 6000">
              <g>
	              <path class="st0" d="M459.576,99.307H52.423C23.524,99.307,0,122.837,0,151.736v192.879c0,37.536,30.537,68.078,68.068,68.078   h375.862c37.532,0,68.069-30.542,68.069-68.078V151.736C512,122.837,488.475,99.307,459.576,99.307z M485.515,344.615   c0,22.934-18.655,41.589-41.584,41.589H68.068c-22.929,0-41.584-18.655-41.584-41.589V151.736   c0-14.306,11.638-25.938,25.938-25.938h407.154c14.301,0,25.938,11.633,25.938,25.938V344.615z"/>
	                <rect x="189.792" y="233.929" class="st0" width="44.138" height="44.142"/>
	                <rect x="256.002" y="233.929" class="st0" width="44.134" height="44.142"/>
	                <rect x="322.207" y="233.929" class="st0" width="44.138" height="44.142"/>
	                <rect x="410.484" y="300.139" class="st0" width="44.134" height="44.134"/>
	                <rect x="189.792" y="167.729" class="st0" width="44.138" height="44.134"/>
	                <rect x="123.587" y="233.929" class="st0" width="44.138" height="44.142"/>
	                <rect x="123.587" y="167.729" class="st0" width="44.138" height="44.134"/>
	                <rect x="57.382" y="300.139" class="st0" width="44.134" height="44.134"/>
	                <rect x="57.382" y="233.929" class="st0" width="44.134" height="44.142"/>
	                <rect x="57.382" y="167.729" class="st0" width="44.134" height="44.134"/>
	                <rect x="256.002" y="167.729" class="st0" width="44.134" height="44.134"/>
	                <rect x="322.207" y="167.729" class="st0" width="44.138" height="44.134"/>
	                <rect x="123.587" y="300.139" class="st0" width="264.825" height="44.134"/>
	                <rect x="388.412" y="167.729" class="st0" width="66.205" height="110.343"/>
              </g>
            </svg>
        </section>
        <section className="App-competences">
        <h3 className="App-competence-title">Compétences</h3>
          <ul>
            <div className="App-competence-liste">
              <li className="App-competence-items">HTML / CSS / SCSS / Bootstrap / Tailwind</li> 
              <Box className="App-competence-items-box">
                {[...new Array(totalStars)].map((arr, index) => {
                return index < activeStarsHTML ? <StarIcon /> : <StarBorderIcon />;
                })}
              </Box>        
              </div>
            <div className="App-competence-liste">
              <li className="App-competence-items">Javascript</li>
              <Box className="App-competence-items-box">
                {[...new Array(totalStars)].map((arr, index) => {
                return index < activeStarsJavascript ? <StarIcon /> : <StarBorderIcon />;
                })}
              </Box>
            </div>
            <div className="App-competence-liste">
              <li className="App-competence-items">NodeJS / Express / Laravel</li>
              <Box className="App-competence-items-box">
                {[...new Array(totalStars)].map((arr, index) => {
                return index < activeStarsNodes ? <StarIcon /> : <StarBorderIcon />;
                })}
              </Box>
            </div>
            <div className="App-competence-liste">
              <li className="App-competence-items">REACT / Typescript</li>
              <Box className="App-competence-items-box">
                {[...new Array(totalStars)].map((arr, index) => {
                return index < activeStarsREACT ? <StarIcon /> : <StarBorderIcon />;
                })}
              </Box>
            </div>
            <div className="App-competence-liste">
              <li className="App-competence-items">PostgreSQL / SQL</li>
              <Box className="App-competence-items-box">
                {[...new Array(totalStars)].map((arr, index) => {
                return index < activeStarsSQL ? <StarIcon /> : <StarBorderIcon />;
                })}
              </Box>
            </div>
            <div className="App-competence-liste">
              <li className="App-competence-items">Sqitch</li>
              <Box className="App-competence-items-box">
                {[...new Array(totalStars)].map((arr, index) => {
                return index < activeStarsSqitch ? <StarIcon /> : <StarBorderIcon />;
                })}
              </Box>
            </div>
            <div className="App-competence-liste">
              <li className="App-competence-items">Github / Git</li>
              <Box className="App-competence-items-box">
                {[...new Array(totalStars)].map((arr, index) => {
                return index < activeStarsGit ? <StarIcon /> : <StarBorderIcon />;
                })}
              </Box>
            </div>
            <div className="App-competence-liste">
              <li className="App-competence-items">Methode Agile / Scrum</li>
              <Box className="App-competence-items-box">
                {[...new Array(totalStars)].map((arr, index) => {
                return index < activeStarsAgile ? <StarIcon /> : <StarBorderIcon />;
                })}
              </Box>
            </div>
          </ul>
        </section>
        <section className="App-languages">
          <img className="casque" src={casque} alt="casque" height={50} width={50} />
          <hr className="ligne-casque"></hr>
          <hr className="ligne-pc"></hr>
          <hr className="ligne-sourie"></hr>
          <hr className="ligne-user"></hr>
          <hr className="ligne-keyboard"></hr>
        <h3 className="App-language-title">Langues</h3>
          <ul className="App-langage-items">
            <div className="App-langage-content">
              <ProgressBar className="langage-french-read" completed={100} width={100} customLabel="lu"/>
                <li className="App-langage-title-french">Français</li>
              <ProgressBar className="langage-french-speak" completed={100} width={100}  customLabel="parler"/>
              </div>
            <div className="App-langage-content">
              <ProgressBar className="langage-french-read" completed={85} width={100} customLabel="read"/>
              <li className="App-langage-title-english">Anglais</li>
              <ProgressBar className="langage-french-speak" completed={60} width={100} customLabel="speak"/>
            </div>
          </ul>
        </section>
        <section className="App-savoir">
        <h3 className="App-savoir-title">Savoir être</h3>
          <ul>
            <li>Capacité d'adaptation</li>
            <li>Rigoureux</li>
            <li>Créatif</li>
          </ul>
        </section>
        <section className="App-hobbies">
        <h3 className="App-hobbies-title">Loisirs</h3>
          <ul>
            <li>Golf</li>
            <li>Musiques Electroniques</li>
          </ul>
        </section>
        </div>
        </div>
    </div>
  );
};
export default App;
