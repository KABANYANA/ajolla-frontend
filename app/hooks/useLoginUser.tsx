import { useState } from 'react';
import { loginUser } from '../utilities/utilis';
import { useRouter } from 'next/navigation';

interface LoginData {
  username: string;
  password: string;
}
const useLogin = (initialLoginData: LoginData) => {
  const router = useRouter();
  const [user, setUser] = useState({token:''});
  const handleSignin = async () => {
      const response = await loginUser(initialLoginData)
      if (response.token.length > 0) {
        router.push('/');
      }  else {
        router.push('/logins');
      }
      setUser(response)
}
return { user, handleSignin };
}
export default useLogin;
