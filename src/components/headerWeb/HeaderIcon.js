
import { useState } from 'react'
import AccountIcon from './AccountIcon';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getuserdetails, loginSuccess } from '../../States/action-creaters';


export default function HeaderIcon() {
        // console.log('selector', useSelector((state)=>state))
        function getCookie(cookieName) {
            // Split the cookies into an array of key-value pairs
            const cookies = document.cookie.split(';');
        
            // Loop through the cookies to find the one with the specified name
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
        
                // Check if the cookie starts with the specified name
                if (cookie.startsWith(cookieName + '=')) {
                    // Extract and return the cookie value
                    return cookie.substring(cookieName.length + 1);
                }
            }
        
            // Return null if the cookie with the specified name is not found
            return null;
        }
        const dispatch = useDispatch();
       async  function clearCookie(name,auth_token) {
          document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
          document.cookie = auth_token + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      }
      const navigate = useNavigate()
        const authsuccess = getCookie('success');
        const [isOpen, setIsOpen] = useState(false);
        const toggleDropdown = () => {
            setIsOpen(!isOpen); 
          };

          

          const logoutUser=()=>{
            setIsOpen(false);
            clearCookie('success',"auth_token");  
    
            setTimeout(() => {
         
              dispatch(loginSuccess( null, false));   
              dispatch(getuserdetails(""));    
              localStorage.removeItem("persist:root");
              navigate('/login');
          }, 100); 

             }
 
 
  return (
    <div className="header_icon">
      <ul className="icon">
        <li className='account'>
          <div className="relative inline-block text-left">
            {authsuccess  ?
              <div>
                <button
                  onClick={toggleDropdown}
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 items-center"
                >
                  <AccountIcon />
                </button>
              </div>
              :
              <Link to="/login"> <AccountIcon /><span>Login</span></Link>    
            }

            {authsuccess && isOpen && (
              <div className="origin-top-right z-10 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1  ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {/* Dropdown items */}
                  <Link
                    onClick={toggleDropdown}
                    to="/Account"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    My Account
                  </Link>
                  <Link
                    onClick={toggleDropdown}
                    to="/Accountupdate"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Update Account Info
                  </Link>
                  <Link
                    onClick={logoutUser}
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Sign Out
                  </Link>
                </div>
              </div>
            )}
          </div>
        </li>
      
     
      </ul>
    </div>
  )
}
