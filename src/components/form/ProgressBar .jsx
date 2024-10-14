const ProgressBar = ({ step }) => {
    return (
        <div className="relative flex justify-between items-center w-full">
      {['Intro', 'Contact', 'Password'].map((title, index) => (
        <div key={index} className="relative flex items-center justify-center w-full">
          
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full z-10 ${
                index <= step ? 'bg-zinc-800 text-white' : 'bg-gray-300 text-gray-800'
              }`}
            >
              {index + 1}
            </div>
            <span className={`${index <= step ? 'text-zinc-800' : 'text-gray-800'} text-xs mt-2`}>
              {title}
            </span>
          </div>

          
   
        </div>
      ))}
    </div>
    );
  };
  export default ProgressBar