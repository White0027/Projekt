import { useDispatch } from "react-redux"
import { CreateAsyncActionFromQuery } from "../Queries"
import { useEffect, useState } from "react"

const MeQuery = `{
    result: me {
      __typename
      id
      name
      surname
      fullname
      email
      roles {
        group {
          id
          name
        }
        roletype {
          id
          name
        }
      }
    }
  }`

const MeAsyncAction = CreateAsyncActionFromQuery(MeQuery)

export const LogButton = ({loginURL='/oauth/login2?redirect_uri=/', logoutURL='/oauth/logout'}) => {
    const dispatch = useDispatch()
    const [me, setMe] = useState(null)
    useEffect(() => {
        // if (me) {
        //     return
        // }
        const fetchMe = async () => {
            const jsondata = await dispatch(MeAsyncAction({}))
            const meFresh = jsondata?.data?.result
            if (meFresh) {
                setMe(meFresh)
            }
        }
        fetchMe()
    }, [dispatch, setMe])
    if (me) {
        return (   
            <div className="navbar-nav text-end m-0 p-0">
                <a className="nav-link" href={logoutURL}>{me?.fullname}</a>
            </div>
        )
    } else {
        return (
            <div className="navbar-nav text-end m-0 p-0">
                <a className="nav-link" href={loginURL}>Login</a>
            </div>
        )
    }
}