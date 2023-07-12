import React from 'react'

import { useAuth0 } from "@auth0/auth0-react";
import { Link ,useNavigate} from 'react-router-dom'
export default function Navbar() {

  const { loginWithRedirect , isAuthenticated,logout, user,picture} = useAuth0();
let navigate = useNavigate();
  return (
    <div>
         <div><nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className='navbar-brand' > 
      <a  href=" /general"><img src="https://cdn-icons-png.flaticon.com/512/21/21601.png?w=740&t=st=1689161008~exp=1689161608~hmac=e8c0ef37525dd13b8aaec0dfa679e0e0e1ad030c1d8c25d17da546ea42fbc6f5" width="50" height="50" alt="icon"/></a>
      </div> 
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        
          <li className="nav-item">< Link className="nav-link border border-info mx-2"  to="/business">Business</Link>   </li> 
          <li className="nav-item"> < Link className="nav-link border border-info mx-2 "  to="/entertainment">Entertainment</Link>
          </li> <li className="nav-item"> < Link className="nav-link border border-info mx-2"  to="/general">General</Link>
          </li> <li className="nav-item">< Link className="nav-link border border-info mx-2"  to="/health">Health</Link>
          </li> <li className="nav-item">< Link className="nav-link border border-info mx-2"  to="/science">Science</Link>
          </li> <li className="nav-item">< Link className="nav-link border border-info mx-2"  to="/sports">Sports</Link> </li>
          <li className="nav-item"> < Link className="nav-link border border-info mx-2"  to="/technology">Technology</Link></li>
      
          <form className="form-inline my-2 my-lg-0" style={{   position: "fixed",
   top: "0",
   right: "0",
 padding: "6px",
 }}>
    { isAuthenticated && (<div className='text-uppercase mx-2' >

  <p className='my-2 ' > 
  <img className='rounded-circle my-0' src={user.picture} width="40" height="40"/> Welcome {user.name}</p>
  </div>)}
          {isAuthenticated ? (
  
              <button className="btn btn-outline-success  my-2 my-sm-0" onClick={() =>logout()}>
                Log Out
              </button>
                
        
          ) : (
      
              <button className="btn btn-outline-success  my-2 my-sm-0" onClick={() => loginWithRedirect()}>Log In</button>
   
          )}
          
        </form>

         
        </ul>
  
      </div>
    </nav></div>
    
    </div>
  )
}
