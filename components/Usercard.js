import React from 'react'
import styles from './Usercard.module.css'
import Link from 'next/link'
const Usercard = (props) => {
    // console.log(props.userdata.name)
    let curruser = props.userdata
    let curraddress = curruser.address
    return (
        <div className={styles.usercard}>
            <h1 className={`${styles.h1tag} ${styles.redcolor}`}><span>Username:</span> @{curruser.username}</h1>

            <div>
                <h2 className={styles.h2tag}><span>Name: </span> {curruser.name}</h2>

                <h2 className={styles.h2tag} ><span>Email: </span>{curruser.email}</h2>

                <h2 className={styles.h2tag} >
                    <span>Address: </span>{curraddress.street} {curraddress.suite} {curraddress.city} {curraddress.zipcode}</h2>

                <h3 className={styles.h3tag} ><span>Contact: </span>{curruser.phone}</h3>
            </div>

            <p className={styles.ptag}>{curruser.website}</p>
            <Link href={`/user/${curruser.id}`}>
                <button className={styles.btn} > Show more &gt;</button>
            </Link>
        </div>
    )
}

export default Usercard