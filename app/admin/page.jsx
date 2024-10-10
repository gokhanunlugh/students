
import { createClient } from "@/utils/supabase/server";
import { redirect } from 'next/navigation'
import addStudent from "./action";
import { defaultHeader } from "@/utils/header";


export default async function AdminPage() {
  const supabase = createClient("https://edwrpskmitwxvipmcyoy.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkd3Jwc2ttaXR3eHZpcG1jeW95Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyODU2NjUzNCwiZXhwIjoyMDQ0MTQyNTM0fQ.0gHmdxie-I7hLOMRDhoxjQNYSoN4u9WnSdWjQhm3nPI");
  const { data: { user } } = await supabase.auth.getUser();
  console.log(user.user_metadata.role);

  if (user.user_metadata.role !== "admin") {
    redirect("/")
  }

  const studensTable = await fetch('https://edwrpskmitwxvipmcyoy.supabase.co/rest/v1/student?select=*%27', {
    method: "GET",
    headers: defaultHeader
  })


  return (
    <>


      <form action={addStudent}>

        <input type="text" name="name" placeholder="İsim" />
        <input type="number" name="sinav1" placeholder="Sınav1" />
        <input type="number" name="sinav2" placeholder="Sınav2" />
        <input type="number" name="sinav3" placeholder="Sınav3" />
        <button>Ekle</button>

      </form>




    </>
  )
}