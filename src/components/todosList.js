import App from "../App";
import todosItem from "../components/todosItem";

const todosList = (props) => {
  const { todos } = props
  return (
    <div>
      <h2>To Dos</h2>

      {/* Here we map over the array */}
      {props.todos.map((item, idx) => <todosItem todos={item} key={idx} /> )}
    </div>
  );
};

export default todosList;