import React, {Component} from 'react';
import {connect, Provider} from 'react-redux'
import {addTodo, deleteItem, updateDeveloperField, updateProjectField} from './actions/actions'
import store from './store/store'
import {UPDATE_DEVELOPER_FIELD} from "./actions/types/types";

console.log(store.getState());
const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
});

store.dispatch(addTodo('by milk for chana'));

const InputDeveloper = connect((state) => ({developer: state.inputFields.developer}), (dispatch) => ({dispatch}))(
class InputDeveloper extends Component {

    render() {
        return (
            <div>
                <label>developer: <input value={this.props.developer}
                                         onChange={(e) => this.props.dispatch(updateDeveloperField(e.target.value))}/></label>
            </div>
        );
    }

});

const InputProject = connect((state) => ({project: state.inputFields.project}), (dispatch) => ({dispatch}))(
class InputProject extends Component {

    render() {
        return (
            <div>
                <label>project: <input value={this.props.project}
                                       onChange={(e) => this.props.dispatch(updateProjectField(e.target.value))}/></label>
            </div>
        );
    }

});

const AddToDoItem = connect((state) => ({}), (dispatch) => ({dispatch}))(
    class AddToDoItem extends Component {

        render() {
            return (
                <div className={'add-todo-item-component'}>
{/*
                    <label>developer: <input value={this.props.inputFields.developer}
                                             onChange={(e) => this.props.dispatch(updateDeveloperField(e.target.value))}/></label>
                    <label>project: <input value={this.props.inputFields.project}
                                             onChange={(e) => this.props.dispatch(updateProjectField(e.target.value))}/></label>
*/}
                    <InputDeveloper/>
                    <InputProject/>
                    <button onClick={()=>this.props.dispatch(addTodo())}>ADD TODO ITEM</button>
                </div>
            );
        }

    });

const ToDoItem = connect((state)=>({}),(dispatch)=>({dispatch}))(
class ToDoItem extends Component{

    render() {
        return (
            <div>
                developer: {this.props.item.developer}, project: {this.props.item.project}.<button onClick={()=>this.props.dispatch(deleteItem(this.props.index))}>X</button>
            </div>
        );
    }

});

const ToDoList = connect((state)=>({todos:state.todos}),(dispatch)=> ({dispatch}))(
class ToDoList extends Component {

    render() {
        return (
            <div>
                {this.props.todos.map((item, index)=><ToDoItem item={item} key={index} index={index}/>)}
            </div>
        );
    }

});

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <AddToDoItem/>
                    <ToDoList/>
                </div>
            </Provider>
        );
    }
}


export default App;
