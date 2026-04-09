import Input from "../../../components/Inputs/Input";
import { LuPlus, LuTrash2 } from "react-icons/lu";
import RatingInput from "../../../components/ResumeSections/RatingInput";

function SkillsInfoForm({
  skillsInfo,
  updateArrayItem,
  addArrayItem,
  removeArrayItem,
}) {

  return (
   <div className="px-5 pt-3">
      <h2 className="text-lg font-semibold text-gray-900">Skills</h2>
      <div className="mt-4 flex flex-col gap-6 mb-3">
        {/* Programming */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Programming</h3>
          {(skillsInfo.programming || []).map((skill, index) => (
            <div key={index} className="border border-gray-200/80 p-4 rounded-lg relative mb-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Skill Name"
                  placeholder="JavaScript"
                  type="text"
                  value={skill.name || ""}
                  onChange={(e) =>
                    updateArrayItem("programming", index, "name", e.target.value)
                  }
                />
                <div>
                  <label className="text-[13px] text-slate-800 mb-1">
                    Proficiency ({skill.progress / 20 || 0}/5)
                  </label>
                  <div className="mt-5">
                    <RatingInput
                      value={skill.progress || 0}
                      total={5}
                      onChange={(newValue) =>
                        updateArrayItem("programming", index, "progress", newValue)
                      }
                    />
                  </div>
                </div>
              </div>
              {(skillsInfo.programming || []).length > 0 && (
                <button
                  className="absolute top-3 right-3 text-sm text-red-600 hover:underline cursor-pointer"
                  type="button"
                  onClick={() => removeArrayItem("programming", index)}
                >
                  <LuTrash2 />
                </button>
              )}
            </div>
          ))}
          <button
            className="flex items-center gap-2 px-4 py-2 rounded bg-purple-100 text-purple-800 cursor-pointer"
            onClick={() => addArrayItem("programming", { name: "", progress: 0 })}
          >
            <LuPlus /> Add Skill
          </button>
        </div>

        {/* Databases */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Databases</h3>
          {(skillsInfo.databases || []).map((skill, index) => (
            <div key={index} className="border border-gray-200/80 p-4 rounded-lg relative mb-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Skill Name"
                  placeholder="MySQL"
                  type="text"
                  value={skill.name || ""}
                  onChange={(e) =>
                    updateArrayItem("databases", index, "name", e.target.value)
                  }
                />
                <div>
                  <label className="text-[13px] text-slate-800 mb-1">
                    Proficiency ({skill.progress / 20 || 0}/5)
                  </label>
                  <div className="mt-5">
                    <RatingInput
                      value={skill.progress || 0}
                      total={5}
                      onChange={(newValue) =>
                        updateArrayItem("databases", index, "progress", newValue)
                      }
                    />
                  </div>
                </div>
              </div>
              {(skillsInfo.databases || []).length > 0 && (
                <button
                  className="absolute top-3 right-3 text-sm text-red-600 hover:underline cursor-pointer"
                  type="button"
                  onClick={() => removeArrayItem("databases", index)}
                >
                  <LuTrash2 />
                </button>
              )}
            </div>
          ))}
          <button
            className="flex items-center gap-2 px-4 py-2 rounded bg-purple-100 text-purple-800 cursor-pointer"
            onClick={() => addArrayItem("databases", { name: "", progress: 0 })}
          >
            <LuPlus /> Add Skill
          </button>
        </div>

        {/* Backend Development*/}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Backend Development</h3>
          {(skillsInfo.backendDevelopment || []).map((skill, index) => (
            <div key={index} className="border border-gray-200/80 p-4 rounded-lg relative mb-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Skill Name"
                  placeholder="ReactJS"
                  type="text"
                  value={skill.name || ""}
                  onChange={(e) =>
                    updateArrayItem("backendDevelopment", index, "name", e.target.value)
                  }
                />
                <div>
                  <label className="text-[13px] text-slate-800 mb-1">
                    Proficiency ({skill.progress / 20 || 0}/5)
                  </label>
                  <div className="mt-5">
                    <RatingInput
                      value={skill.progress || 0}
                      total={5}
                      onChange={(newValue) =>
                        updateArrayItem("backendDevelopment", index, "progress", newValue)
                      }
                    />
                  </div>
                </div>
              </div>
              {(skillsInfo.backendDevelopment || []).length > 0 && (
                <button
                  className="absolute top-3 right-3 text-sm text-red-600 hover:underline cursor-pointer"
                  type="button"
                  onClick={() => removeArrayItem("backendDevelopment", index)}
                >
                  <LuTrash2 />
                </button>
              )}
            </div>
          ))}
          <button
            className="flex items-center gap-2 px-4 py-2 rounded bg-purple-100 text-purple-800 cursor-pointer"
            onClick={() => addArrayItem("backendDevelopment", { name: "", progress: 0 })}
          >
            <LuPlus /> Add Skill
          </button>
        </div>

         {/* Frontend Development*/}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Frontend Development</h3>
          {(skillsInfo.frontendDevelopment || []).map((skill, index) => (
            <div key={index} className="border border-gray-200/80 p-4 rounded-lg relative mb-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Skill Name"
                  placeholder="ReactJS"
                  type="text"
                  value={skill.name || ""}
                  onChange={(e) =>
                    updateArrayItem("frontendDevelopment", index, "name", e.target.value)
                  }
                />
                <div>
                  <label className="text-[13px] text-slate-800 mb-1">
                    Proficiency ({skill.progress / 20 || 0}/5)
                  </label>
                  <div className="mt-5">
                    <RatingInput
                      value={skill.progress || 0}
                      total={5}
                      onChange={(newValue) =>
                        updateArrayItem("frontendDevelopment", index, "progress", newValue)
                      }
                    />
                  </div>
                </div>
              </div>
              {(skillsInfo.frontendDevelopment || []).length > 0 && (
                <button
                  className="absolute top-3 right-3 text-sm text-red-600 hover:underline cursor-pointer"
                  type="button"
                  onClick={() => removeArrayItem("frontendDevelopment", index)}
                >
                  <LuTrash2 />
                </button>
              )}
            </div>
          ))}
          <button
            className="flex items-center gap-2 px-4 py-2 rounded bg-purple-100 text-purple-800 cursor-pointer"
            onClick={() => addArrayItem("frontendDevelopment", { name: "", progress: 0 })}
          >
            <LuPlus /> Add Skill
          </button>
        </div>

        {/* Software Engineering Fundamnetals*/}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Software Engineering Fundamnetals</h3>
          {(skillsInfo.softwareEngineeringFundamentals || []).map((skill, index) => (
            <div key={index} className="border border-gray-200/80 p-4 rounded-lg relative mb-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Skill Name"
                  placeholder="ReactJS"
                  type="text"
                  value={skill.name || ""}
                  onChange={(e) =>
                    updateArrayItem("softwareEngineeringFundamentals", index, "name", e.target.value)
                  }
                />
                <div>
                  <label className="text-[13px] text-slate-800 mb-1">
                    Proficiency ({skill.progress / 20 || 0}/5)
                  </label>
                  <div className="mt-5">
                    <RatingInput
                      value={skill.progress || 0}
                      total={5}
                      onChange={(newValue) =>
                        updateArrayItem("softwareEngineeringFundamentals", index, "progress", newValue)
                      }
                    />
                  </div>
                </div>
              </div>
              {(skillsInfo.softwareEngineeringFundamentals || []).length > 0 && (
                <button
                  className="absolute top-3 right-3 text-sm text-red-600 hover:underline cursor-pointer"
                  type="button"
                  onClick={() => removeArrayItem("softwareEngineeringFundamentals", index)}
                >
                  <LuTrash2 />
                </button>
              )}
            </div>
          ))}
          <button
            className="flex items-center gap-2 px-4 py-2 rounded bg-purple-100 text-purple-800 cursor-pointer"
            onClick={() => addArrayItem("softwareEngineeringFundamentals", { name: "", progress: 0 })}
          >
            <LuPlus /> Add Skill
          </button>
        </div>

         {/* Devops & Tools*/}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Devops & Tools</h3>
          {(skillsInfo.cloudTools || []).map((skill, index) => (
            <div key={index} className="border border-gray-200/80 p-4 rounded-lg relative mb-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Skill Name"
                  placeholder="ReactJS"
                  type="text"
                  value={skill.name || ""}
                  onChange={(e) =>
                    updateArrayItem("cloudTools", index, "name", e.target.value)
                  }
                />
                <div>
                  <label className="text-[13px] text-slate-800 mb-1">
                    Proficiency ({skill.progress / 20 || 0}/5)
                  </label>
                  <div className="mt-5">
                    <RatingInput
                      value={skill.progress || 0}
                      total={5}
                      onChange={(newValue) =>
                        updateArrayItem("cloudTools", index, "progress", newValue)
                      }
                    />
                  </div>
                </div>
              </div>
              {(skillsInfo.cloudTools || []).length > 0 && (
                <button
                  className="absolute top-3 right-3 text-sm text-red-600 hover:underline cursor-pointer"
                  type="button"
                  onClick={() => removeArrayItem("cloudTools", index)}
                >
                  <LuTrash2 />
                </button>
              )}
            </div>
          ))}
          <button
            className="flex items-center gap-2 px-4 py-2 rounded bg-purple-100 text-purple-800 cursor-pointer"
            onClick={() => addArrayItem("cloudTools", { name: "", progress: 0 })}
          >
            <LuPlus /> Add Skill
          </button>
        </div>  

        {/* Messaging & Streaming */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Messaging & Streaming</h3>
          {(skillsInfo.aiMlAndComputerVision || []).map((skill, index) => (
            <div key={index} className="border border-gray-200/80 p-4 rounded-lg relative mb-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Skill Name"
                  placeholder="Machine Learning"
                  type="text"
                  value={skill.name || ""}
                  onChange={(e) =>
                    updateArrayItem("aiMlAndComputerVision", index, "name", e.target.value)
                  }
                />
                <div>
                  <label className="text-[13px] text-slate-800 mb-1">
                    Proficiency ({skill.progress / 20 || 0}/5)
                  </label>
                  <div className="mt-5">
                    <RatingInput
                      value={skill.progress || 0}
                      total={5}
                      onChange={(newValue) =>
                        updateArrayItem("aiMlAndComputerVision", index, "progress", newValue)
                      }
                    />
                  </div>
                </div>
              </div>
              {(skillsInfo.aiMlAndComputerVision || []).length > 0 && (
                <button
                  className="absolute top-3 right-3 text-sm text-red-600 hover:underline cursor-pointer"
                  type="button"
                  onClick={() => removeArrayItem("aiMlAndComputerVision", index)}
                >
                  <LuTrash2 />
                </button>
              )}
            </div>
          ))}
          <button
            className="flex items-center gap-2 px-4 py-2 rounded bg-purple-100 text-purple-800 cursor-pointer"
            onClick={() => addArrayItem("aiMlAndComputerVision", { name: "", progress: 0 })}
          >
            <LuPlus /> Add Skill
          </button>
        </div>


        {/** Microserivces Architecture */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Microservices & Architecture </h3>
          {(skillsInfo.ecad || []).map((skill, index) => (
            <div key={index} className="border border-gray-200/80 p-4 rounded-lg relative mb-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Skill Name"
                  placeholder="Machine Learning"
                  type="text"
                  value={skill.name || ""}
                  onChange={(e) =>
                    updateArrayItem("ecad", index, "name", e.target.value)
                  }
                />
                <div>
                  <label className="text-[13px] text-slate-800 mb-1">
                    Proficiency ({skill.progress / 20 || 0}/5)
                  </label>
                  <div className="mt-5">
                    <RatingInput
                      value={skill.progress || 0}
                      total={5}
                      onChange={(newValue) =>
                        updateArrayItem("ecad", index, "progress", newValue)
                      }
                    />
                  </div>
                </div>
              </div>
              {(skillsInfo.ecad || []).length > 0 && (
                <button
                  className="absolute top-3 right-3 text-sm text-red-600 hover:underline cursor-pointer"
                  type="button"
                  onClick={() => removeArrayItem("ecad", index)}
                >
                  <LuTrash2 />
                </button>
              )}
            </div>
          ))}
          <button
            className="flex items-center gap-2 px-4 py-2 rounded bg-purple-100 text-purple-800 cursor-pointer"
            onClick={() => addArrayItem("ecad", { name: "", progress: 0 })}
          >
            <LuPlus /> Add Skill
          </button>
        </div>

        {/** Security */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Security </h3>
          {(skillsInfo.pcb || []).map((skill, index) => (
            <div key={index} className="border border-gray-200/80 p-4 rounded-lg relative mb-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Skill Name"
                  placeholder="Machine Learning"
                  type="text"
                  value={skill.name || ""}
                  onChange={(e) =>
                    updateArrayItem("pcb", index, "name", e.target.value)
                  }
                />
                <div>
                  <label className="text-[13px] text-slate-800 mb-1">
                    Proficiency ({skill.progress / 20 || 0}/5)
                  </label>
                  <div className="mt-5">
                    <RatingInput
                      value={skill.progress || 0}
                      total={5}
                      onChange={(newValue) =>
                        updateArrayItem("pcb", index, "progress", newValue)
                      }
                    />
                  </div>
                </div>
              </div>
              {(skillsInfo.pcb || []).length > 0 && (
                <button
                  className="absolute top-3 right-3 text-sm text-red-600 hover:underline cursor-pointer"
                  type="button"
                  onClick={() => removeArrayItem("pcb", index)}
                >
                  <LuTrash2 />
                </button>
              )}
            </div>
          ))}
          <button
            className="flex items-center gap-2 px-4 py-2 rounded bg-purple-100 text-purple-800 cursor-pointer"
            onClick={() => addArrayItem("pcb", { name: "", progress: 0 })}
          >
            <LuPlus /> Add Skill
          </button>
        </div>

        {/** Observaibility */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Observability </h3>
          {(skillsInfo.softSkills || []).map((skill, index) => (
            <div key={index} className="border border-gray-200/80 p-4 rounded-lg relative mb-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Skill Name"
                  placeholder="Machine Learning"
                  type="text"
                  value={skill.name || ""}
                  onChange={(e) =>
                    updateArrayItem("softSkills", index, "name", e.target.value)
                  }
                />
                <div>
                  <label className="text-[13px] text-slate-800 mb-1">
                    Proficiency ({skill.progress / 20 || 0}/5)
                  </label>
                  <div className="mt-5">
                    <RatingInput
                      value={skill.progress || 0}
                      total={5}
                      onChange={(newValue) =>
                        updateArrayItem("softSkills", index, "progress", newValue)
                      }
                    />
                  </div>
                </div>
              </div>
              {(skillsInfo.softSkills || []).length > 0 && (
                <button
                  className="absolute top-3 right-3 text-sm text-red-600 hover:underline cursor-pointer"
                  type="button"
                  onClick={() => removeArrayItem("softSkills", index)}
                >
                  <LuTrash2 />
                </button>
              )}
            </div>
          ))}
          <button
            className="flex items-center gap-2 px-4 py-2 rounded bg-purple-100 text-purple-800 cursor-pointer"
            onClick={() => addArrayItem("softSkills", { name: "", progress: 0 })}
          >
            <LuPlus /> Add Skill
          </button>
        </div>  

      </div>
    </div>
  );
}

export default SkillsInfoForm;
