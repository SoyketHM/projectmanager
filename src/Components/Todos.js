import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
    render() {
        let todoItems;
        if(this.props.todos){
            todoItems = this.props.todos.map(todo => {
                // console.log(todo);
                return (
                    <TodoItem key={todo.title} todo={todo} />
                );
            });
        }
        return (
            <div className="Todos">
                <h3>Todos Project</h3>
                {todoItems}
            </div>
        );
    }
}

// Projects.propTypes = {
//     projects: React.PropTypes.array,
//     onDelete: React.PropTypes.func
// }

export default Todos;
