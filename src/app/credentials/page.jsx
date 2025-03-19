import CredentialsCard from "@/components/CredentialsCard";

const page = () => {
  return (
    <section className="mt-20 flex gap-20 flex-col md:flex-row">
      <div>
        <CredentialsCard />
      </div>
      <div>
        <div>
          <h3 className="text-xl font-medium mb-6">ABOUT ME</h3>
          <p className="text-base text-[#c2c2c2] text-justify mb-6">
            I am a professional web developer with a passion for creating
            innovative solutions and staying on the cutting edge of technology.
            My journey in web development began in January 2022, and since then,
            I have been dedicated to honing my skills and keeping myself up to
            date with the latest industry trends.
          </p>
          <p className="text-base text-[#c2c2c2] text-justify">
            I thrive on building dynamic and user-friendly web applications that
            solve real-world problems. My enthusiasm for continuous learning
            drives me to explore new technologies and methodologies, ensuring
            that my work remains current and efficient.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-medium mb-4">EDUCATION</h3>
          <p className="text-[#707070] font-semibold mb-1">2020</p>
          <h5 className="text-xl font-medium mb-1 text-[#4a61c3]">
            Secondary School Certificate (SSC)
          </h5>
          <p className="text-[15px] text-[#898989] mb-4">
            Burunga Iqbal Ahmed High School & College
          </p>
          <p className="text-base text-[#c2c2c2] text-justify mb-6 leading-7">
            I have completed my SSC exam from Burunga Iqbal Ahmed High School
            and College in 2020. I have got a GPA of 4.89 (out of 5).
          </p>
          <p className="text-[#707070] font-semibold mb-1">2020 - 2024</p>
          <h5 className="text-xl font-medium mb-1 text-[#4a61c3]">
            Diploma In Computer Science & Engineering (CSE)
          </h5>
          <p className="text-[15px] text-[#898989] mb-4">
            Sylhet Polytechnic Institute
          </p>
          <p className="text-base text-[#c2c2c2] text-justify mb-6 leading-7">
            I started my diploma in Computer Science & Engineering (CSE) at
            Sylhet Polytechnic Institute in 2020 and successfully completed it
            in 2024 with First Class. Throughout my studies, I gained hands-on
            experience in software development, database management, networking,
            and problem-solving. I am passionate about technology and
            continuously expanding my skills to stay updated with the latest
            advancements in the field.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-medium mb-4">EXPERIENCE</h3>
          <div>
            <p className="text-[#707070] font-semibold mb-1">2022 - 2024</p>
            <h5 className="text-xl font-medium mb-1 text-[#4a61c3]">
              MERN Stack Developer
            </h5>
            <p className="mb-4 text-[15px] text-[#BCBCBC] font-semibold opacity-60">
              DevIT BD
            </p>
            <p className="text-base text-[#c2c2c2] text-justify mb-6 leading-7">
              I have been a professional web developer specializing in the MERN
              stack since 2022. I design and implement backend architectures
              using Node.js and Express.js, create responsive user interfaces
              with React, and manage databases with MongoDB.
            </p>
          </div>
          <div className="mt-12">
            <p className="text-[#707070] font-semibold mb-1">2024 - Present</p>
            <h5 className="text-xl font-medium mb-1 text-[#4a61c3]">
              Full Stack Developer
            </h5>
            <p className="mb-4 text-[15px] text-[#BCBCBC] font-semibold opacity-60">
              Flytech IT
            </p>
            <p className="text-base text-[#c2c2c2] text-justify mb-6 leading-7">
              I am a Full-Stack Web Developer with expertise in modern web
              technologies, including Next.js, React, Node.js, Express.js,
              PostgreSQL, Prisma, MongoDB, and Mongoose. I specialize in
              designing and implementing scalable backend architectures,
              managing both relational and NoSQL databases, and building
              high-performance, SEO-friendly applications.
            </p>
            <p className="text-base text-[#c2c2c2] text-justify mb-6 leading-7">
              My work involves developing full-stack applications, ensuring high
              performance, and deploying solutions using dedicated servers like
              Nginx, Apache. I am also an active contributor to the open-source
              community, continuously improving my skills and staying up to date
              with industry trends.
            </p>
          </div>
        </div>

        <div className="mt-10 text-[#d3d3d3]">
          <h3 className="text-xl font-medium mb-4 text-white">SKILLS</h3>
          <div className="grid grid-cols-2 gap-y-6">
            <div>
              <p className="text-[#898989] font-semibold mb-1">97%</p>
              <h5 className="text-xl font-medium mb-1">HTML & CSS</h5>
            </div>

            <div>
              <p className="text-[#898989] font-semibold mb-1">95%</p>
              <h5 className="text-xl font-medium mb-1">Tailwind CSS</h5>
            </div>

            <div>
              <p className="text-[#898989] font-semibold mb-1">90%</p>
              <h5 className="text-xl font-medium mb-1">JavaScript</h5>
            </div>

            <div>
              <p className="text-[#707070] font-semibold mb-1">87%</p>
              <h5 className="text-xl font-medium mb-1">TypeScript</h5>
            </div>

            <div>
              <p className="text-[#898989] font-semibold mb-1">90%</p>
              <h5 className="text-xl font-medium mb-1">React</h5>
            </div>

            <div>
              <p className="text-[#898989] font-semibold mb-1">84%</p>
              <h5 className="text-xl font-medium mb-1">Next JS</h5>
            </div>

            <div>
              <p className="text-[#898989] font-semibold mb-1">95%</p>
              <h5 className="text-xl font-medium mb-1">Express JS</h5>
            </div>

            <div>
              <p className="text-[#707070] font-semibold mb-1">88%</p>
              <h5 className="text-xl font-medium mb-1">Mongo DB</h5>
            </div>
            <div>
              <p className="text-[#707070] font-semibold mb-1">80%</p>
              <h5 className="text-xl font-medium mb-1">Prisma</h5>
            </div>
            <div>
              <p className="text-[#707070] font-semibold mb-1">85%</p>
              <h5 className="text-xl font-medium mb-1">PostgreSQL</h5>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-medium mb-4">CERTIFICATIONS</h3>
          <p className="text-[#707070] font-semibold mb-1">2022</p>
          <h5 className="text-xl font-medium mb-1 text-[#4a61c3]">
            Web Developer
          </h5>
          <p className="text-[15px] text-[#898989] mb-4">Programming Hero</p>
        </div>
      </div>
    </section>
  );
};

export default page;
