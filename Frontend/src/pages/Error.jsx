import { Link, useRouteError } from "react-router-dom"

const Error = () => {
  const ERROR = "Error occur in your applicaion.";
  const err =  useRouteError();

  return (
    <div className="error-con">
        <div className="error">
            <h2>{err.data.message ? err.data.message : ERROR}</h2>
            <Link to="/"><p>Go Back</p></Link>
        </div>
    </div>
  )
}

export default Error