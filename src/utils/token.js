import { jwtDecode } from "jwt-decode"

export const getToken = () =>
{
    try
    {
        return jwtDecode(localStorage.getItem("access_token"))
    }
    catch(error)
    {
        console.log(error)
    }
}

export const romoveToken = () =>
{
    localStorage.removeItem("access_token")
}