
import { useAuth } from '../hooks/use-auth';
import {removeUser} from '../userSlices'
import { useAppDispatch } from '../hooks/redux-hooks';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const dispatch = useAppDispatch();

    const {isAuth, email} = useAuth();

    return isAuth ? (
        <div>
            <h1>Welcome</h1>

            <button
                onClick={()=> dispatch(removeUser())}
            >Log out from {email}</button>
        </div>
    ) : (
 <Link  to='/login'>  login</Link>
 )
 }

export default HomePage
