import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({data}) {
   
  return (
    <>
      <Head>
        <title>Events App</title>
        </Head>
      <header>
        <nav>
          <img/>
          <a href="/">Home</a>
          <a href="/Event">Events</a>
          <a href="/Aboutus">About Us</a>
        </nav>
      </header>
      <main className={styles.main}>
        {/* {data.map(ev => <a key={ev.id} href={`/events/Event/${ev.id}`}><img alt={ev.title} src= {ev.image}/><h2>{ev.title}</h2><p>{ev.description}</p></a>)} */}
        <div>
         <a href="/Event">
          <img/>
         <h2>Events in London</h2>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
         </a>
         <a href="">
          <img/>
         <h2>Events in Barcelona</h2>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
         </a>
         <a href="">
          <img/>
         <h2>Events in Franscisco</h2>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
         </a>
        </div>
      </main>
    </>
  )
}

// export async function getServerSideProps(){
//   const events_categories = await import(`/data/data.json`);
//   console.log(events_categories);
 

//   return{
//     props: {
//       data: events_categories,
//     }
//   }
// }