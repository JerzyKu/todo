import React from 'react'
import TodoItem from './TodoItem'

class Todo extends React.Component {

    state = {
        elements: [
            { id: '1', isComplited: true, title: 'Zrobić Zakupy' },
            { id: '2', isComplited: false, title: 'Opłacic Domenę' }
        ],
        inputValue: ''
    }

    markCompleted(id) {
        const index = this.state.elements.findIndex( x => x.id === id)

        const newElements = this.state.elements
        newElements[index].isComplited = true
        this.setState({ elements: newElements}) 
    }

    addItem() {
        //dodawanie 
        let newItem = {
            id: Date.now(),
            isComplited: false,
            title: this.state.inputValue
        }
        this.setState({elements: [newItem, ...this.state.elements]})
        this.setState({inputValue: ""})
    }

    inputHandler(event){
        const newValue = event.target.value
        this.setState({inputValue: newValue})
    }

    render() {

        const elements = this.state.elements.map( e => {
            return (<TodoItem element={e} 
                markClicked={ this.markCompleted.bind(this)}
                />)
        })

        return(
            <div>
                <h1>Todo</h1>
                <input type='text' value={this.state.inputValue} onChange={this.inputHandler.bind(this)}/>
                <button onClick={this.addItem.bind(this)} >Add to list</button>
                {elements}
            </div>
        )
    }
}

export default Todo;