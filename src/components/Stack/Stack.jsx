import firebase from '../../assets/images/firebase.png';
import react from '../../assets/images/react.png';
import figma from '../../assets/images/figma.png';
import git from '../../assets/images/git.png';
import html from '../../assets/images/html.png';
import css from '../../assets/images/css.png';

const Stack = () => {
  return (
    <div
      className="flex flex-col items-center p-8 bg-gray-50 rounded-lg shadow-lg" 
      data-aos="zoom-in" 
      data-aos-delay="600"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">My Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <img src={html} alt="HTML" className="w-16 h-16 object-contain" />
        <img src={css} alt="CSS" className="w-16 h-16 object-contain" />
        <img src={react} alt="React" className="w-16 h-16 object-contain" />
        <img src={firebase} alt="Firebase" className="w-16 h-16 object-contain" />
        <img src={figma} alt="Figma" className="w-16 h-16 object-contain" />
        <img src={git} alt="Git" className="w-16 h-16 object-contain" />
      </div>
    </div>
  );
};

export default Stack;
