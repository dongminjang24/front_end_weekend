import { createContext, useContext, useReducer } from "react"

const initialState = [
    {id:1, name:"김성용"},
    {id:2, name:"오현우"},
    {id:3, name:"장동민"},
    {id:4, name:"노승현"},
]

export const useUserStore = ()=> useContext(UserStore)

const UserStore = createContext()

const userReducer = (state, action) => {
    switch(action.type) {
        case 'ADD':
            action.payload.preventDefault()
            const newUser = {id: Math.floor(Math.random()*100000000), name: action.payload.target.user.value}
            return [...state, newUser]
        case 'DELETE':
            return state.filter(user => user.id !== action.payload)
        default:
            return state;
    }
}

const UserStoreProvider = ({children}) => {
    const [user, dispatch] = useReducer(userReducer, initialState)

    return (
        <UserStore.Provider value={[user, dispatch]}>
            {children}
        </UserStore.Provider>
    )
}

export default UserStoreProvider
