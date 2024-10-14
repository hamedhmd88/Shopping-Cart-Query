const StepPassword = ({ password, setPassword, confirmPassword, setConfirmPassword, errors }) => (
  <div className="flex justify-center items-center flex-col">
    <div className="mb-4">
      <label htmlFor="password" className="block text-gray-800">
        Password
      </label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="password"
        className={`w-[380px] bg-zinc-100 px-3 py-2 border ${errors.password ? "border-red-500" : "border-gray-300"} rounded-lg`}
      />
      {errors.password && (
        <p className="text-red-500 text-sm mt-1">{errors.password}</p>
      )}
    </div>

    <div className="mb-4">
      <label htmlFor="confirmPassword" className="block text-gray-800">
        Confirm Password
      </label>
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        id="confirmPassword"
        className={`w-[380px] bg-zinc-100 px-3 py-2 border ${errors.confirmPassword ? "border-red-500" : "border-gray-300"} rounded-lg`}
      />
      {errors.confirmPassword && (
        <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
      )}
    </div>
  </div>
);

export {StepPassword}
