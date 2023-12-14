import React, { useState,useCallback  } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/base.css';
import '../styles/base-be.css';
import '../styles/reset.css';
import '../styles/awesome.css';


  const Section2 = () => {

    return(
<section id="content-two" class="mt-6 bgcolor-2">
    <div class="row">
        <div class="contentTwoLeft col-lg-4 align-self-stretch">
            <div id="c33375" class="ce-textpic ce-center ce-above">
                <div class="ce-gallery img-w100" data-ce-columns="1" data-ce-images="1">
                    <div class="row">
                        <div class="col-sm-12 mb-3 align-self-stretch">
                            <div class="ce-media"> <img width="1050"  src= '/photos/slide8.jpg' height="536" /> </div>
                        </div>
                    </div>
                </div>
                <div class="ce-bodytext"> </div>
            </div>
        </div>
        <div class="contentTwoRight col-lg-8 align-self-stretch">
            <div id="c33374" class="ce-textpic ce-right ce-intext">
                <div class="ce-bodytext">
                    <h3>Interesse an <br />einem Studium?</h3>
                    <div><ul class="list grid"><li class="col-1-2"><a href="studium/stu
                    te/studienberatung/" title="Studienberatung" class="icon-arrow-after">Studienberatung</a></li>
                    <li class="col-1-2"><a href="studium/studieninteressenten/studienangebot/" title="Studienangebot" class="icon-arrow-after">Studienangebot</a>
                    </li><li class="col-1-2"><a href="studium/studieninteressenten/orientierungsangebote/hochschulinfotage/" title="Hochschulinfotage" class="icon-arrow-after">Hochschulinfotage</a></li>
                    <li class="col-1-2"><a href="studium/studieninteressenten/bewerbung/" title="Deine Bewerbung" class="icon-arrow-after">Deine Bewerbung</a></li>
                    <li class="col-1-2"><a href="studium/studieninteressenten/angebote-fuer-schueler-innen/" title="Schülerangebote" class="icon-arrow-after">Schülerangebote</a></li>
                    <li class="col-1-2"><a href="studium/studieninteressenten/orientierungsangebote/" target="Orientierungsangebote" class="icon-arrow-after">Orientierung</a></li></ul></div>
                </div>
            </div>
        </div>
    </div>
</section>)};

export default Section2;