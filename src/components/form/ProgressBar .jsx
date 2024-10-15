const ProgressBar = ({ step }) => {
    return (
        <div className="relative flex justify-between items-center w-full">
      {['Intro', 'Contact', 'Password'].map((title, index) => (
        <div key={index} className="relative flex items-center justify-center w-full">
          
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full z-10 ${
                index <= step ? 'bg-gray-200 text-gray-800' : 'bg-gray-800 text-gray-200'
              }`}
            >
              {index + 1}
            </div>
            <span className={` text-sm ${index <= step ? 'text-gray-400' : 'text-gray-600'} text-xs mt-2`}>
              {title}
            </span>
          </div>

          
   
        </div>
      ))}
    </div>
    );
  };
  export default ProgressBar