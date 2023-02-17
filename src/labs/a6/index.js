import { Link } from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoItem from "./todo/todo-item";
import TodoList from "./todo/todo-list";

function Assignment6() {
    const color = 'blue';
    const dangerous = true;

    return (
        <div>
            <h1>Assignment 6</h1>
            <TodoList />
            <ConditionalOutput />
            <Styles />
            <Classes />

        </div>
    );
}
export default Assignment6;