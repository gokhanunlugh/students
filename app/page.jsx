import { login, signup } from "../actions/action"
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = createClient("https://edwrpskmitwxvipmcyoy.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkd3Jwc2ttaXR3eHZpcG1jeW95Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyODU2NjUzNCwiZXhwIjoyMDQ0MTQyNTM0fQ.0gHmdxie-I7hLOMRDhoxjQNYSoN4u9WnSdWjQhm3nPI");
  const { data: { user } } = await supabase.auth.getUser();
  console.log(user)


  async function listUsers() {
    const { data, error } = await supabase.auth.admin.listUsers();
  
    if (error) {
      console.error('Error fetching users:', error);
    } else {
      console.log('Users:', data);
    }
  }
  
  listUsers();

  

  return (
    <>
     
     <form className="loginForm">

        <h1>Öğrenci Bilgi Sistemi Kayıt</h1>
    
    <div className="inputContainer">
       <div className="inputItem">
          <label htmlFor="fullName">Name</label>
          <input id="fullName" name="fullName" type="text" required />
       </div>

       <div className="inputItem">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
      </div>

      <div className="password">
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" required />
      </div>
    </div>

      <button className="loginBtn" formAction={login}>Log in</button>
      <button className="signupBtn" formAction={signup}>Sign up</button>
    </form>
    </>
  );
}
