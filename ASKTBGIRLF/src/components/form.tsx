import { useEffect, useState } from 'react';
import '../style/form.css';

type secFormProps = {
  hideElement: boolean;
  onSecFormFinished: (value: number) => void;
}

export default function SecurityForm({ hideElement, onSecFormFinished } : secFormProps) {

  const [ nextForm, setNextForm ] = useState<number>(0);

  const activeNextForm = () => {
    setNextForm((prev) => prev + 1);
  }

  useEffect(() => {
    onSecFormFinished(nextForm);
  }, [ nextForm, setNextForm ]);

  return(
    <>
      <div style={hideElement? {} : {opacity: 0, display: "none"}} className={ hideElement? "" : "appearForm" }>
        <div className={'secFormInptTitleDiv ' + (nextForm == 0? 'activeSecForm' : '')}>
          <h2 className='secFormInptTitle'>Qual a Cor Preferida de Maria Eduarda Alves Barbosa?</h2>
          <div className='labelInptContainer'>
            <input type="radio" name="color" id="azulEscuro" />
            <label htmlFor="azulEscuro">Azul Escuro</label>
          </div>
          <div className='labelInptContainer'>
            <input type="radio" name="color" id="amareloCroquete" />
            <label htmlFor="amareloCroquete">Amarelo Croquete</label>
          </div>
          <div className='labelInptContainer'>
            <input type="radio" name="color" id="rosa" onChange={activeNextForm}/>
            <label htmlFor="rosa">Rosa</label>
          </div>
          <div className='labelInptContainer'>
            <input type="radio" name="color" id="vermelhorCarroPopular" />
            <label htmlFor="vermelhorCarroPopular">Vermelho Carro Popular</label>
          </div>
        </div>
        <div className={'secFormInptTitleDiv ' + (nextForm == 1? 'activeSecForm' : '')}>
          <h2 className='secFormInptTitle'>Qual a Flor Preferida de Maria Eduarda Alves Barbosa?</h2>
          <div className='labelInptContainer'>
            <input type="radio" name="flor" id="margarida" onChange={activeNextForm} />
            <label htmlFor="margarida">Margarida</label>
          </div>
          <div className='labelInptContainer'>
            <input type="radio" name="flor" id="bromélia" />
            <label htmlFor="bromélia">Bromélia</label>
          </div>
          <div className='labelInptContainer'>
            <input type="radio" name="flor" id="orqúidea" />
            <label htmlFor="orqúidea">Orqúidea</label>
          </div>
          <div className='labelInptContainer'>
            <input type="radio" name="flor" id="musgo" />
            <label htmlFor="musgo">Musgo</label>
          </div>
        </div>
        <div className={'secFormInptTitleDiv ' + (nextForm == 2? 'activeSecForm' : '')}>
          <h2 className='secFormInptTitle'>Qual a Música que Mais Marcou o Relacionamento?</h2>
          <div className='labelInptContainer'>
            <input type="radio" name="music" id="ipanema" />
            <label htmlFor="ipanema">Ipanema</label>
          </div>
          <div className='labelInptContainer'>
            <input type="radio" name="music" id="sambaInParis" onChange={activeNextForm} />
            <label htmlFor="sambaInParis">Samba in Paris</label>
          </div>
          <div className='labelInptContainer'>
            <input type="radio" name="music" id="seuJogo" />
            <label htmlFor="seuJogo">Seu Jogo</label>
          </div>
          <div className='labelInptContainer'>
            <input type="radio" name="music" id="solto" />
            <label htmlFor="solto">Solto</label>
          </div>
        </div>
        <div className={'secFormInptTitleDiv ' + (nextForm == 3? 'activeSecForm' : '')}>
          <h2 className='secFormInptTitle'>Qual o Restaurante do Primeiro Date?</h2>
          <div className='labelInptContainer'>
            <input type="radio" name="place" id="mercadoNovo" />
            <label htmlFor="mercadoNovo">Mercado Novo</label>
          </div>
          <div className='labelInptContainer'>
            <input type="radio" name="place" id="laicos" />
            <label htmlFor="laicos">Laicos</label>
          </div>
          <div className='labelInptContainer'>
            <input type="radio" name="place" id="lifeBox" />
            <label htmlFor="lifeBox">LifeBox</label>
          </div>
          <div className='labelInptContainer'>
            <input type="radio" name="place" id="tripFood" onChange={activeNextForm} />
            <label htmlFor="tripFood">Trip Food</label>
          </div>
        </div>
      </div>
    </>
  );
}