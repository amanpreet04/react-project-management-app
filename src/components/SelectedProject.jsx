export default function SelectedProject({ project }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString();
  return (
    <div>
      <header>
        <div>
          <h1>{project.title}</h1>
          <button>Delete</button>
        </div>
        <p>{formattedDate}</p>
        <p>{project.description}</p>
      </header>
      TASKS
    </div>
  );
}
