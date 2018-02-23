import React, {Component} from 'react';
import './TodoList.css';
import axios from 'axios';
import moment from 'moment';

class TodoList extends Component {

    url = "http://localhost:7777/api/todos";

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
        axios.get(this.url).then((res) => {
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
                                        {todo.completedAt && (<small> at {moment(todo.completeAt).format('MMM d, YYYY, h:mm:ss A')}</small>)}
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