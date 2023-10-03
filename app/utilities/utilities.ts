export const getAppointments = async () => {
    try {
      const response = await fetch(`api/get-appointments`, {
        method: "GET",
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error fetching appoints:", error);
      return [];
    }
  };
  interface AppointmentData {
    id: number;
    lactationist: string;
    available_slots: string;
    is_available: boolean;
    first_name:string;
    second_name:string;
    mother:string
  }
  export const createAppointment = async (appointmentData: AppointmentData) => {
    const url = `/api/create-appointment`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData),
      });
      const result = await response.json();
      return result;
    } catch (error: any) {
      return error.message;
    }
  };


  export const getMothers = async () => {
    try {
      const response = await fetch(`api/get-mothers`, {
        method: "GET",
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error fetching appoints:", error);
      return [];
    }
  };
  interface MotherData {
    id: number,
    image: string,
    is_first_time_mother: boolean,
    user_mother: number,
    carts: number
  }
  export const createMothers = async (motherData: MotherData) => {
    const url = `/api/create-mother`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(motherData),
      });
      const result = await response.json();
      return result;
    } catch (error: any) {
      return error.message;
    }
  };

  export const getLactationists = async () => {
    try {
      const response = await fetch(`api/get-lactationists`, {
        method: "GET",
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error fetching appoints:", error);
      return [];
    }
  };
  interface LactationistData {
    id: number,
    first_name: string,
    second_name: string,
    email: string,
    bio: string,
    image: string
  }
  export const createLactationists = async (lactationistData: LactationistData) => {
    const url = `/api/create-lactationist`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(lactationistData),
      });
      const result = await response.json();
      return result;
    } catch (error: any) {
      return error.message;
    }
  };


  export const getArticles = async () => {
    try {
      const response = await fetch(`api/get-articles`, {
        method: "GET",
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error fetching appoints:", error);
      return [];
    }
  };
  interface ArticleData {
    id: number;
    title:string;
    description: string;
    created_at: Date;
    updated_at: Date;
    content:string
    lactationist:string
  }
  export const createArticles = async (articleData: ArticleData) => {
    const url = `/api/create-article`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(articleData),
      });
      const result = await response.json();
      return result;
    } catch (error: any) {
      return error.message;
    }
  };


  export const getUser = async () => {
    const url = '/api/get-users';
    try {
      const response = await fetch(url);
      const result = await response.json();
      return result;
    } catch (error:any) {
      return error.message;
    }
  };




