import React from 'react';
// import Counter from './components/Counter'; // import commented out due to being unused.
// import TextInput from './components/TextInput'; // import commented out due to being unused.
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/*<TextInput /> */}
        <p>Todo list </p>
        <TodoList />
    </div>
  );
}

export default App;