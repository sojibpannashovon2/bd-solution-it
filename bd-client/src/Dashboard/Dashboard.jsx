import React from "react";
import Container from "../components/Shared/Container";
import Sidebar from "./PagesDashboard/Sidebar";
import Header from "../components/Shared/Header";
import Navbar from "../components/Shared/Navbar";

const Dashboard = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Container>
        <div>
          <div className="py-[40px] bg-red-300">
            <h1>user name</h1>
          </div>
          <div className="flex">
            <div className="w-[20%]">
              <Sidebar />
            </div>
            <div className="bg-yellow-200 w-[80%]">
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
          </div>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
