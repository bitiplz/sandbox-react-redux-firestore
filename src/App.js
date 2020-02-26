import React from 'react'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

import CaseListView from './components/CaseList'

const App = () => (
  <div>
    <AddTodo />
    <Footer />
    <VisibleTodoList />

    <CaseListView/>
  </div>
)

export default App
