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
  