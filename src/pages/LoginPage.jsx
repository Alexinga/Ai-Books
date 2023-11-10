import { useEffect, useState } from "react";
import HomeNav from "../components/HomeNav";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) {
      login(email, password);
    }
  }
  useEffect(
    function () {
      function checkAuth() {
        if (isAuthenticated === true) {
          navigate("/app");
        }
      }
      checkAuth();
    },
    [isAuthenticated, navigate]
  );
  return (
    <div className="h-screen">
      <HomeNav />
      <div className="flex justify-center items-center h-screen bg-violet-200 max-sm:h-full max-sm:p-4 max-sm:pt-10">
        <div className="bg-white p-8 rounded-lg">
          <div className="text-center ">
            <h2 className="text-4xl max-md:text-xl">LOGIN</h2>
            <p className="text-sm">
              Get things started with an account for Sound Thoughts Blog
            </p>
            <p className="text-sm">
              Demo: soundthoughts@gmail.com // ilovebooks
            </p>
          </div>
          <form className="py-8" onSubmit={handleSubmit}>
            <div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="block border-2 p-4 w-full"
                type="email"
                placeholder="👤Username"
                value={email}
                id="email"
              ></input>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="block border-2 p-4 w-full"
                type="password"
                placeholder="🔒Password"
                value={password}
                id="password"
              ></input>
            </div>
            <button
              type="submit"
              className="bg-violet-500 text-white px-4 py-2 border-2 rounded-lg mt-4"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
