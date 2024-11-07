import styles from "@/styles/PerformanceBlock.module.css";


export default function PerformanceBlock({opponent, competition, minutesPlayed, conditionAfter, matchRating}){


  function defineMatchRatingColour (matchRating) {
    if (matchRating > 0 &&  matchRating <= 5){
      return {backgroundColor: "#ff0000"}
    }else if (matchRating > 5 &&  matchRating <= 6.5){
      return {backgroundColor: "#ffa500"}
    }else{
      return {backgroundColor: "#008000"}
    }

  }




    return(
        <div className={styles.recentPerformanceBlock}>

        <ul>
          <li>
          <div className={styles.performanceBlockDetail}>

          <p>Opponent: {opponent}</p>
          <p>Cometition: {competition} </p>
          <p>Minutes: {minutesPlayed} Minutes</p>
          <p>Condition: {conditionAfter}</p>
          <button className={styles.moreBtn}>More</button>
        </div>
          </li>

          <li>

            {/* // import manual colour change */}
          <div className={styles.performanceBlockRating} >
          <p className={styles.rating}>{matchRating}</p>
        </div>
      
          </li>
        </ul>
      


    </div>
    )
}