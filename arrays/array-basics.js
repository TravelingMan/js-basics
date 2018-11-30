const todos = ['Do laundry', 'Eat lunch', 'Call mom', 'Exercise', 'Get presents']

const listTodos = function () {
  todos.forEach((item, index) => {
    console.log(`  - ${index + 1}.  ${item}`)
  })  
}

// Display the initial content of the array
console.log(`You have ${todos.length} tasks on your list.\n`)
listTodos()

console.log('\n Changing list \n')

// Delete the 3rd item
todos.splice(2, 1)

// Add a new item
todos.push('Walk the giraffe')

// Remove the first item
todos.shift()

// Result of array methods
listTodos()

// Index search
console.log("Index of 'Walking the giraffe': " + todos.indexOf('Walk the giraffe'))
