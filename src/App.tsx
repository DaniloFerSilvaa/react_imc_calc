import { useState } from 'react'
import styles from './App.module.css'
import poweredImage from './assets/powered.png'

import { levels, calculateImc } from './helpers/imc'

const App = () => {
     const [ heighField, setHeighField ] = useState<number>(0);
     const [ weightField, setWeightField ] = useState<number>(0);

     const handleCalculateButton = () => {
          if (heighField && weightField) {

          }else {
               alert("Digite todos os campos.")
          }
     } 

     return (
    <div className={ styles.main }>
      <header>
        <div className={styles.headerContainer}>
    <img src={poweredImage} alt="" width={150}/>
        </div>
      </header>
      <div className={styles.container}>
          <div className={styles.leftSide}>
               <h1>Calcule seu IMC</h1>
               <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

               <input 
               type="number"  
               placeholder='Digite a sua altura. EX: 1.5 (em metros)'
               value={ heighField > 0 ? heighField : '' } 
               onChange={e => setHeighField(parseFloat(e.target.value))}
               />
               <input 
               type="number"  
               placeholder='Digite a seu peso. EX: 65 (em metros)'
               value={ weightField > 0 ? weightField : '' } 
               onChange={e => setWeightField(parseFloat(e.target.value))}
               />
               <button onClick={handleCalculateButton}>Calcular</button>
          </div>
          <div className={styles.rightSide}>
               ...
          </div>
      </div>
    </div>
  )
}

export default App