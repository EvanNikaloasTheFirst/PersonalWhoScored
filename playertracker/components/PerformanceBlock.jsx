import styles from "@/styles/PerformanceBlock.module.css";


export default function PerformanceBlock(){



    return(
        <div className={styles.recentPerformanceBlock}>

        <ul>
          <li>
          <div className={styles.performanceBlockDetail}>

          <p>Opponent: Raynes Park</p>
          <p>Cometition: League </p>
          <p>Minutes: 90 Minutes</p>
          <p>Condition: Good</p>
          <button className={styles.moreBtn}>More</button>
        </div>
          </li>

          <li>
          <div className={styles.performanceBlockRating}>
          <p className={styles.rating}>8.2</p>
        </div>
      
          </li>
        </ul>
      


    </div>
    )
}