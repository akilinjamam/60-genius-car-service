import { useEffect, useState } from "react"
import axios from 'axios';

const useToken = user => {
    const [token, setToken] = useState('')
    useEffect(() => {

        const getToken = async () => {
            console.log(user);
            const email = user?.user?.email;
            if (email) {
                const { data } = await axios.post('https://fierce-plains-73609.herokuapp.com/login', { email })
                setToken(data.accesToken)
                console.log(data)
                localStorage.setItem('accessToken', data.accesToken);
            }
        }

        getToken()

    }, [user]);

    return [token]
}

export default useToken