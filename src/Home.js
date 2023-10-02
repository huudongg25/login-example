import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BaseAxios from './api/axiosClient'

const Home = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        BaseAxios.get('/api/v1/user/').then((res) => {
            console.log(res);
            setData(res.data)
        }).catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h1>Welcom to home page</h1>
            <Link to="/">Đăng xuất</Link>

            <div>
                {data.map((item)=>{
                    return(
                        <div key={item}>
                            <p>username: <span>{item.userName}</span></p>
                            <p>fullname: <span>{item.fullName}</span></p>
                            <p>role: <span>{item.role}</span></p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home