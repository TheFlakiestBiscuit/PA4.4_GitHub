import React from 'react';
import Counter from './components/Counter'; // uncommented to use the Counter component, rendered inside TodoList.
// import TextInput from './components/TextInput'; // import commented out due to being unused.
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/*<TextInput /> */}
        <TodoList />
    </div>
  );
}

export default App;