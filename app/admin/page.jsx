
import { createClient } from "@/utils/supabase/server";
import { redirect } from 'next/navigation'

export default async function AdminPage(){
    const supabase = createClient("https://edwrpskmitwxvipmcyoy.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkd3Jwc2ttaXR3eHZpcG1jeW95Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyODU2NjUzNCwiZXhwIjoyMDQ0MTQyNTM0fQ.0gHmdxie-I7hLOMRDhoxjQNYSoN4u9WnSdWjQhm3nPI");
    const { data: { user } } = await supabase.auth.getUser();
    console.log(user.user_metadata.role);

    if(user.user_metadata.role !== "admin"){
        redirect("/")
    }

    return(
        <>
        
         

         
        
        admin sayfası
        <form> 

        

        </form>
        
        </>
    )
}