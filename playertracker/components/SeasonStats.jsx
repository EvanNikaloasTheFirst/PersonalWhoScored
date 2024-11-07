
import styles from "@/styles/SeasonStats.module.css"

export default function SeasonStats(){

    return(
        <div className={styles.recentPerformanceStats}>
        <h2>Season Stats hiiiii</h2>
          <ul>
            <li>
            <div className={styles.recentPerformanceStatsBlock}>
                <ul className={styles.statistics}>
                  <li>
                  <p>Minutes</p>
                  <p>430</p>
                    </li>
                </ul>
                </div>
            </li>
            <div className={styles.recentPerformanceStatsBlock}>

                <ul className={styles.statistics}>
                  <li>
                  <p>Games</p>
                  <p>23</p>
                    </li>
                </ul>
            </div>
            <div className={styles.recentPerformanceStatsBlock}>

                   <ul className={styles.statistics}>
                   <li>
                   <p>Avg.rating</p>
                  <p>8.42</p>
                  </li>
                </ul>
                </div>
          </ul>

      
      </div>
    )
}