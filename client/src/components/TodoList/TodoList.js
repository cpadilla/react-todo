import React, {Component} from 'react';
import './TodoList.css';
import '../../assets/css/default.min.css'
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

        this.handleChange = this.setTitle.bind(this);
        // this.handleSubmit = this.addNewTodo.bind(this);
    }

    clearTodos(e) {
        this.setState({todos: []}, () => {
            this.saveTodos();
        })
    }

    setTitle(e) {
        this.setState({title: e.target.value});
    }

    setCompletion(idx, e) {
        let isChecked = e.target.checked;
        let todo = this.state.todos[idx];
        // console.log(todo);
        todo.isCompleted = isChecked;
        if (isChecked) {
            todo.completedAt = new Date();
        } else {
            todo.completedAt = null;
        }

        this.saveTodos();
    }

    saveTodos() {
        console.log(this.state.todos);
        axios.post(this.url, {todos: this.state.todos}).then((res) => {
            this.setState({todos: res.data});
        }).catch(function(error) {
            console.log(error);
        });
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
            <div>
                <h1>Chris's React To-Do List</h1>
                <div className="TodoListContainer">
                    <ul className="TodoList">
                        {this.state.todos.map((todo, i) => {
                            return (
                                <li key={i}>
                                    <div className="TodoListItem">
                                        <label>
                                            <input onChange={this.setCompletion.bind(this, i)} type="checkbox" checked={todo.isCompleted} />
                                            {todo.title}
                                            {todo.completedAt && (<small> at {moment(todo.completedAt).format('MMM d, YYYY, h:mm:ss A')}</small>)}
                                        </label>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                    <form>
                        <input name="title"
                                id="title"
                                value={this.state.title}
                                onChange={this.handleChange}/>
                        <button className="Btn"
                                type="submit"
                                onClick={this.handleSubmit}> 
                            Add New Todo
                        </button>
                    </form>

                    <button
                        className="Btn"
                        onClick={this.clearTodos.bind(this)}>
                        Clear Todos
                    </button>
                </div>
            </div>
        )
    }
}

export default TodoList;