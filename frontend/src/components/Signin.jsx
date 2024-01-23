import { useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md ">
      <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Sign In</h1>
      <p className="text-gray-600 mb-4">Enter your credentials to access your acoount</p>
      </div>
      

      <div className="mb-4">
        <h3 className="text-sm font-semibold">Email</h3>
        <input
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="John"
        />
      </div>

      <div className="mb-4">
        <h3 className="text-sm font-semibold">Password</h3>
        <input
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="password"
        />
      </div>

      <button
        className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:shadow-outline-gray"
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Sign In
      </button>
      <div className="flex flex-col items-center">
      <p className="mt-4 text-sm text-gray-600">
        Don't have an account? <a href="/login" className="text-black">Login</a>
      </p>
      </div>
    </div>
  );
}
