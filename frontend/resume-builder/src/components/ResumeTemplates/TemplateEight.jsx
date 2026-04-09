import { useEffect, useRef, useState } from "react";
import {
  FaEnvelope,   // solid email
  FaPhone,      // solid phone
  FaGithub,     // solid GitHub logo
  FaMapMarkerAlt, // solid location pin
  FaLinkedin,   // solid LinkedIn logo
} from "react-icons/fa";

const fonts = {
  times: `"Times New Roman", Times, serif`,
  georgia: `Georgia, serif`,
  cambria: `Cambria, serif`,
  baskerville: `Baskerville, serif`,
  palatino: `"Palatino Linotype", "Book Antiqua", Palatino, serif`,
  merriweather: `"Merriweather", serif`,
  libreBaskerville: `"Libre Baskerville", serif`,
  playfair: `"Playfair Display", serif`,
  cormorant: `"Cormorant Garamond", serif`,
  sourceSerif: `"Source Serif 4", serif`,
  tinos: `"Tinos", serif`,

  // Newly added
  garamond: `Garamond, serif`,
  adobeGaramond: `"Adobe Garamond Pro", Garamond, serif`, // if installed
  ebGaramond: `"EB Garamond", serif`, // needs Google Fonts import
};

const titleFont = fonts.times;
const bodyFont = fonts.times;

const DEFAULT_THEME = ["#EBFDFF", "#A1F4FD", "#CEFAFE", "#00B8DB", "#4A5565"];


function TemplateEight({ resumeData, colorPalette, containerWidth }) {
  console.log(containerWidth);
  const themeColors = colorPalette?.length > 0 ? colorPalette : DEFAULT_THEME;
  const resumeRef = useRef(null);
  const [baseWidth, setBaseWidth] = useState(800);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    // Calculate the scale factor based on the container width
    const actualBaseWidth = resumeRef.current.offsetWidth;
    setBaseWidth(actualBaseWidth);
    setScale(containerWidth / baseWidth);
  }, [containerWidth]);

  return (
    <div
      ref={resumeRef}
      className="px-2 bg-white text-[12px] leading-tight"
      style={{
        fontFamily: bodyFont,
        fontFeatureSettings: `"lnum", "tnum"`,
        transform: containerWidth > 0 ? `scale(1)` : "none",
        transformOrigin: "top left",
        width: containerWidth > 0 ? `${baseWidth}px` : "auto",
        height: "auto",
      }}
    >

    {/* HEADER */}
  <div className="px-2 pt-1 pb-2 text-center" style={{ fontFamily: titleFont }}>
    <h2
      className="font-bold"
      style={{ fontSize: "32px", letterSpacing: "0.5px" }}
    >
      {resumeData.profileInfo.fullName}
    </h2>
    <div
      className="flex justify-center font-semibold flex-wrap gap-x-3"
      style={{ fontSize: "11.5px", letterSpacing: "0.2px" }}
    >
      {resumeData.contactInfo.email && (
        <a href={`mailto:${resumeData.contactInfo.email}`} className="hover:underline flex items-center gap-1">
          <FaEnvelope size={13} /> {resumeData.contactInfo.email}
        </a>
      )}
      {resumeData.contactInfo.phone && (
        <a href={`tel:+91${resumeData.contactInfo.phone}`} className="hover:underline flex items-center gap-1">
           <FaPhone size={13} style={{ transform: "rotate(90deg)" }} />
          +91 {resumeData.contactInfo.phone}
         
        </a>
      )}
      {resumeData.contactInfo.linkedin && (
        <a href={resumeData.contactInfo.linkedin} className="hover:underline flex items-center gap-1" target="_blank" rel="noreferrer">
          <FaLinkedin size={13} /> LinkedIn
        </a>
      )}
      {resumeData.contactInfo.github && (
        <a href={resumeData.contactInfo.github} className="hover:underline flex items-center gap-1" target="_blank" rel="noreferrer">
          <FaGithub size={13} /> GitHub
        </a>
      )}
      {resumeData.contactInfo.location && (
        <span className="flex items-center gap-1">
          <FaMapMarkerAlt size={13} /> {resumeData.contactInfo.location}
        </span>
      )}
    </div>
  </div>    

{/* EDUCATION */}
  <div className="px-2 pt-1 pb-2" style={{ fontFamily: bodyFont }}>
    <h2
      className="font-bold text-gray-800 mb-0.5"
      style={{ letterSpacing: "0.5px" }}
    >
      <span style={{ fontSize: "16px" }}>E</span>
      <span style={{ fontSize: "14px" }}>DUCATION</span>
    </h2>
    <hr className="border-t border-gray-400 mb-1" />
    {resumeData.educaton.map((edu, index) => (
      <div key={index} className="mb-1 pl-4">
        <div className="flex justify-between items-start">
          <div>
            <p
              className="font-semibold text-gray-800 inline"
              style={{ fontSize: "12px" }}
            >
              {edu.degree},{" "}
            </p>
            <p
              className="font-medium text-gray-700 inline"
              style={{ fontSize: "12px" }}
            >
              {edu.institution}
            </p>
          </div>
          <p
            className="text-gray-600 text-right"
            style={{ fontSize: "11px" }}
          >
            {new Date(edu.startDate).toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}{" "}
            -{" "}
            {new Date(edu.endDate).toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
        <p
          className="text-gray-700"
          style={{ fontSize: "11.5px", lineHeight: "1.2" }}
        >
          {edu.description}
        </p>
      </div>
    ))}
  </div>

{resumeData.skills && (
  <div className="px-2 pb-2" style={{ fontFamily: bodyFont }}>
    <h2
      className="font-bold text-gray-800 mb-0.5"
      style={{ letterSpacing: "0.5px" }}
    >
      <span style={{ fontSize: "16px" }}>S</span>
      <span style={{ fontSize: "14px" }}>KILLS</span>
    </h2>
    <hr className="border-t border-gray-400 mb-1 w-full" />
    <div className="pl-4">
      {(resumeData.skills.programming || []).length > 0 && (
        <div className="mb-0.5">
          <span className="font-semibold" style={{ fontSize: "11.5px" }}>
            Languages:{" "}
          </span>
          <span style={{ fontSize: "11.5px" }}>
            {(resumeData.skills.programming || [])
              .map((skill) => skill.name)
              .join(", ")}
          </span>
        </div>
      )}
      {(resumeData.skills.frameworksAndTools || []).length > 0 && (
        <div className="mb-0.5">
          <span className="font-semibold" style={{ fontSize: "11.5px" }}>
            Frameworks & Libraries:{" "}
          </span>
          <span style={{ fontSize: "11.5px" }}>
            {(resumeData.skills.frameworksAndTools || [])
              .map((skill) => skill.name)
              .join(", ")}
          </span>
        </div>
      )}
      {(resumeData.skills.databases || []).length > 0 && (
        <div className="mb-0.5">
          <span className="font-semibold" style={{ fontSize: "11.5px" }}>
            Databases:{" "}
          </span>
          <span style={{ fontSize: "11.5px" }}>
            {(resumeData.skills.databases || [])
              .map((skill) => skill.name)
              .join(", ")}
          </span>
        </div>
      )}
      {(resumeData.skills.aiMlAndComputerVision || []).length > 0 && (
        <div>
          <span className="font-semibold" style={{ fontSize: "11.5px" }}>
            AI/ML & Computer Vision:{" "}
          </span>
          <span style={{ fontSize: "11.5px" }}>
            {(resumeData.skills.aiMlAndComputerVision || [])
              .map((skill) => skill.name)
              .join(", ")}
          </span>
        </div>
      )}
    </div>
  </div>
)}


{/* EXPERIENCE */}
<div className="px-2 pb-1" style={{ fontFamily: bodyFont }}>
  <h2
    className="font-bold text-gray-800 mb-0.5"
    style={{ letterSpacing: "0.5px" }}
  >
    <span style={{ fontSize: "16px" }}>E</span>
    <span style={{ fontSize: "14px" }}>XPERIENCE</span>
  </h2>
  <hr className="border-t border-gray-400 mb-1" />
  {resumeData.workExperience.map((exp, index) => (
    <div key={index} className="mb-1.5 pl-4">
      {/* Company + Dates */}
      <div className="flex justify-between">
        <p className="font-bold text-gray-800" style={{ fontSize: "12px" }}>
          {exp.company.trim()}
        </p>
        <p className="text-gray-600" style={{ fontSize: "11px" }}>
          {new Date(exp.startDate).toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}{" "}
          –{" "}
          {new Date(exp.endDate).toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
      {/* Role + Location */}
      <div className="flex justify-between">
        <p className="italic" style={{ fontSize: "11.5px" }}>
          {exp.role}
        </p>
        {exp.location && (
          <p className="text-gray-700" style={{ fontSize: "11.5px" }}>
            {exp.location}
          </p>
        )}
      </div>
      {/* Bullets */}
      <ul
        className="pl-5 mt-0.5 space-y-0.25"
        style={{
          fontSize: "11.5px",
          lineHeight: "1.35",
          listStyleType: '"\\2022  "',
        }}
      >
        {exp.description
          .split(".")
          .map((point) => point.trim())
          .filter((point) => point.length > 0)
          .map((point, i) => (
            <li key={i} style={{ paddingLeft: "0" }}>
              {point}.
            </li>
          ))}
      </ul>
    </div>
  ))}
</div>

{/* PROJECTS */}
<div className="px-2 pb-1" style={{ fontFamily: bodyFont }}>
  <h2
    className="font-bold text-gray-800 mb-0.5"
    style={{ letterSpacing: "0.5px" }}
  >
    <span style={{ fontSize: "16px" }}>P</span>
    <span style={{ fontSize: "14px" }}>ROJECTS</span>
  </h2>
  <hr className="border-t border-gray-400 mb-1" />
  {resumeData.projects.map((project, index) => (
    <div key={index} className="mb-1.5 pl-4">
      {/* Title + Date + GitHub */}
      <div className="flex justify-between items-center">
        <p className="font-semibold text-gray-800" style={{ fontSize: "12px" }}>
          {project.title}
        </p>
        <div className="flex items-center gap-2">
          {project.date && (
            <p className="text-gray-600" style={{ fontSize: "11px" }}>
              {project.date}
            </p>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:underline text-gray-800"
              style={{ fontSize: "11px" }}
            >
              GitHub
            </a>
          )}
        </div>
      </div>
      {/* Role + Location */}
      {(project.role || project.location) && (
        <div className="flex justify-between">
          <p className="italic" style={{ fontSize: "11.5px" }}>
            {project.role}
          </p>
          {project.location && (
            <p className="text-gray-700" style={{ fontSize: "11.5px" }}>
              {project.location}
            </p>
          )}
        </div>
      )}
      {/* Bullets */}
      <ul
        className="pl-5 mt-0.5 space-y-0.25"
        style={{
          fontSize: "11.5px",
          lineHeight: "1.35",
          listStyleType: '"\\2022  "',
        }}
      >
        {project.description
          .split(".")
          .map((point) => point.trim())
          .filter((point) => point.length > 0)
          .map((point, i) => (
            <li key={i} style={{ paddingLeft: "0" }}>
              {point}.
            </li>
          ))}
      </ul>
    </div>
  ))}
</div>


{/* PUBLICATIONS */}
{resumeData.publications?.length > 0 && (
  <div className="px-4 pb-2" style={{ fontFamily: bodyFont }}>
    <h2
      className="font-bold text-gray-800 mb-0.5"
      style={{ letterSpacing: "0.5px" }}
    >
      <span style={{ fontSize: "16px" }}>P</span>
      <span style={{ fontSize: "14px" }}>UBLICATIONS</span>
    </h2>
    <hr className="border-t border-gray-400 mb-1" />
    {resumeData.publications.map((pub, index) => (
      <div key={index} className="mb-1 pl-4">
        <p
          className="font-semibold text-gray-900"
          style={{ fontSize: "12px" }}
        >
          {pub.link ? (
            <a
              href={pub.link}
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {pub.title}
            </a>
          ) : (
            pub.title
          )}
        </p>
        <p className="text-gray-700 italic" style={{ fontSize: "11px" }}>
          {pub.conference}, {pub.year}
        </p>
        <ul
          className="pl-5 mt-0.5 space-y-0.25"
          style={{
            fontSize: "11.5px",
            lineHeight: "1.35",
            listStyleType: '"\\2022  "',
          }}
        >
          {pub.description
            .split(".")
            .map((point) => point.trim())
            .filter((point) => point.length > 0)
            .map((point, i) => (
              <li
                key={i}
                style={{ textIndent: "-0.6em", paddingLeft: "0.6em" }}
              >
                {point}.
              </li>
            ))}
        </ul>
      </div>
    ))}
  </div>
)}

    </div> 
  )
}



export default TemplateEight;
