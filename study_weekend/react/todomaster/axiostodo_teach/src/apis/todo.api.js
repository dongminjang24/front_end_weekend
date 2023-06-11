const { axiosInstance } = require("./core")
const PATH = '/todo'

const TodoApi = {
    getTodo(){
        return axiosInstance.get(PATH)
    },

    addTodo(content, title){
        return axiosInstance.post(PATH, {content, title})
    },

    updatTodo(id, { content, state }){
        return axiosInstance.put(PATH + `/${id}`, {content, state})
    },

    deleteTodo(id){
        return axiosInstance.delete(PATH + `/${id}`)
    }
}
export default TodoApi