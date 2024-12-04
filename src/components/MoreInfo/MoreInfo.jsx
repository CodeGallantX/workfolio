import { FaLaptopCode, FaGraduationCap, FaProjectDiagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MoreInfo = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
      <div
        className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg"
        data-aos="fade-up"
      >
        <FaLaptopCode className="text-4xl text-gray-700 mb-4" />
        <h4 className="text-xl font-semibold text-gray-800">Stack</h4>
        <p className="text-gray-600">Front-End, Back-End, Data Science, AI/ML</p>
      </div>
      
      <div
        className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <FaGraduationCap className="text-4xl text-gray-700 mb-4" />
        <h4 className="text-xl font-semibold text-gray-800">Education</h4>
        <p className="text-gray-600">
          <span className="font-bold">Computer Science</span> <br />
          Lagos University of Science and Technology
        </p>
      </div>

      {/* <div
        className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <FaProjectDiagram className="text-4xl text-purple-500 mb-4" />
        <h4 className="text-xl font-semibold text-gray-800">Projects</h4>
        <p className="text-gray-600">
          <span className="font-bold">
            <Link to="/portfolio" className="text-blue-500 hover:underline">
              Click to View All My Projects
            </Link>
          </span>
        </p>
      </div> */}
    </div>
  );
};

export default MoreInfo;