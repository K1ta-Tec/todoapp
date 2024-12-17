export function Header(props){
    const {todos} = props
    const todosLength = todos.length
    const isTasksPLural = todos.length != 1

    const taskorTasks = isTasksPLural ? 'tasks' : 'task'
    return(
        <header>
            <h1 className="text-gradient">You have {todosLength} {taskorTasks} Open.</h1>
        </header>
    )
}