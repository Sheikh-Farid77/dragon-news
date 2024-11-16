import { CiFacebook, CiTwitter, CiInstagram } from "react-icons/ci";

const FindUs = () => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold">Find Us On</h2>
      <div className="join join-vertical mt-4 flex *:bg-base-100">
  <button className="btn join-item justify-start"><CiFacebook />  FaceBook</button>
  <button className="btn join-item justify-start"><CiTwitter /> Twitter</button>
  <button className="btn join-item justify-start"><CiInstagram /> Instagram</button>
</div>
    </div>
  )
}

export default FindUs
