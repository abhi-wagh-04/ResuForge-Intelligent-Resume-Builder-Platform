import Input from "../../../components/Inputs/Input";
import { LuPlus, LuTrash2 } from "react-icons/lu";

function EducationDetailsForm({
  educatonInfo,
  updateArrayItem,
  addArrayItem,
  removeArrayItem,
}) {
  return (
   <div className="px-5 pt-5">
  <h2 className="text-lg font-semibold text-gray-900">Education</h2>
  <div className="mt-4 flex flex-col gap-4 mb-3">
    {educatonInfo.map((educaton, index) => (
      <div
        key={index}
        className="border border-gray-200/80 p-4 rounded-lg relative"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Degree */}
          <Input
            label="Degree"
            placeholder="B.Tech in Computer Science"
            type="text"
            value={educaton.degree || ""}
            onChange={(e) =>
              updateArrayItem(index, "degree", e.target.value)
            }
          />

          {/* Institution */}
          <Input
            label="Institution"
            placeholder="XYZ University"
            type="text"
            value={educaton.institution || ""}
            onChange={(e) =>
              updateArrayItem(index, "institution", e.target.value)
            }
          />

          {/* Start Date */}
          <Input
            label="Start Date"
            type="month"
            value={educaton.startDate || ""}
            onChange={(e) =>
              updateArrayItem(index, "startDate", e.target.value)
            }
          />

          {/* End Date */}
          <Input
            label="End Date"
            type="month"
            value={educaton.endDate || ""}
            onChange={(e) =>
              updateArrayItem(index, "endDate", e.target.value)
            }
          />

          {/* CGPA / Percentage */}
          <div>
            <Input
              label="CGPA / Percentage"
              placeholder="e.g. 8.5 or 78"
              type="text" // text so we can append "%"
              value={educaton.cgpa || ""}
              onChange={(e) => {
                let value = e.target.value;

                // Remove % if user is editing again
                value = value.replace("%", "").trim();

                // If number >= 10 → add %
                if (!isNaN(value) && value !== "") {
                  if (parseFloat(value) >= 10) {
                    updateArrayItem(index, "cgpa", value + " %");
                  } else {
                    updateArrayItem(index, "cgpa", value);
                  }
                } else {
                  updateArrayItem(index, "cgpa", "");
                }
              }}
            />
            {educaton.cgpa && (
              <p className="text-xs text-gray-500 mt-1">
                {educaton.cgpa.includes("%")
                  ? "Interpreted as Percentage"
                  : "Interpreted as CGPA"}
              </p>
            )}
          </div>

          {/* Location */}
          <Input
            label="Location"
            placeholder="e.g. Pune, India"
            type="text"
            value={educaton.location || ""}
            onChange={(e) =>
              updateArrayItem(index, "location", e.target.value)
            }
          />
        </div>

        {/* Delete Button */}
        {educatonInfo.length > 1 && (
          <button
            type="button"
            className="absolute top-3 right-3 text-sm text-red-600 hover:underline cursor-pointer"
            onClick={() => removeArrayItem(index)}
          >
            <LuTrash2 />
          </button>
        )}
      </div>
    ))}

    {/* Add Button */}
    <button
      type="button"
      className="self-start flex items-center gap-2 px-4 py-2 rounded bg-purple-100 text-purple-800 text-sm font-medium hover:bg-purple-200 cursor-pointer"
      onClick={() =>
        addArrayItem({
          degree: "",
          institution: "",
          startDate: "",
          endDate: "",
          cgpa: "",
          location: "",
        })
      }
    >
      <LuPlus /> Add Education
    </button>
  </div>
</div>

  );
}

export default EducationDetailsForm;
