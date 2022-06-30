import React from 'react'
import Usercard from '../../components/usercard';
export const getStaticPaths = async () => {

    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json();

    const paths = data.map((item) => {
        return {
            params: { userid: item.id.toString() },

        }
    })

    return {
        paths,
        fallback: true
    }
}


export const getStaticProps = async (context) => {
    const currid = context.params.userid;

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${currid}`)
    const data = await res.json();

    return {
        props: { data },
    }
}



const myuser = ({ data }) => {
    return (
        <div>
            <Usercard userdata={data}></Usercard>
        </div>
    )
}
export default myuser