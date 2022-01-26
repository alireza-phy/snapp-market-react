
import styles from '../styles/Home.module.css'
import {useEffect} from "react";


export default function Home() {

  useEffect(()=>{
    fetch("/api/products")
        .then(res=>res.json())
        .then(data=>console.log(data.products))
  } ,[])

  return (
    <div className={styles.container}>
      hello world!
    </div>
  )
}
