import { useContext } from "react"
import { createContext } from "react"
import {FC} from "react"

const UIContext = createContext<{[key:string]:string}>({
    uiState:"defaultState"
})

export const UIProvider:FC = ({children}) => {

    return (
        <UIContext.Provider value={{uiState:"state"}}>
        {children}
        </UIContext.Provider>
    )
}

export const useUI = () => {
    const context = useContext(UIContext)
    return context
}