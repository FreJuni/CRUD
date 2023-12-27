import {useSearchParams,useNavigation, Link, Form} from 'react-router-dom';

const Authentication = ({err}) => {
    const [searchParams] = useSearchParams();
    
    const isLogin = searchParams.get("mode") === "login";
    const navigate = useNavigation();
    
    const isSubmitting = navigate.state === "submitting";


  return (
    <div className='auth-con'>
        <h2>{isLogin ? "Login to your account." : "Create your account."}</h2>
          {err && (<p className='error-msg'>{err.message}</p>)}
          <Form method='post'>
            <div className="form-input">
                    <label htmlFor="email">Email</label>
                    <input type="email" className='auth-input' name="email"/>
                </div>
                <div className="form-input">
                    <label htmlFor="password">Password</label>
                    <input type="password" className='auth-input' name="password"/>
                </div>

                {isLogin ? (<><input type="checkbox" /><span>Remember me</span></>) : ""}
                { isLogin ? (<><p>Don't have an account?  <Link to="/auth?mode=signup">Signup</Link></p></>) : (<><p>Already have an account?  <Link to="/auth?mode=login">Login</Link></p></>)}
                <button className='post-btn'>{isLogin ? <>{isSubmitting ? "Submitting" : "Login"}</>: <>{isSubmitting ? "Submitting" : "Register"}</>}</button>
            </Form>
            
    </div>
  )
}

export default Authentication