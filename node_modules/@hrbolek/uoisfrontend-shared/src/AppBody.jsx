import { useState } from 'react';
import { useFreshItem } from './Hooks'
import { CreateAsyncActionFromQuery } from './Queries'
import { CreateAsyncQueryValidator } from './Store';
import { useDispatch, useSelector } from 'react-redux';
import { TableHeaderWithFilters, where2filter } from './Components/Filters';

// realizovany dotaz
const UserPageQuery = `query ($skip: Int, $limit: Int, $where: UserInputWhereFilter, $orderby: String) {
    result: userPage(skip: $skip, limit: $limit, where: $where, orderby: $orderby) {
      __typename
      id
      name
      surname
      fullname
      email
    }
  }`

//pokud bezime "mimo deployment", musime se autorizovat, token lze vzit z cookies v systsemu a pouzit zde
const token = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiQmVhcmVyIiwiYWNjZXNzX3Rva2VuIjoiQUNDVC02MUVseG5oVHlhRVN4RkFna2lvb3AwdjF5WG96T0xUSiIsImV4cGlyZXNfaW4iOjM2MDAsInJlZnJlc2hfdG9rZW4iOiJSRUZULU5SQmRDekdwb09SMENIMWo3ZVBGdFRRWFVQcEtmdmxoIiwidXNlcl9pZCI6IjJkOWRjNWNhLWE0YTItMTFlZC1iOWRmLTAyNDJhYzEyMDAwMyJ9.K0UJ4RaHUrgl-HewYTcEBRHZ677ieGXEPbnfNn6gbOX-5o6A_u19mtr7IjuiX_DNXdDG4KdiC3mZ7GkOlMgQvO2N0lHlSFd2f8I-zI_UgQYfEYR33vGuSQC1KGv_hrTO2Cn7wUZen33Mz6DvcPrUPAaw86izf4pliKUX28lhRnIaRKIUWmVUAKumJxBVJZzDtEaG68rXT6PGkJ4zzN0eqCOgIfq2vDXRpNBlvFQ8rok2MRLBnV2H_IlKskpebiRck8qDVdJ81__IvBdNo7e3dZyvlSYBemPn96j_58WE--99_4v6BqfdBdkLDea7yLxz2IMCeygVDo2h4wyYwWmBKQ`
const headers = {authorization: `Bearer ${token}`}

// ze stringu specifikujiciho query vytvori asynchronni action (dispatchable action)
const UserPageQueryAsyncAction = CreateAsyncActionFromQuery(UserPageQuery, {headers})

// validator je prostredek pro osetreni chyb, je konstruovan tak, aby se nemusel cely vytvaret pri kazdem renderingu
const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst uživatele", success: "Načtení uživatelů se povedlo"})



const UsersTableHeader = ({onChangeFilter}) => {
    // const [where_, setWhere] = useState({})
    // const changeWhere = (attributename, value) => {

    // }
    const [filters, setFilters] = useState({})
    // const _onChangeFilter = (name) => (filter) => {
    //     const newfilter = {...filters}
    //     // console.log("filter", filter)
    //     newfilter[name] = filter
    //     setFilters(newfilter)
    //     // console.log("newfilter", newfilter)
        
    //     const _and = []
    //     for(const attname in newfilter) {
    //         const subfilter = {}
    //         const subfilterValue = newfilter[attname]
    //         if (subfilterValue) {
    //             subfilter[attname] = subfilterValue[attname]
    //             _and.push(subfilter)
    //         }
    //     }
    //     const whereFilter = {_and}
    //     // console.log("whereFilter", whereFilter)
    //     if (onChangeFilter) {
    //         if (_and.length === 0) {
    //             onChangeFilter(null)
    //         } else {
    //             onChangeFilter(whereFilter)
    //         }
            
    //     }
    // }

    const onChangeFilter_ = (filter) => {
        console.log("UsersTableHeader.onFilterChange.filter", filter)
        // const ff=where2filter(filter)
        // console.log("UsersTableHeader.onFilterChange.filter", ff)
        onChangeFilter(filter)
    }

    return (
        <thead>
            {/* <tr>
                <th>#</th>
                <th>Jméno <StringFilterButton onChangeFilter={onChF} /> </th>
                <th>Příjmení <StringFilterButton onChangeFilter={onChF} /> </th>
                <th>Email</th>
            </tr> */}
            {/* <tr>
                <th>#</th>
                <th><TextFilter opName={"_ilike"} attributeName={"name"} onChangeFilter={_onChangeFilter("name")} /></th>
                <th><TextFilter opName={"_ilike"} attributeName={"surname"} onChangeFilter={_onChangeFilter("surname")} /></th>
                <th><TextFilter opName={"_ilike"} attributeName={"email"} onChangeFilter={_onChangeFilter("email")} /></th>
            </tr> */}
            <TableHeaderWithFilters 
                columns={[
                    {label: "#", property: null, type: null},
                    {label: "Jméno", property: "name", type: "str"},
                    {label: "Příjmení", property: "surname", type: "str"},
                    {label: "Email", property: "email", type: "str"}
                ]} 
                filter={{_and: [{name: {_eq: "John"}}, {surname: {_gt: "A"}}, {surname: {_lt: "Z"}}]}}
                onFilterChange={onChangeFilter_}
            />
        </thead>
    )
}

const UserTableRow = ({user, index}) => {
    return (
        <tr>
            <td>{index}</td>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>{user.email}</td>
        </tr>
    )
}

// const where = {
//     _or: [
//       {name: {_like: "%o%"}}
//     ]
//   }
// const filterfunc = where2filter(where)
const validator_ = CreateAsyncQueryValidator({error: "Něco se nepovedlo.", success: "Akce proběhla v pořádku."})
const GQLPageReader = ({limit=10, asyncPageQuery, children, validator=validator_}) => {
    const [skip, setSkip] = useState(0)
    const [where, setWhere] = useState(null)
    const [showButton, setShowButton] = useState(true)

    const dispatch = useDispatch()
    const [onResolve, onReject] = validator(useDispatch())

    const onChangeFilter = (newWhere) => {
        // console.log("onChangeFilter", newWhere)
        setWhere(() => newWhere)
        onReadmore(newWhere)       
        setShowButton(true)
        setSkip(0)
    }

    const onReadmore = (_where=where) => {
        setSkip(skip + limit)
        let result = null
        if (_where) {
            result = dispatch(UserPageQueryAsyncAction({skip: skip+limit, where: _where}))
        } else {
            result = dispatch(UserPageQueryAsyncAction({skip: skip+limit}))
        }
        
        result.then(onResolve, onReject)
        .then(json => {
            const response = json?.data?.result || []
            if (response.length == 0) {
                setShowButton(false)
            }
        }, error => {
            console.log("error", error)
        })
        
    }

    const filterfunc = where2filter(where)
    const filterdata = (dataarray) => dataarray.filter(filterfunc)
}

const UsersTable = ({users}) => {
    const [skip, setSkip] = useState(0)
    const [where, setWhere] = useState(null)

    const [showButton, setShowButton] = useState(true)
    const limit = 10
    const dispatch = useDispatch()
    const [onResolve, onReject] = validator(useDispatch())

    const onChangeFilter = (newWhere) => {
        console.log("UsersTable.onChangeFilter", newWhere)
        setWhere(() => newWhere)
        onReadmore(newWhere)       
        setShowButton(true)
        setSkip(0)
    }

    const onReadmore = (_where=where) => {
        setSkip(skip + limit)
        let result = null
        if (_where) {
            result = dispatch(UserPageQueryAsyncAction({skip: skip+limit, where: _where}))
        } else {
            result = dispatch(UserPageQueryAsyncAction({skip: skip+limit}))
        }
        
        result.then(onResolve, onReject)
        .then(json => {
            const response = json?.data?.result || []
            if (response.length == 0) {
                setShowButton(false)
            }
        }, error => {
            console.log("error", error)
        })
        
    }
    const onClickReadmore = () => {
        onReadmore(where)
    }

    const footer = !showButton?"": (
        <tfoot>
                <tr>
                    <th colSpan={5}> 
                        <button className='btn btn-outline-primary' onClick={onClickReadmore}>Načíst další</button>
                    </th>
                </tr>
            </tfoot>
    )
    // console.log("users", users)
    let _users = users
    if (where) {
        // console.log("users.where", where)
        _users = users.filter(where2filter(where))
    }
    // const _users = users
    // console.log("_users", _users)
    // console.log("filterfunc", filterfunc)
    return (
        <table className='table table-striped table-bordered'>
            <UsersTableHeader onChangeFilter={onChangeFilter} />
            <tbody>
                {_users.map(
                    (u, i) => <UserTableRow key={u.id} user={u} index={i} />
                )}
            </tbody>

            {footer}
        </table>
    )
}



// vlastni komponenta predstavujici stranku, v tomto pripade bez parametricka
export const AppBody = () => {
    // ziskame aktualizovana data ze serveru, pokud by se jednalo o jediny prvek (query by id), id by se uvedlo
    // protoze se jedna o "page", nebere se id v uvahu, proto "idonotcare"
    const [data_, thenable] = useFreshItem({id: "idontcare"}, UserPageQueryAsyncAction)
    // funkce, ktere se pouziji pro pripad uspesneho nacteni a pro pripad chybz
    const [onResolve, onReject] = validator(useDispatch())
    
    console.log("AppBody.render", thenable)
    // thenable je Promise, takze lze pouzit jeji metodu then; 
    // teto metode predame funkce pro zpracovani spravneho (uspesneho) a chyboveho cteni
    thenable.then(onResolve, onReject)

    // protoze cteme celou page, vybereme data primo ze store
    const items = useSelector(state => state.items)
    // identifikujeme ty polozky, jejichz typ je "UserGQLModel", pozor na ten je potreba se v dotazech ptat
    // pokud by byl dotaz na jediny prvek, bylo by mozne vzit z promenne "data_"
    const data = Object.values(items).filter(i => i?.__typename === "UserGQLModel")
    if (data) {
        return (
            <div>
                <UsersTable users={data} />
            </div>
        )
    } else {
        return (
          <div className='card'>{JSON.stringify(items)}<br />Loading ...</div>
        )
    }
}
