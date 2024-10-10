import { login, signup } from "../actions/action"
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  console.log(user);

  return (
    <>
     <form className="loginForm">
       <div>
          <label htmlFor="fullName">Name</label>
          <input id="fullName" name="fullName" type="text" required />
       </div>

       <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
      </div>

      <div>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" required />
      </div>

      <button formAction={login}>Log in</button>
      <button formAction={signup}>Sign up</button>
    </form>
    </>
  );
}
