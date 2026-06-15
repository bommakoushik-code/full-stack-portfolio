import { useState } from "react";
import {
  Home,
  FolderKanban,
  Briefcase,
  Mail,
} from "lucide-react";

export default function App() {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();


  try {
    const response = await fetch("https://full-stack-portfolio-qp1x.onrender.com/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Something went wrong.");
    }
  } catch (error) {
    setStatus("Backend is not running.");
  }
};
  return (
    <div className="min-h-screen bg-[#0B0715] text-white relative overflow-hidden">

      {/* Purple Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-700 opacity-20 blur-3xl rounded-full"></div>

      <div className="flex flex-col lg:flex-row">

        {/* Sidebar */}
        <aside className="w-full lg:w-64 lg:min-h-screen border-b lg:border-b-0 lg:border-r border-purple-900/30 p-6 lg:p-8">

          <h1 className="text-2xl font-bold mb-8">
            Koushik<span className="text-purple-400">.dev</span>
          </h1>

          {/* Profile Card */}
          <div className="bg-[#151022] rounded-2xl p-5 mb-8 border border-purple-900/30">

            <img
  src="/profile.jpeg"
  alt="Koushik"
  className="w-24 h-24 rounded-full object-cover border-4 border-purple-500 shadow-lg"
/>

            <h2 className="mt-4 text-2xl font-bold">
              Koushik Bomma
            </h2>

            <p className="text-gray-400 text-sm mt-1">
  Full Stack Developer | React • Node.js • MongoDB
</p>

          </div>

          {/* Navigation */}
          <nav className="space-y-5 text-gray-400">

  <a href="#overview" className="flex items-center gap-3 hover:text-white cursor-pointer">
    <Home size={18} />
    <span>Overview</span>
  </a>

  <a href="#projects" className="flex items-center gap-3 hover:text-white cursor-pointer">
    <FolderKanban size={18} />
    <span>Projects</span>
  </a>

  <a href="#experience" className="flex items-center gap-3 hover:text-white cursor-pointer">
    <Briefcase size={18} />
    <span>Experience</span>
  </a>

  <a href="#contact" className="flex items-center gap-3 hover:text-white cursor-pointer">
    <Mail size={18} />
    <span>Contact</span>
  </a>

</nav>
          <div className="mt-12 flex flex-col gap-4">

  <a
    href="https://github.com/bommakoushik-code"
    target="_blank"
    className="bg-[#151022] p-3 rounded-xl text-center hover:bg-purple-700 transition"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/koushik-b-6a3707301/"
    target="_blank"
    className="bg-[#151022] p-3 rounded-xl text-center hover:bg-purple-700 transition"
  >
    LinkedIn
  </a>

  <a
    href="/resume.pdf"
    target="_blank"
    className="bg-purple-600 p-3 rounded-xl text-center hover:bg-purple-700 transition"
  >
    Resume
  </a>

</div>

        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-12 space-y-12 overflow-hidden">

          {/* Hero */}
          <div id="overview" className="rounded-3xl bg-gradient-to-r from-purple-950 to-[#1A1235] p-8 lg:p-10 border border-purple-900/30 shadow-2xl">

            <div className="inline-block border border-purple-500 px-4 py-2 rounded-full text-sm">
              AVAILABLE FOR WORK
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mt-8 leading-tight">
              Turning Ideas
              <br />
               Into Applications.
            </h1>

            <p className="text-gray-400 mt-6 max-w-2xl text-lg leading-relaxed">
  Full Stack Developer specializing in React, Node.js, Express, and MongoDB.
  I build scalable web applications with clean architecture, responsive design,
  and a strong focus on performance and user experience.
</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
  href="#projects"
  className="bg-purple-600 px-6 py-3 rounded-xl hover:bg-purple-700 transition duration-300 shadow-lg"
>
  View Projects
</a>

              <a
  href="#contact"
  className="border border-purple-500 px-6 py-3 rounded-xl hover:bg-purple-900 transition"
>
  Contact Me
</a>

              <a
  href="/resume.pdf"
  target="_blank"
  className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
>
  Resume
</a>
            </div>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

            <div className="bg-[#151022] p-6 rounded-2xl border border-purple-900/30 hover:border-purple-500 hover:scale-105 transition duration-300 shadow-lg">
              <h2 className="text-3xl font-bold text-purple-400">10+</h2>
              <p className="text-gray-400 mt-2">Projects Built</p>
            </div>

            <div className="bg-[#151022] p-6 rounded-2xl border border-purple-900/30 hover:border-purple-500 hover:scale-105 transition duration-300 shadow-lg">
              <h2 className="text-3xl font-bold text-purple-400">5+</h2>
              <p className="text-gray-400 mt-2">Technologies</p>
            </div>

            <div className="bg-[#151022] p-6 rounded-2xl border border-purple-900/30 hover:border-purple-500 hover:scale-105 transition duration-300 shadow-lg">
              <h2 className="text-3xl font-bold text-purple-400">100%</h2>
              <p className="text-gray-400 mt-2">Passion</p>
            </div>

          </div>

          {/* Projects */}
          <div id="projects" className="mt-12">

            <h2 className="text-3xl font-bold mb-6 text-purple-300">
              Featured Projects
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              <div className="bg-[#151022] p-6 rounded-2xl border border-purple-900/30 hover:border-purple-500 hover:-translate-y-2 transition duration-300">

                <h3 className="text-xl font-semibold">
                  Personal Portfolio Website
                </h3>

                <p className="text-gray-400 mt-3">
  Full-stack portfolio built using React, Tailwind CSS, Express.js and MongoDB Atlas.
</p>

                <div className="flex gap-2 mt-4">
                  <div className="flex gap-3 mt-5">
   <a
  href="https://github.com/bommakoushik-code/full-stack-portfolio"
  target="_blank"
  className="bg-purple-600 px-4 py-2 rounded-lg"
>
  GitHub
</a>

  <a
  href="https://full-stack-portfolio-mu-ten.vercel.app"
  target="_blank"
  className="border border-purple-500 px-4 py-2 rounded-lg"
>
  Live Demo
</a>
</div>
                  <span className="bg-[#201830] px-3 py-1 rounded-lg text-sm">
                    React
                  </span>

                  <span className="bg-[#201830] px-3 py-1 rounded-lg text-sm">
                    Tailwind
                  </span>
                </div>

              </div>

              <div className="bg-[#151022] p-6 rounded-2xl border border-purple-900/30 hover:border-purple-500 hover:-translate-y-2 transition duration-300">

                <h3 className="text-xl font-semibold">
                  Student Management System
                </h3>

                <p className="text-gray-400 mt-3">
  Full-stack application for managing student records, attendance and academic information using a database-driven backend.
</p>

                <div className="flex gap-2 mt-4">
                  <div className="flex gap-3 mt-5">
  <a
  href="https://github.com/bommakoushik-code/full-stack-portfolio"
  target="_blank"
  className="bg-purple-600 px-4 py-2 rounded-lg"
>
  GitHub
</a>

  <a
  href="https://full-stack-portfolio-mu-ten.vercel.app"
  target="_blank"
  className="border border-purple-500 px-4 py-2 rounded-lg"
>
  Live Demo
</a>
</div>
                  <span className="bg-[#201830] px-3 py-1 rounded-lg text-sm">
                    Node.js
                  </span>

                  <span className="bg-[#201830] px-3 py-1 rounded-lg text-sm">
                    MongoDB
                  </span>
                </div>

              </div>

            </div>

          </div>
          {/* Skills Section */}
<div className="mt-12">

  <h2 className="text-3xl font-bold mb-6">
    Tech Stack
  </h2>

  <div className="flex flex-wrap gap-4">

    {[
      "React",
      "Node.js",
      "MongoDB",
      "Java",
      "Spring Boot",
      "MySQL",
      "Git",
      "GitHub",
      "REST APIs"
    ].map((skill) => (
      <div
  key={skill}
  className="bg-[#151022] border border-purple-900/30 px-6 py-4 rounded-2xl hover:scale-105 hover:border-purple-500 transition duration-300 shadow-lg"
>
  <span className="text-purple-300 font-medium">
    {skill}
  </span>
</div>
    ))}

  </div>

</div>
{/* Experience Timeline */}
<div id="experience" className="mt-12">

  <h2 className="text-3xl font-bold mb-6">
    My Journey
  </h2>

  <div className="space-y-6">

    <div className="bg-[#151022] p-5 rounded-2xl border border-purple-900/30">
      <h3 className="text-purple-400 font-semibold">
        🚀 2024
      </h3>
      <p className="mt-2">
        Started learning programming fundamentals and web development.
      </p>
    </div>

    <div className="bg-[#151022] p-5 rounded-2xl border border-purple-900/30">
      <h3 className="text-purple-400 font-semibold">
        💻 2025
      </h3>
      <p className="mt-2">
        Built projects using Java, React, Node.js and databases.
      </p>
    </div>

    <div className="bg-[#151022] p-5 rounded-2xl border border-purple-900/30">
      <h3 className="text-purple-400 font-semibold">
        🎯 2026 - Present
      </h3>
      <p className="mt-2">
        Preparing for software engineering roles and building full-stack applications.
      </p>
    </div>

  </div>

</div>
{/* Contact Section */}
<div id="contact" className="mt-12 mb-12">

  <h2 className="text-3xl font-bold mb-6">
    Contact Me
  </h2>

  <div className="bg-[#151022] p-8 rounded-2xl border border-purple-900/30">

<form onSubmit={handleSubmit} className="grid gap-4">

  <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Your Name"
  className="bg-[#0B0715] p-4 rounded-xl border border-purple-900/30 outline-none"
/>

 <input
  type="email"
  name="email"
  value={formData.email}
  onChange={(e) =>
    setFormData({
      ...formData,
      email: e.target.value,
    })
  }
  placeholder="Your Email"
  className="bg-[#0B0715] p-4 rounded-xl border border-purple-900/30 outline-none"
/>

  <textarea
  name="message"
  value={formData.message}
  onChange={(e) =>
    setFormData({
      ...formData,
      message: e.target.value,
    })
  }
  rows="5"
  placeholder="Your Message"
  className="bg-[#0B0715] p-4 rounded-xl border border-purple-900/30 outline-none"
></textarea>

  <button
  type="submit"
  className="bg-purple-600 py-3 rounded-xl hover:bg-purple-700 transition"
>
  Send Message
</button>

  {status && (
  <p className="text-purple-400">
    {status}
  </p>
)}

</form>
 </div>

</div>

<footer className="mt-20 text-center text-gray-500 border-t border-purple-900/30 pt-6">
  © 2026 Koushik Bomma. Built with React, Tailwind CSS, Express & MongoDB.
</footer>
        </main>

      </div>

    </div>
  );
}