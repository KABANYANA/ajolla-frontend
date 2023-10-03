export const getMothers = async () => {
    try {
      const response = await fetch(`api/get-lactationists`, {
        method: "GET",
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error fetching lactationists:", error);
      return [];
    }
  };

  
  interface UsersData {
      username: string;
      email: string;
      password: string;
      first_name: string;
      last_name: string;
      phone_number:string;
    
    }
    export const createUser = async (userData: UsersData) => {
      const url = `/api/create-user`;
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
        const result = await response.json();
        return result;
      } catch (error: any) {
        return error.message;
      }
    };
    interface LoginData {
      username: string;
      password: string;
  }
  export const loginUser = async (loginData: LoginData) => {
      const url = 'api/login-user';
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginData),
        });
        const result = await response.json();
        return result;
      } catch (error: any) {
        return error.message;
      }
    };    