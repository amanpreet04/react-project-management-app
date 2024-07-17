import { useState } from "react";
import NewProject from "./components/NewProject";
import SideBar from "./components/SideBar";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((previousState) => {
      return {
        ...previousState,
        selectedProjectId: null,
      };
    });
  }

  function handleSelectedProject(id) {
    setProjectsState((previousState) => {
      return {
        ...previousState,
        selectedProjectId: id,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((previousState) => {
      return {
        ...previousState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(project) {
    const newProject = {
      ...project,
      id: Math.random(),
    };

    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleDeleteProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== id),
      };
    });
  }
  const selectedProjectId = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProjectId}
      onDelete={handleDeleteProject}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject toAdd={handleAddProject} toCancel={handleCancelAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        onStartAddProject={handleStartAddProject}
        projectsState={projectsState}
        onSelectProject={handleSelectedProject}
      />
      {content}
    </main>
  );
}

export default App;
