import { useLocation } from "react-router";
import { CalendarDays } from "lucide-react";

function Header() {
  const location = useLocation();
  const pathname = location.pathname;

  const pageTitle = {
    "/": "Overview",
    "/projects": "Projects",
    "/board": "Board",
  };

  const isProjectDetails = pathname.startsWith("/projects/");

  const title = isProjectDetails
    ? "Project Details"
    : pageTitle[pathname as keyof typeof pageTitle] || "Not Found";

  const date = new Date().toLocaleString("en-US", {
    dateStyle: "medium",
  });

  const greeting = new Date().getHours();

  const pageContext = {
    Overview: "Here's what's happening across your workspace today.",
    Projects:
      "Keep track of your projects, monitor progress, and stay on top of your goals.",
    Board:
      "Organize your tasks, manage priorities, and move your work forward.",
    "Project Details":
      "Everything you need to manage and track this project's progress.",
  };

  const pgContext = pageContext[title as keyof typeof pageContext] || "";

  return (
    <div className="w-full shrink-0 bg-canvas text-ice flex justify-center">
      <div className="mx-4 my-3 w-full rounded-2xl bg-obsidian px-5 py-4">
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-xs tracking-widest text-accent font-medium">
              YOUR WORKSPACE
            </p>

            <h1 className="mt-1 text-2xl md:text-3xl font-bold tracking-tight">
              {title}
            </h1>
          </div>

          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <CalendarDays size={16} className="text-accent" />
            <span>{date}</span>
            <span>•</span>
            <span>
              {greeting < 12
                ? "Good Morning"
                : greeting < 18
                  ? "Good Afternoon"
                  : "Good Evening"}
            </span>
          </div>

          <p className="text-sm text-text-secondary">{pgContext}</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
