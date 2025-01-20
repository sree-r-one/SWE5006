import React from "react";

const Error = () => {
  return (
    <div>
      <div className="mx-auto flex min-h-screen max-w-[50rem] flex-col">
        {/* ========== HEADER ========== */}
        <header className="z-50 mb-auto flex w-full justify-center py-4">
          <nav className="px-4 sm:px-6 lg:px-8">
            <a
              className="flex-none text-xl font-semibold sm:text-3xl"
              href="/"
              aria-label="lutap.ai"
            ></a>
          </nav>
        </header>
        {/* ========== END HEADER ========== */}

        {/* ========== MAIN CONTENT ========== */}
        <main id="content" className="flex-grow">
          <div className="px-4 py-10 text-center sm:px-6 lg:px-8">
            <h1 className="block text-7xl font-bold text-gray-800 sm:text-9xl">
              404
            </h1>
            <p className="mt-3 text-gray-600">Oops, something went wrong.</p>
            <p className="text-gray-600">
              Sorry, we couldn't find the page you're looking for.
            </p>
          </div>
        </main>
        {/* ========== END MAIN CONTENT ========== */}

        {/* ========== FOOTER ========== */}
        <footer className="mt-auto py-5 text-center">
          <div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} lutap.ai. All Rights Reserved.
            </p>
          </div>
        </footer>
        {/* ========== END FOOTER ========== */}
      </div>
    </div>
  );
};

export default Error;
