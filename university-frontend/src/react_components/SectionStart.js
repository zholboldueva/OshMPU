
import React from 'react';
import SectionBubble from './SectionBubble'
import '../styles/base.css';
import '../styles/base-be.css';
import '../styles/reset.css';
import '../styles/awesome.css';
import '../styles/grid.css';

//import Slider from './react_components/Slider';


const SectionStart = () => {
  
  const captions=['Name2','Name1','Name3','Name4','Name5','Name6'];
 
  return (
    <section id="content-one" class="pb-2">
     <div class="content-container" role="main"> 
        <div class="row font-size-base mt-5 mb-5"> 
            <div class="col-md-3"> 
                <h1 id="h20273">Studieren<br/>für die Praxis</h1>
                 </div>
            <div class="col-md-9"> 
                <div class="ce-bodytext"> 
                    <p>Graue Theorie – nicht mit uns. Wir sind eine der drittmittelstärksten Hochschulen Deutschlands! Praktika, Laborarbeit und ein starker Anwendungsbezug sind in unseren Studiengängen selbstverständlich. Wir bieten ein gut strukturiertes Studium, das dich in überschaubarer Zeit optimal auf den Beruf vorbereitet. Schau dich um: Mehr als 50 Studiengänge in verschiedenen Themenbereichen warten auf dich!&nbsp;</p>
                </div>
            </div>
        </div>
        <SectionBubble />
    </div>
    </section>
   
  );
};

export default SectionStart;



