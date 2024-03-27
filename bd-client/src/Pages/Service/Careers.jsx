import Container from "../../components/Shared/Container";
import ContactForm from "./ContactForm";

const Careers = () => {
  return (
    <>
      <Container>
        <div>
          <div className="career bg-opacity-30 h-full xl:lg:md:h-[423px] text-center  my-[20px] ">
            <div className="bg-blue-600 bg-opacity-40 text-white h-full">
              <div className=" w-96 mx-auto  ">
                <h2 className="font-bold text-[30px] xl:lg:md:text-[60px] font-Livvic py-[150px]">
                  Careers
                </h2>
              </div>
            </div>
          </div>

          <div className="py-12 xl:lg:md:flex xl:lg:md:mx-[120px] gap-6 items-center">
            <div>
              <p className="font-Livvic font-bold xl:lg:md:text-5xl text-xl py-3">
                Paradigm Provides High-Quality Training Services
              </p>
            </div>
            <div>
              <p className="py-2">
                Paradigm IT Solutions is a leader in high quality,
                client-centered IT Consulting services. We also provide hands-on
                instructor-led live classroom trainings in computer database
                management technologies and Agile methodologies such as
              </p>
            </div>
            <div>
              <p className="py-2">
                Oracle, Microsoft SQL Server, Scrum Master, SAFe Scrum Master
                and AWS DevOps. Our training courses will equip you with the
                necessary skills to meet the demands of the industry.
              </p>
            </div>
          </div>

          <div className="my-48">
            <div className="text-center">
              <h2 className="text-[16px] font-semibold">
                --------- JOB OPPORTUNITIES -----------
              </h2>
              <h2 className="font-bold text-[#282828]  text-[30px] xl:lg:md:text-[40px] font-Livvic">
                Careers At Paradigm IT Solutions
              </h2>
            </div>
            <div className="grid grid-cols-1 xl:lg:md:grid-cols-2 gap-8 my-[40px]">
              <div className="card-container">
                <div className="border-l-4 border-blue-700 flex gap-3 rounded-2xl shadow-xl px-[40px] py-[50px]  card">
                  <div>
                    <h1 className="text-[25px] font-Livvic font-bold">
                      DevOps Trainer
                    </h1>
                    <p className="text-[16px]">
                      Are you a DevOps trainer with with innovative technologies
                      like Jenkins, Azure DevOps, Docker and Kubernetes, Pleas
                      Sumit your resume here
                    </p>

                    <div className="flex justify-end">
                      <button className=" bg-blue-700 text-white rounded-md px-4 py-2">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-container">
                <div className="border-l-4 border-blue-700 flex gap-3 rounded-2xl shadow-xl px-[40px] py-[50px]  card">
                  <div>
                    <h1 className="text-[25px] font-Livvic font-bold">
                      Migration Engineer
                    </h1>
                    <p className="text-[16px]">
                      Are you experience in Database Migration from On-premises
                      to the cloud following best practices, if so please apply
                      to this postion.
                    </p>

                    <div className="flex justify-end">
                      <button className=" bg-blue-700 text-white rounded-md px-4 py-2">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-container">
                <div className="border-l-4 border-blue-700 flex gap-3 rounded-2xl shadow-xl px-[40px] py-[50px]  card">
                  <div>
                    <h1 className="text-[25px] font-Livvic font-bold">
                      Jr. DevOps Engineer
                    </h1>
                    <p className="text-[16px]">
                      Are you a self-starter with Infrastructure as code
                      automation using Terraform and Ansible, please forward
                      your resume
                    </p>

                    <div className="flex justify-end">
                      <button className=" bg-blue-700 text-white rounded-md px-4 py-2">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-container">
                <div className="border-l-4 border-blue-700 flex gap-3 rounded-2xl shadow-xl px-[40px] py-[50px]  card">
                  <div>
                    <h1 className="text-[25px] font-Livvic font-bold">
                      Staff Augmentation
                    </h1>
                    <p className="text-[16px]">
                      Facing unforeseen staffing needs? Our team will move
                      mountains for your success.
                    </p>

                    <div className="flex justify-end">
                      <button className=" bg-blue-700 text-white rounded-md px-4 py-2">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ContactForm />
      </Container>
    </>
  );
};

export default Careers;
