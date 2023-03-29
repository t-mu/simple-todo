import { TodoItem } from "./TodoItem"
import { render, screen, waitForElementToBeRemoved } from "@testing-library/react"


const mockRemove = jest.fn()

describe('ToDoItem', ()=>{
    test('renders Title Correctly', ()=>{
        render(<TodoItem title = {'mitä vaan'} id = {'joku'} onRemove = { mockRemove }> </TodoItem>)
        const title = screen.queryByTestId("todo-title")

        expect(title).toHaveTextContent('mitä vaan')
    })
})

// describe('ToDoItem', ()=>{
//     test('handles remove correctly', ()=>{
//         render(<TodoItem onRemove = {'removed'} id = {'joku'} waitForElementToBeRemoved = { mockRemove }> </TodoItem>)
//         const onRemove = screen.queryByTestId("remove-todo-btn")

//         expect(title).
    
//     })
// })