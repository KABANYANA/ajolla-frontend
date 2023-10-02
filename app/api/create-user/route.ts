

import { BASE_URL } from "@/app/config";
export async function POST(request: Request) {
  try {
    if (!BASE_URL) {
      return new Response("Base URL not found", {
        status: 404,
        statusText: "Failed",
      });
    }
    const admin = await request.json().then(async (response) => {
      const result = await fetch(`${BASE_URL}/register/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(response),
      });
      const post = await result.json();
      return post;
    });
    return new Response(JSON.stringify(admin), {
      status: 201,
      statusText: "Success",
    });
  } catch (error: any) {
    return new Response(error.message, {
      status: 500,
      statusText: "Failed",
    });
  }
}