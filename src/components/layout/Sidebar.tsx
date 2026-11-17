import {
  LayoutDashboard,
  FolderKanban,
  Columns3,
  Layers,
  Settings,
  Menu,
  User,
  X,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";
function Sidebar() {
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className=" hidden w-64 h-dvh md:flex flex-col justify-between bg-obsidian text-ice">
        <div className="bg-surface rounded-lg p-2 flex items-center gap-3 py-5">
          <Layers className="text-accent" size={20} />
          <span className="text-lg font-semibold tracking-tight">TaskFlow</span>
        </div>
        <div>
          <div className="flex flex-col gap-1 px-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                ` flex items-center gap-3 px-3 py-2 rounded-xl hover:cursor-pointer hover:bg-surface-hover hover:text-ice ${isActive ? "bg-surface text-accent" : "text-text-secondary"}`
              }
              end
            >
              <LayoutDashboard size={20} />
              <span>Overview</span>
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-xl transition-colors duration-200 hover:cursor-pointer hover:bg-surface-hover hover:text-ice ${isActive ? "bg-surface text-accent" : "text-text-secondary"}`
              }
              end
            >
              <FolderKanban size={20} />
              <span>Projects</span>
            </NavLink>
            <NavLink
              to="/board"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-xl transition-colors duration-200 hover:cursor-pointer hover:bg-surface-hover hover:text-ice ${isActive ? "bg-surface text-accent" : "text-text-secondary"}`
              }
              end
            >
              <Columns3 size={20} />
              <span>Board</span>
            </NavLink>
          </div>
        </div>
        <div className="py-5 px-3">
          <NavLink
            to=""
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-xl transition-colors duration-200 hover:cursor-pointer  hover:bg-surface-hover hover:text-ice ${isActive ? "bg-surface text-accent" : "text-text-secondary"}`
            }
            end
          >
            <Settings size={20} />
            <span>Settings</span>
          </NavLink>
        </div>
      </div>

      {IsOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="relative z-40 flex justify-between bg-obsidian text-ice md:hidden py-3 px-2">
        <button onClick={() => setIsOpen((prev) => !prev)}>
          {IsOpen ? <X /> : <Menu />}
        </button>
        <button className="flex">
          <Layers className="text-accent" />
          <span>TaskFlow</span>
        </button>
        <button>
          <User />
        </button>
        {IsOpen && (
          <div
            className={`absolute top-full left-0 right-0 z-40 bg-obsidian flex flex-col py-3`}
          >
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/"
              className="flex items-center gap-3 px-3 py-2 rounded-xl transition-colors duration-200"
              end
            >
              <LayoutDashboard size={15} />
              <span>Overview</span>
            </NavLink>
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/projects"
              className="flex items-center gap-3 px-3 py-2 rounded-xl transition-colors duration-200"
              end
            >
              <FolderKanban size={15} />
              <span>Project</span>
            </NavLink>
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/board"
              className="flex items-center gap-3 px-3 py-2 rounded-xl transition-colors duration-200"
              end
            >
              <Columns3 size={15} />
              <span>Board</span>
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
}

export default Sidebar;
