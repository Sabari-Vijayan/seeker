'use client';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white bg-[url(/images/login/login-bg.jpg)] bg-cover bg-center text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-cyan-400">Sign up</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-black">Email</label>
            <input type="email" className="w-full px-4 py-2 mt-1 rounded-lg bg-white border border-black text-black" />
          </div>
          <div>
            <label className="block text-sm font-medium text-black">Create password</label>
            <input type="password" className="w-full px-4 py-2 mt-1 rounded-lg bg-white border border-black text-black" />
          </div>
          <button className="w-full py-2 font-semibold bg-cyan-500 hover:bg-cyan-600 rounded-lg">
            Login
          </button>
        </form>
        <div className="flex flex-row justify-between">
            <a href="./" className="text-black hover:text-black px-1 py-1">
              sign in
            </a>
            <a className="text-black hover:text-black px-1 py-1">
              forgot password?
            </a>
        </div>
      </div>
    </div>
  );
}
