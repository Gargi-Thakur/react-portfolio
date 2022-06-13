import geklifecare from '../img/portImages/geklifecare.png';
import triviaNight from '../img/portImages/triviaNight.png';
import hikeIt from '../img/portImages/hikeIt.png';
import valerian from '../img/portImages/valerian.png';
import soundpath from '../img/portImages/soundpath.png';
import portfolio from '../img/portImages/portfolio.png';

const projects = [
    {
        id: 1,
        category: 'Wordpress',
        image: geklifecare,
        link1: 'https://geklifecare.com/',
        // link2: 'https://www.google.com',
        title: 'Professional Company Website',
        text: 'Created custom website using Wordpress, Elementor, CSS and PHP.'
    },
    {
        id: 2,
        category: 'MERN Stack',
        image: triviaNight,
        link1: 'https://trivia-night-langara.herokuapp.com/',
        // link2: 'https://www.google.com',
        title: 'Trivia night- Quiz creator app',
        text: 'Created a quiz creator app using MongoDB, Express, React JS, NodeJS and CSS .'
    },
    {
        id: 3,
        category: 'MERN Stack',
        image: hikeIt,
        link1: 'https://hike-it-fe.herokuapp.com/',
        // link2: 'https://www.google.com',
        title: 'HikeIt- A hiking app',
        text: 'Created a hiking app using MongoDB, Express, React JS, NodeJS, SASS, CSS, Google Geocoding API,  .'
    },
    {
        id: 4,
        category: 'UI/UX design',
        image: valerian,
        link1: 'https://xd.adobe.com/view/69bc8326-89fc-4997-b9cd-b44d9605e7a5-3cef/',
        // link2: 'https://www.google.com',
        title: 'Valerian- Concept design for a healthcare app',
        text: 'Created using Adobe XD, Illustrator, Photoshop.'
    },
    {
        id: 5,
        category: 'Progressive Web App',
        image: soundpath,
        link1: 'https://soundpath.netlify.app/',
        // link2: 'https://www.google.com',
        title: 'Soundpath- A music playlist manager app',
        text: 'Created using HTML, CSS, JavaScript, PWA and Spotify API. '
    },
    {
        id: 6,
        category: 'ReactJS',
        image: portfolio,
        link1: 'https://gargithakur.com/',
        // link2: 'https://www.google.com',
        title: 'A portfolio website',
        text: 'Created using ReactJS, styled-components/CSS and Google Form. '
    },
    {
        id: 7,
        category: 'MERN Stack',
        image: portfolio,
        link1: 'https://gargithakur.com/',
        // link2: 'https://www.google.com',
        title: 'A restaurant table booking app',
        text: 'Created using React-native, Native-base, MongoDB, NodeJS, Express, Google APIs.'
    }
]

export default projects;