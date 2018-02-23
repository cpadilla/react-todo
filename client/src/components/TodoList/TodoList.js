import React, {Component} from 'react';
import './TodoList.css';
import axios from 'axios';

class TodoList extends Component {

    url = "http://localhost:7777/api/todos"

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            todos: []
        };

        // this.handleChange = this.setTitle.bind(this);
        // this.handleSubmit = this.addNewTodo.bind(this);
    }

    componentDidMount() {
        console.log("We are mounted");
        axios.get(this.url).then((res) => {
            console.log(res);
            this.setState({todos: res.data});
        }).catch(function (error) {
            console.log(error);
        })
    }

    render() {
        return (
            <div className="TodoList">
                <ul className="TodoList">
                    {this.state.todos.map((todo, i) => {
                        return (
                            <li key={i}>
                                <div className="TodoListItem">
                                    <label>
                                        <input />
                                        {todo.title}
                                    </label>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default TodoList;