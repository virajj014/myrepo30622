import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import usercard from '../components/usercard'
import MyNavbar from '../components/MyNavbar'
import Carousel from 'react-bootstrap/Carousel';
import bannerimg from '../assets/images/banner.png'

export default function Home({ data }) {
  return (
    <>
      <MyNavbar />
      <h1>This is home page</h1>
    </>
  )
}
