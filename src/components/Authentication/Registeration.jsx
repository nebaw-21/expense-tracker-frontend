import img1 from "../../assets/pexels-pixabay-235985.jpg";

export default function Register() {
  return (
    <>
      <main>
        <section className="absolute w-full h-full">
          <div
            className="absolute top-0 w-full h-full bg-gray-900"
            style={{
              backgroundImage: `url(${img1})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              filter: "brightness(0.75)"
            }}
          ></div>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 border border-amber-100  shadow-2xl rounded-lg  ">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h6 className=" text-base roboto-black">
                        Sign in with
                      </h6>
                    </div>
                    <div className="flex justify-center items-center cursor-pointer hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg>

                    </div>
                    <hr className="mt-6 border-b-1 border-gray-400" />
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-base roboto-bold text-center mb-3 font-bold">
                      <small>Or sign up with credentials</small>
                    </div>
                    <form>

                    <div className="relative w-full mb-3">
                        <label
                          className="block uppercase roboto-bold text-xs font-bold mb-2"
                          htmlFor="name"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring-amber-300 w-full"
                          placeholder="name"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>      

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase roboto-bold text-xs font-bold mb-2"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring-amber-300 w-full"
                          placeholder="Email"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase roboto-bold  text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring-amber-300 w-full"
                          placeholder="Password"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div className="text-center mt-6">
                        <button
                          className="bg-gray-900 text-white roboto-bold active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                        >
                          Register
                        </button>
                      </div>
                    </form>
                    <div className="text-center text-sm roboto-bold flex gap-5 mt-2">
                        <p>you already have account?</p>
                        <a className="roboto-black " href="/">Login</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
