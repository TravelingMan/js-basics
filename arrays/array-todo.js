// Prebuilt array because that's how we do things downtown
const todos = [{
  title: 'Walk the giraffe',
  completed: true
}, {
  title: 'Build a moat',
  completed: false
}, {
  title: 'Learn some JS',
  completed: true
}, {
  title: 'Investigate new lens',
  completed: false
}]

// Remove a todo object by text value
const deleteTodo = function (todos, todoTitle) {
  const index = todos.findIndex(function (todo) {
    return todo.title.toLowerCase() === todoTitle.toLowerCase()
  })
  if (index > -1) {
    todos.splice(index, 1)
  }
}

// Find a todo object via text value (as compared to title property) 
const findTodo = function (todos, todoTitle) {
  return todos.find(function (todo) {
    return todo.title.toLowerCase() === todoTitle.toLowerCase()
  })
}

// Get several todos by using a filter
const getMatchingTodos = function (todos, query) {
  return todos.filter(function (todo) {
    return todo.title.toLowerCase().includes(query.toLowerCase())
  })
}

// Get a filtered list containing all todos that aren't finished
const getUnfinishedTodos = function (todos) {
  return todos.filter(function (todo) {
    return !todo.completed
  })
}

// Log the todos array
const logTodos = function () {
  todos.forEach(function (todo) {
    let complete = todo.completed ? "[X]" : "[ ]"
    console.log(`  - ${complete} ${todo.title}`)
  })
}

// <-- Demonstrations below! -->
console.log("Initial array state:")
logTodos()

// Find all todos with specific text 'at' in the title
console.log("\nFinding 'at' in the titles:")
console.log(getMatchingTodos(todos, 'at'))

// Find and log text in the array of objects
console.log("\nFinding exact match to 'Build a moat'")
const todo = findTodo(todos, 'Build a moat')
console.log(todo.title + " found.")

// Find and remove an object via text in the title property
console.log("\nRemove an object from the array via title match")
deleteTodo(todos, 'build a moat')
console.log("Removed 'build a moat'")

// Get all unfinished todos
console.log("\nAll unfinished todos:")
console.log(getUnfinishedTodos(todos))

// Final state
console.log("\nFinal array contents")
logTodos()