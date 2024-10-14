const StepID = () => (
    <div className="flex justify-center items-center flex-col">
      <div className="mb-4">
        <label htmlFor="dob" className="block text-gray-800">
          Date of Birth
        </label>
        <input
          type="date"
          id="dob"
          className="w-[380px] bg-zinc-100 px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="id" className="block text-gray-800">
          National ID
        </label>
        <input
          type="number"
          id="id"
          className="w-[380px] bg-zinc-100 px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>
    </div>
  );
  export default StepID;