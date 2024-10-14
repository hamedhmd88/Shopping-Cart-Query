


const StepIntro = ({ firstName, setFirstName, lastName, setLastName, errors }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="mb-4">
        <label htmlFor="firstname" className="block text-gray-800">
          First Name
        </label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          id="firstname"
          className={`w-[380px] bg-zinc-100 px-3 py-2 border ${errors.firstName ? "border-red-500" : "border-gray-300"} rounded-lg`}
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="lastname" className="block text-gray-800">
          Last Name
        </label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          id="lastname"
          className={`w-[380px] bg-zinc-100 px-3 py-2 border ${errors.lastName ? "border-red-500" : "border-gray-300"} rounded-lg`}
        />
        {errors.lastName && (
          <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
        )}
      </div>
    </div>
  );
}

export default StepIntro;
