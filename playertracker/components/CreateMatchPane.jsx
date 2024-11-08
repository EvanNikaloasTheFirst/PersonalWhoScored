import matchForm from '@/styles/addEvent.module.css';

export default function CreateMatchPane({onClose}){
  const attributes = ["1 V 1 Defending", "Ariel Duels", "Communication", "Ariel Duels",
    "Goal(s)", "Assist(s)", "1 V 1 Attacking", "Progressive passing", "Add+"
  ]



  const selectedAttribute = {
    backgroundColor: '#7AA1D1'
  };
  


  // const [fourPositiveAttributes, setFourPositiveAttributes] = useState([]);
  function onSubmit(ticketForm){
    if(formData.opponent === "" || formData.minutesPlayed === "" || formData.condition === ""){
      alert("Please fill in all fields")
    } else {
      const id = Date.now();
        localStorage.setItem(`ticketForm_${id}`, JSON.stringify(ticketForm));
    }
  }
    return(
        <div className={matchForm.addEventPane}>
        <h2>Match Review</h2>
        <form className={matchForm.addMatchBox}>
          <label className={matchForm.labels}>Opponent:</label>
          <input type="input" name = "opponent" className={matchForm.opponentBox}/>

          <div className={matchForm.minsAndConditionBox}>
            <div>
            <label className={matchForm.labels}>Minutes Played:</label>
            <input type="input" name="minutesPlayed" />
            </div>
          <div>

          <label className={matchForm.labels}>Condition:</label>
          <input type="input" name="condition"/>
        </div>
      </div>

      <label className={matchForm.labels}>How did you perfom?</label>
      <textarea className={matchForm.matchDescription}/>


<div className={matchForm.attributeContainer}>
  <label className={matchForm.labels}>Select 4 areas you 
    excelled in during the game</label>

<ul className={matchForm.attributeList}>
{(attributes).map((item, index) => (
<li key={index} onClick={() => showTicketWindowPane(item)}>
      <div className={matchForm.attributeBlock} onClick={() => handleAttributeClick(item)}>
        <p>{item}</p>
      </div>
       </li>
   ))}
</ul>

</div>
<div className={matchForm.submitContainer}>
<buttton className={matchForm.submitButton} onClick={() => onSubmit(formData)}>Submit</buttton>  
<buttton className={matchForm.closeButton} onClick={onClose}>Close</buttton>  
</div>


        </form>
      </div>
    )
}