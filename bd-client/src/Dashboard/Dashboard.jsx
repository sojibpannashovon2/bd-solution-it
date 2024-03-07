import React from "react";
import Container from "../components/Shared/Container";

import Header from "../components/Shared/Header";
import Navbar from "../components/Shared/Navbar";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Container>
        <div>
          <div className="py-10 bg-red-300">
            <h1 className="text-center">User Name</h1>
          </div>
          {/* <div className="flex">
            <div className="w-1/5">
              <Sidebar />
            </div>
            <div className="bg-yellow-200 w-4/5 p-6">
              <p>
                Political History This is one of the specialized areas of
                history and focuses on governments, government policies, and the
                interaction between the different branches of government. It
                also observes elections and the rise and fall of political
                systems, movements, and leaders, as well as political science
                and political occurrences. Examples of political history can be
                found from very long ago: Herodotus wrote about the history of
                the Persian Wars (445–425 BCE)
              </p>
            </div>
          </div> */}
        </div>

        <div className="flex flex-col md:flex-row h-screen">
          {/* Sidebar */}
          <div className="bg-gray-800 text-white w-64 md:w-1/5 py-4 px-6">
            <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
            <ul>
              <li className="mb-2">
                <a href="#" className="block text-gray-400 hover:text-white">
                  Dashboard
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="block text-gray-400 hover:text-white">
                  Reports
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="block text-gray-400 hover:text-white">
                  Analytics
                </a>
              </li>
              <li className="mb-2">
                <Link to={`/dashboard/blog`}>Blog</Link>
              </li>
            </ul>
          </div>
          {/* Content */}

          {/* <div className="bg-gray-100 flex-1 p-10">
            <h2 className="text-3xl font-semibold mb-4">
              Welcome to the Dashboard
            </h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Curabitur sodales ligula in libero.
            </p>
          </div> */}
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
