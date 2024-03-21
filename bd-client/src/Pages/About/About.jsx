import React from "react";
import Container from "../../components/Shared/Container";
import about1 from "../../assets/about/docker.webp";
import about2 from "../../assets/about/automation.png";
import about3 from "../../assets/about/Jenkins.png";
import about4 from "../../assets/about/terraform.png";
const About = () => {
  return (
    <>
      <Container>
        <div className="banner bg-opacity-30 h-full xl:lg:md:h-[423px] text-center  my-[20px] ">
          <div className="bg-blue-600 bg-opacity-40 text-white h-full">
            <div className=" w-96 mx-auto  ">
              <h2 className="font-bold text-[30px] xl:lg:md:text-[60px] font-Livvic py-[150px]">
                Blog
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:lg:md:grid-cols-3 gap-8 my-24 ">
          <div className="border border-slate-300 shadow-md rounded-xl ">
            <div>
              <img className="rounded-t-xl w-full" src={about1} alt="" />
            </div>
            <div className="p-8">
              <h1 className="font-bold text-[25px] text-blue-700 font-Livvic py-3">
                Understanding The Basics Of Docker And Why It Is So Popular
              </h1>
              <p>
                Docker is a tool for containerisation and it is one of the most
                use containerization tool out there. Docker uses containers
                which are an operating system level virtualization to create
                applications. This is done by separating the application from
                the underlying environment needed to execute it, but it shares
                the same kernel as its host.
              </p>

              <h3 className="pb-[60px] my-3 font-semibold">READ MORE</h3>

              <hr />

              <h2>September 20, 2022</h2>
            </div>
          </div>
          <div className="border border-slate-300 shadow-md rounded-xl ">
            <div>
              <img className="rounded-t-xl h-72 w-full" src={about4} alt="" />
            </div>
            <div className="p-8">
              <h1 className="font-bold text-[25px] text-blue-700 font-Livvic py-3">
                Terraform: The Next Big Thing In Infrastructure Automation
              </h1>
              <p>
                In this article, I am going to talk about Terraform, a new tool
                by HashiCorp that automates the provisioning of infrastructure.
                Terraform is part of infrastructure as code which is an approach
                to automate the creation and configuration of complex
                distributed systems. What is Infrastructure as Code? With the
                ever-growing popularity of cloud computing, DevOps
              </p>

              <h3 className="pb-[60px] my-3 font-semibold">READ MORE</h3>

              <hr />

              <h2>September 20, 2022</h2>
            </div>
          </div>
          <div className="border border-slate-300 shadow-md rounded-xl ">
            <div>
              <img className="rounded-t-xl h-72 w-full" src={about3} alt="" />
            </div>
            <div className="p-8">
              <h1 className="font-bold text-[25px] text-blue-700 font-Livvic py-3">
                What Is Jenkins, And Why Is It So Important For DevOps?
              </h1>
              <p>
                DevOps (a term used for a set of principles and practices that
                emphasize lean thinking and meaningful collaboration in software
                development) are at the absolute forefront of the digital
                transformation today. With increased automation and efficiency
                through continuous integration, continuous deployment, and
                monitoring - these hugely popular tools have shifted traditional
                paradigms in a new
              </p>

              <h3 className="pb-[60px] my-3 font-semibold">READ MORE</h3>

              <hr />

              <h2>September 20, 2022</h2>
            </div>
          </div>
          <div className="border border-slate-300 shadow-md rounded-xl ">
            <div>
              <img className="rounded-t-xl h-72 w-full" src={about2} alt="" />
            </div>
            <div className="p-8">
              <h1 className="font-bold text-[25px] text-blue-700 font-Livvic py-3">
                Terraform IaC Automation
              </h1>
              <p>
                Unless you've been living under a rock, you should be well aware
                of the recent trend in “serverless” architectures. If you're not
                familiar with what that means, it basically means that we are
                breaking up our applications into small logical functions called
                “functions as a service.” Rather than running your code on
                dedicated servers or
              </p>

              <h3 className="pb-[60px] my-3 font-semibold">READ MORE</h3>

              <hr />

              <h2>September 20, 2022</h2>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
