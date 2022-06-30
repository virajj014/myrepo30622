import Usercard from "../components/Usercard";
import MyNavbar from "../components/MyNavbar";
export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json();

    return {
        props: { data }
    }
}


const alluserdata = ({ data }) => {
    return (
        <div>
            <MyNavbar />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {
                    data.slice(0).map((item) => {
                        return <div key={item.id}>
                            <Usercard userdata={item}></Usercard>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default alluserdata