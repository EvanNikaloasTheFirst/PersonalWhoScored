import Head from "next/head";
import styles from "@/styles/Home.module.css";
import addEventStyles from "@/styles/addEvent.module.css";
import PerformanceBlock from "../../components/PerformanceBlock";
import Navbar from "../../components/Navbar";
import SeasonStats from "../../components/SeasonStats";
import { useState } from 'react';
import CreateMatchPane from '../../components/CreateMatchPane';

const attributes = ["1 V 1 Defending", "Ariel Duels", "Communication", "Ariel Duels",
  "Goal(s)", "Assist(s)", "1 V 1 Attacking", "Progressive passing", "Add+"
]



export default function Home() {

  const [createMatchPane, setShowCreateMatchPane] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  
  function showMatchPane(){
    setShowCreateMatchPane(true);
    setIsBlurred(true);

  }

  const blurredBackground = {
    filter: 'blur(2px)'
  };
  


  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <Navbar/>

        <div className={styles.container} >
        <div className={styles.addEvent} onClick={showMatchPane}><p>Add Match Review</p></div>
         {createMatchPane && <CreateMatchPane 
         onClose={() => {
          setShowCreateMatchPane(false);
          setIsBlurred(false);
         }}
        />}

          <div className={styles.subContainer} style={isBlurred ? blurredBackground : {}}>
            <ul>
              <li>
                <div className={styles.containerLeft}>
                  <h2>Recent Performances</h2>
                  <ul>
                    <li><PerformanceBlock 
                    opponent={"Raynes Park Vale"}
                    matchRating={9.0}
                    competition={"League"}
                    minutesPlayed={90}
                    conditionAfter={"Good"}/>
                    </li>
                    <li><PerformanceBlock 
                    opponent={"Raynes Park Vale"}
                    matchRating={9.0}
                    competition={"League"}
                    minutesPlayed={90}
                    conditionAfter={"Good"}/>
                    </li>
                    <li><PerformanceBlock 
                    opponent={"Raynes Park Vale"}
                    matchRating={9.0}
                    competition={"League"}
                    minutesPlayed={90}
                    conditionAfter={"Good"}/>
                    </li>

                  </ul>
                </div>  
              </li>
              <li>
                <div className={styles.containerCenter}>
                  Center block
                  </div>
                </li>
              <li>
              <SeasonStats/>





             
              </li>
            </ul>
          </div>

         
        </div>
      </div>
    </>
  );
}
