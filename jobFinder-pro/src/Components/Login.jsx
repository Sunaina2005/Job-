import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import app from '../firebase/firebase.config';

const Login = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const handleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // Redirect to the home page after successful login
        navigate('/');
      })
      .catch((error) => {
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error(errorMessage);
        if (email) {
          console.error(`Email: ${email}`);
        }
      });
  };

  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <button className='bg-black px-8 py-2 text-white' onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
