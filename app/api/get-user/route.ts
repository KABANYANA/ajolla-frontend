import { BASE_URL } from "@/app/config";

export async function GET() {
    try{
        if(!BASE_URL){
            return new Response('Base url not found', {
                status:404,
                statusText:'Failed'
            })
        }
        const response=await fetch(`${BASE_URL}/users/`)
        const result=await response.json();
        console.log(result);
        return new Response(JSON.stringify(result),{
            status:200,
            statusText:'Success'
        })
    }
    catch(error:any){
        return new Response(error.message,{
            status:500,
            statusText:'Failed'
        })
    }
}