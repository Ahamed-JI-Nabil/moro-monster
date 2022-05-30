import { useEffect, useState } from "react"

const useAllUsers = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://young-harbor-42670.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return [users, setUsers]
}

export default useAllUsers