export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="todo-item">
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>❌</button>
    </li>
  );
}
