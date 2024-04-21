import "./Layout.css";
function Login(){
    return(
    
        <div className="main-content">login
        <form>
        <div className='mb-2'>
            <label htmlFor="amount">Enter Username</label>
            <input
              type="text"
              id="amount"
              placeholder='Enter Amount'
            />
          </div>
          <div className='mb-2'>
            <label htmlFor="name">Enter Password</label>
            <input
              type="text"
              id="name"
              placeholder='Enter your Name'
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          </div>
    
    )
    }
    export default Login