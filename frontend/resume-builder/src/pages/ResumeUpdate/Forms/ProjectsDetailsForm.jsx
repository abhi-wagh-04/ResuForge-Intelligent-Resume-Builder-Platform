import Input from "../../../components/Inputs/Input";
import { LuPlus, LuTrash2 } from "react-icons/lu";

function ProjectsDetailsForm({
  projectInfo,
  updateArrayItem,
  addArrayItem,
  removeArrayItem,
}) {
  return (
   <div className="px-5 pt-5">
  <h2 className="text-lg font-semibold text-gray-900">Projects</h2>
  <div className="mt-4 flex flex-col gap-4 mb-3">
    {projectInfo?.map((project, index) => (
      <div
        className="border border-gray-200/80 p-4 rounded-lg relative"
        key={index}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Project Title */}
          <div className="col-span-2">
            <Input
              label="Project Title"
              placeholder="Portfolio Website"
              type="text"
              value={project.title || ""}
              onChange={(e) =>
                updateArrayItem(index, "title", e.target.value)
              }
            />
          </div>

          {/* Project Description */}
          <div className="col-span-2">
            <label className="text-xs font-medium text-slate-600">
              Description
            </label>
            <textarea
              placeholder="Short Description about this project.."
              className="form-input w-full mt-1"
              rows={3}
              value={project.description || ""}
              onChange={(e) =>
                updateArrayItem(index, "description", e.target.value)
              }
            />
          </div>

          {/* Tools Used */}
          <div className="col-span-2">
            <Input
              label="Tools Used"
              placeholder="ReactJS, NodeJS, MongoDB"
              type="text"
              value={project.tools?.join(", ") || ""}
              onChange={(e) =>
                updateArrayItem(
                  index,
                  "tools",
                  e.target.value.split(",").map((tool) => tool.trim())
                )
              }
            />
          </div>

          {/* Github Link */}
          <Input
            label="Github Link"
            placeholder="https://github.com/username/project"
            type="url"
            value={project.github || ""}
            onChange={(e) =>
              updateArrayItem(index, "github", e.target.value)
            }
          />

          {/* Live Demo */}
          <Input
            label="Live Demo Url"
            placeholder="https://yourproject.live"
            type="url"
            value={project.liveDemo || ""}
            onChange={(e) =>
              updateArrayItem(index, "liveDemo", e.target.value)
            }
          />
        </div>

        {/* Remove Project Button */}
        {projectInfo?.length > 1 && (
          <button
            className="absolute top-3 right-3 text-sm text-red-600 hover:underline cursor-pointer"
            type="button"
            onClick={() => removeArrayItem(index)}
          >
            <LuTrash2 />
          </button>
        )}
      </div>
    ))}

    {/* Add Project Button */}
    <button
      className="self-start flex items-center gap-2 px-4 py-2 rounded bg-purple-100 hover:bg-purple-200 text-purple-800 cursor-pointer"
      onClick={() =>
        addArrayItem({
          title: "",
          description: "",
          tools: [],
          github: "",
          liveDemo: "",
        })
      }
    >
      <LuPlus /> Add Project
    </button>
  </div>
</div>

  );
}

export default ProjectsDetailsForm;
