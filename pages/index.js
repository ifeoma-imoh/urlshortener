import React from "react";
import Link from "next/link";

// Import this
import isURL from "validator/lib/isURL";

function Home() {
  // Add these
  const [isValidURL, setIsValidURL] = React.useState(true);
  const [url, setURL] = React.useState({ long: "", short: "" });
  return (
    <main className="grid place-items-center h-screen">
      <div className="bg-cyan-900 w-full grid place-content-center py-20">
        <div>
          <h1 className="text-center text-4xl text-white">URL Shortener</h1>
          <div></div>
          <div className="w w-96">
            <div className="relative mt-4">
              {/* Update input element to match the following */}
              <input
                type="text"
                name="search"
                placeholder="Enter link here"
                id="search"
                className={`block w-full rounded-md border-0 py-3 px-3 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none focus:ring-cyan-600 ${
                  !isValidURL && "focus:ring-red-600 ring-red-600"
                } `}
                onKeyUp={async (e) => {
                  if (e.key === "Enter") {
                    if (isURL(e.target.value)) {
                      setIsValidURL(true);
                      // const url = await submitUrl({ longUrl: e.target.value });
                      // setURL(url);
                    } else {
                      setIsValidURL(false);
                    }
                  }
                }}
              />
              <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                <kbd className="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400">
                  Enter
                </kbd>
              </div>
            </div>

            {true && (
              <div className="flex gap-4 mt-6 p-5 rounded-md border border-cyan-500 bg-cyan-50 items-center">
                <p className="line-clamp-1">Long URL</p>

                <p className="text-cyan-700">
                  <Link href={`/`}> rb.gy/shorturl</Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
