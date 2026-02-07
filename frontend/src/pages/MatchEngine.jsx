import React, { useState } from "react";

// Sample internship data
const internshipsData = [
  { title: "ML Intern", company: "Innovate AI", location: "Bengaluru", skills: ["Python","ML"], capacity:5, appliedCount:0, url:"https://unstop.com/internship/ml-intern" },
  { title: "Data Science Intern", company: "Data Insights", location: "Hyderabad", skills:["Python","SQL"], capacity:3, appliedCount:0, url:"https://unstop.com/internship/data-science" },
  { title: "Frontend Developer", company: "WebWeavers", location: "Remote", skills:["React","CSS"], capacity:4, appliedCount:0, url:"https://unstop.com/internship/frontend" },
  { title: "Backend Developer", company: "CodeFactory", location: "Pune", skills:["Node.js","SQL"], capacity:2, appliedCount:0, url:"https://unstop.com/internship/backend" },
  { title: "AI Research Intern", company: "NeuralNet Inc", location: "Bengaluru", skills:["Python","ML","TensorFlow"], capacity:3, appliedCount:0, url:"https://unstop.com/internship/ai-research" },

  { title: "Cloud Engineering Intern", company: "SkyTech", location: "Mumbai", skills:["AWS","Docker"], capacity:3, appliedCount:0, url:"https://unstop.com/internship/cloud-engineer" },
  { title: "Cybersecurity Intern", company: "SecureIT", location: "Chennai", skills:["Cybersecurity","Python"], capacity:2, appliedCount:0, url:"https://unstop.com/internship/cybersecurity" },
  { title: "Mobile App Developer", company: "AppHive", location: "Bengaluru", skills:["Flutter","Dart"], capacity:4, appliedCount:0, url:"https://unstop.com/internship/mobile-app" },
  { title: "UI/UX Designer Intern", company: "DesignWorks", location: "Remote", skills:["Figma","AdobeXD"], capacity:3, appliedCount:0, url:"https://unstop.com/internship/ui-ux" },
  { title: "DevOps Intern", company: "CloudOps", location: "Hyderabad", skills:["CI/CD","Jenkins"], capacity:2, appliedCount:0, url:"https://unstop.com/internship/devops" },

  { title: "Blockchain Developer", company: "BlockChainX", location: "Pune", skills:["Solidity","Web3.js"], capacity:3, appliedCount:0, url:"https://unstop.com/internship/blockchain" },
  { title: "Fullstack Developer", company: "TechNova", location: "Bengaluru", skills:["Node.js","React"], capacity:5, appliedCount:0, url:"https://unstop.com/internship/fullstack" },
  { title: "AI NLP Intern", company: "LinguaTech", location: "Mumbai", skills:["Python","NLP"], capacity:2, appliedCount:0, url:"https://unstop.com/internship/nlp" },
  { title: "Data Analyst Intern", company: "DataMinds", location: "Chennai", skills:["SQL","Excel"], capacity:4, appliedCount:0, url:"https://unstop.com/internship/data-analyst" },
  { title: "Robotics Intern", company: "RoboWorks", location: "Pune", skills:["C++","ROS"], capacity:2, appliedCount:0, url:"https://unstop.com/internship/robotics" },

  { title: "Machine Learning Ops Intern", company: "MLOps Inc", location: "Bengaluru", skills:["Python","ML","Docker"], capacity:3, appliedCount:0, url:"https://unstop.com/internship/mlops" },
  { title: "Game Developer Intern", company: "GameZone", location: "Hyderabad", skills:["Unity","C#"], capacity:3, appliedCount:0, url:"https://unstop.com/internship/game-dev" },
  { title: "Digital Marketing Intern", company: "MarketMinds", location: "Remote", skills:["SEO","Social Media"], capacity:4, appliedCount:0, url:"https://unstop.com/internship/digital-marketing" },
  { title: "AI Vision Intern", company: "VisionTech", location: "Bengaluru", skills:["Python","OpenCV"], capacity:3, appliedCount:0, url:"https://unstop.com/internship/ai-vision" },
  { title: "IoT Developer Intern", company: "IoT Solutions", location: "Chennai", skills:["Arduino","C"], capacity:2, appliedCount:0, url:"https://unstop.com/internship/iot" },

  { title: "Data Engineer Intern", company: "DataPipeline", location: "Mumbai", skills:["Python","SQL"], capacity:3, appliedCount:0, url:"https://unstop.com/internship/data-engineer" },
  { title: "Product Manager Intern", company: "Prodify", location: "Remote", skills:["Agile","Communication"], capacity:2, appliedCount:0, url:"https://unstop.com/internship/product-manager" },
  { title: "QA Engineer Intern", company: "Testify", location: "Pune", skills:["Selenium","Java"], capacity:3, appliedCount:0, url:"https://unstop.com/internship/qa-engineer" },
  { title: "Frontend Intern", company: "CodeCraft", location: "Bengaluru", skills:["React","JavaScript"], capacity:4, appliedCount:0, url:"https://unstop.com/internship/frontend-2" },
  { title: "Backend Intern", company: "ServerWorks", location: "Hyderabad", skills:["Node.js","Express"], capacity:3, appliedCount:0, url:"https://unstop.com/internship/backend-2" },

  { title: "Deep Learning Intern", company: "NeuroAI", location: "Mumbai", skills:["Python","TensorFlow"], capacity:2, appliedCount:0, url:"https://unstop.com/internship/deep-learning" },
  { title: "Cyber AI Intern", company: "CyberBrain", location: "Chennai", skills:["Python","AI","Security"], capacity:2, appliedCount:0, url:"https://unstop.com/internship/cyber-ai" },
  { title: "React Native Intern", company: "AppMasters", location: "Remote", skills:["React Native","JavaScript"], capacity:3, appliedCount:0, url:"https://unstop.com/internship/react-native" },
  { title: "Data Visualization Intern", company: "VizTech", location: "Bengaluru", skills:["Tableau","Python"], capacity:3, appliedCount:0, url:"https://unstop.com/internship/data-viz" },
  { title: "AI Robotics Intern", company: "AutoBotics", location: "Pune", skills:["Python","Robotics"], capacity:2, appliedCount:0, url:"https://unstop.com/internship/ai-robotics" },

  { title: "Fullstack Python Intern", company: "CodeBase", location: "Mumbai", skills:["Python","Django"], capacity:3, appliedCount:0, url:"https://unstop.com/internship/fullstack-python" },
  { title: "Blockchain Analyst Intern", company: "BlockWise", location: "Remote", skills:["Blockchain","Ethereum"], capacity:2, appliedCount:0, url:"https://unstop.com/internship/blockchain-analyst" },
  { title: "AI Chatbot Intern", company: "ChatAI", location: "Bengaluru", skills:["Python","NLP"], capacity:3, appliedCount:0, url:"https://unstop.com/internship/chatbot" },
  { title: "UI Developer Intern", company: "FrontLine", location: "Hyderabad", skills:["HTML","CSS","React"], capacity:4, appliedCount:0, url:"https://unstop.com/internship/ui-developer" },
  { title: "Embedded Systems Intern", company: "EmbedTech", location: "Chennai", skills:["C","C++","Microcontrollers"], capacity:2, appliedCount:0, url:"https://unstop.com/internship/embedded" },

  { title: "SEO Intern", company: "SearchWise", location: "Remote", skills:["SEO","Content Writing"], capacity:3, appliedCount:0, url:"https://unstop.com/internship/seo" },
  { title: "Python Developer Intern", company: "PyCoders", location: "Bengaluru", skills:["Python","Flask"], capacity:4, appliedCount:0, url:"https://unstop.com/internship/python-dev" },
  { title: "Data Mining Intern", company: "MineData", location: "Mumbai", skills:["Python","SQL"], capacity:3, appliedCount:0, url:"https://unstop.com/internship/data-mining" },
  { title: "AI Strategy Intern", company: "AIWise", location: "Remote", skills:["AI","Research"], capacity:2, appliedCount:0, url:"https://unstop.com/internship/ai-strategy" },
  { title: "Frontend UI Intern", company: "UIWorks", location: "Hyderabad", skills:["React","CSS"], capacity:3, appliedCount:0, url:"https://unstop.com/internship/frontend-ui" },

  ];

const categories = ["General", "OBC", "SC", "ST", "Rural", "Aspirational"];

export default function MatchEngine() {
  const [formData, setFormData] = useState({
    name: "", contact: "", college: "",
    skillsArray: [], skillInput: "",
    location: "", sector: "", category: "",
    resume: null, pastParticipation: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [matchedInternships, setMatchedInternships] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if(type==="checkbox") setFormData({...formData, [name]: checked});
    else setFormData({...formData, [name]: value});
  };

  const calculateScore = (student, internship) => {
    const studentSkills = student.skillsArray.map(s => s.toLowerCase());
    const skillMatchCount = internship.skills.filter(skill => studentSkills.includes(skill.toLowerCase())).length;

    let score = skillMatchCount * 20;
    if(student.pastParticipation) score -= 10;
    if(internship.location.toLowerCase() === student.location.toLowerCase()) score += 5;
    if(categories.includes(student.category)) score += 10;
    if(internship.appliedCount >= internship.capacity) score -= 10;

    return Math.min(Math.max(Math.round(score), 0), 100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const scoredInternships = internshipsData.map(intern => ({
      ...intern,
      score: calculateScore(formData, intern)
    }));
    const topInternships = scoredInternships.sort((a,b) => b.score - a.score).slice(0,4);
    setMatchedInternships(topInternships);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">Find Your Dream Internship</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4">
        {["name","contact","college","location","sector"].map((field,i)=>(
          <div key={i} className="flex flex-col">
            <label className="font-semibold text-gray-700">{field.charAt(0).toUpperCase()+field.slice(1)}</label>
            <input type="text" name={field} value={formData[field]} onChange={handleChange} required
              className="p-2 border rounded-md focus:ring-2 focus:ring-purple-300 outline-none" />
          </div>
        ))}

        <div className="flex flex-col">
          <label className="font-semibold text-gray-700">Skills (Enter and press Enter)</label>
          <div className="flex flex-wrap gap-2 p-2 border rounded-md">
            {formData.skillsArray.map((skill, idx)=>(
              <span key={idx} className="bg-purple-300 px-2 py-1 rounded-full flex items-center gap-1">
                {skill}
                <button type="button" onClick={()=>{
                  setFormData({...formData, skillsArray: formData.skillsArray.filter((s,i)=>i!==idx)});
                }}>&times;</button>
              </span>
            ))}
            <input
              type="text"
              value={formData.skillInput}
              onChange={(e)=>setFormData({...formData, skillInput:e.target.value})}
              onKeyDown={(e)=>{
                if(e.key==="Enter" && formData.skillInput.trim()!==""){
                  e.preventDefault();
                  setFormData({
                    ...formData,
                    skillsArray:[...formData.skillsArray, formData.skillInput.trim()],
                    skillInput:""
                  });
                }
              }}
              placeholder="Add skills..."
              className="flex-1 outline-none p-1"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="font-semibold text-gray-700">Category</label>
          <select name="category" value={formData.category} onChange={handleChange} required
            className="p-2 border rounded-md focus:ring-2 focus:ring-purple-300 outline-none">
            <option value="" disabled>Select Category</option>
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>
 {/* Resume */}
          <label className="flex flex-col text-gray-700">
            Upload Resume
            <input type="file" name="resume" onChange={handleChange} className="mt-2 p-2 rounded-xl bg-white/50 border border-gray-300 text-gray-800" required />
          </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" name="pastParticipation" checked={formData.pastParticipation} onChange={handleChange}/>
          Past Participation
        </label>

        <button type="submit" className="bg-purple-300 py-2 rounded-md font-bold hover:bg-purple-400 transition">
          Find My Internships
        </button>
      </form>

      {submitted && (
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {matchedInternships.map((intern, idx)=>(
            <div key={idx} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition border-t-4 border-purple-600">
              <h3 className="font-bold text-purple-700">{intern.title} - {intern.company}</h3>
              <p>Location: {intern.location}</p>
              <p>Skills: {intern.skills.join(", ")}</p>
              <div className="mt-2 w-full h-3 bg-gray-300 rounded-full">
                <div className="h-3 bg-purple-300 rounded-full" style={{width:`${intern.score}%`}}></div>
              </div>
              <p className="text-right font-semibold">{intern.score}% Match</p>
              <div className="mt-2 flex gap-2">
                <a href={intern.url} target="_blank" rel="noopener noreferrer" className="flex-1 bg-green-400 hover:bg-green-500 text-white py-1 rounded text-center">View</a>
                <a href={intern.url} target="_blank" rel="noopener noreferrer" className="flex-1 bg-blue-400 hover:bg-blue-500 text-white py-1 rounded text-center">Apply</a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
