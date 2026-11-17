import { useLocation } from "react-router";
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
    : pageTitle[pathname as keyof typeof pageTitle];
  return (
    <>
      <div className="h-20 md:h-27 shrink-0 bg-canvas w-full text-ice flex justify-center">
        <div className="mx-4 my-5 w-full max-w-[calc(100%-2rem)] rounded-2xl bg-obsidian">
          good day
        </div>
      </div>
    </>
  );
}

export default Header;
