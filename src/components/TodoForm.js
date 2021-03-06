import React from 'react'
import {connect} from 'react-redux'
import {updateCurrent} from '../reducers/todo';

const TodoForm = (props) => {
  console.log('Rendering Form')
  const {currentTodo, changeCurrent} = props
  const handleInputChange = (e) => {
    const val = e.target.value
    changeCurrent(val)
  }
  return (
    <form>
      <input type="text"
        onChange={handleInputChange}
        value={currentTodo}/>
    </form>
  )
}

export default connect(
  (state) => ({currentTodo: state.currentTodo}),
  {updateCurrent}
)(TodoForm)
