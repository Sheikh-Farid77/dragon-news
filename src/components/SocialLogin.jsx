import { FaGoogle, FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Login With</h2>
      <div className="mt-4 flex flex-col gap-3">
        <button className="btn"><FaGoogle /> Login With Google</button>
        <button className="btn"><FaGithub /> Login With GitHub</button>
      </div>
    </div>
  )
}

export default SocialLogin
