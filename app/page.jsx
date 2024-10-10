import { login, signup } from "../actions/action"

export default function Home() {
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
