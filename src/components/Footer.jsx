import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-amber-950 text-primary-content p-10">
      <aside>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="inline-block fill-green-400"
        >
          <path d="M12 2C8 6 5 10 5 14c0 2.761 2.239 5 5 5 1.657 0 3.157-.837 4-2.121C15.843 18.163 17.343 19 19 19c2.761 0 5-2.239 5-5 0-4-3-8-7-12-1.656 1.67-3.18 3.17-5 5.29C9.18 7.17 7.656 5.67 6 4c-4 4-7 8-7 12 0 3.866 3.134 7 7 7 2.485 0 4.675-1.197 6-3.071C14.325 20.803 16.515 22 19 22c3.866 0 7-3.134 7-7 0-4-3-8-7-12-1.168 1.18-2.328 2.27-4 3.29C14.672 6.27 13.512 5.18 12 2z" />
        </svg>
        <p className="font-bold text-green-200">
          Gardening Hub
          <br />
          Nurturing Nature Since 1992
        </p>
      </aside>

      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://x.com/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a href="https://www.youtube.com/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a href="https://www.facebook.com/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
