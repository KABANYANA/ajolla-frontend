import { BASE_URL } from "@/app/config";
export async function POST(request: Request) {
  try {
    const body = await request.json();
    // console.log(body);
    const result = await fetch(`${BASE_URL}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const post = await result.json();
    // console.log(post);
    return new Response(JSON.stringify(post), {
      status: 200,
      statusText: "Success",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: any) {
    return new Response(error.message, {
      status: 500,
      statusText: error.message || 'Failed to log in'
    });
  }
}