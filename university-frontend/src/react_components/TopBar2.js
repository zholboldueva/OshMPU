import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/base.css';
import '../styles/base-be.css';
import '../styles/reset.css';
import '../styles/awesome.css';


const TopBar2 = () => {
 const [isQuicklinksActive, setQuicklinksActive] = useState(false);
 const [isSearchActive, setSearchActive] = useState(false);

  const handleSearchToggle = () => {
    setSearchActive(!isSearchActive);
  };
  const handleQuicklinksToggle = () => {
    setQuicklinksActive(!isQuicklinksActive);
  };
  	
  	
  return (     
        <div id="topbar"> 
			<div class="content-container"> 
				<div class="row"> 
					<div class="col-md-12 text-right right">
						 <ul class={`top-menu ${isQuicklinksActive ? 'active' : ''}`}> 
						 <li class={`quicklinks ${isQuicklinksActive ? 'active' : ''}`}>
							<button title="Quicklinks öffnen" class="toggler collapsed" data-toggle="collapse" data-target="#quicklinks" aria-expanded={isQuicklinksActive} aria-label={isQuicklinksActive ? 'Element schließen' : 'Element öffnen'}  onClick={handleQuicklinksToggle}>Quicklinks</button></li> 
							<li class="presse"><a href="/hochschule/organisation/zentrale-einrichtungen/kommunikation-marketing/" title="Zur Pressestelle der Westsächsischen Hochschule Zwickau">Presse</a></li> 
							<li class="karriere"><a href="/hochschule/ueber-uns/die-hochschule-als-arbeitgeber/karriere" title="Karriere">Karriere</a></li>
							<li><a href="/intern" title="zum internen Bereich">intern</a></li> 
						    <li class="english ml-1"><a href="/english" title="zum englischen Auftritt">EN</a></li> 
							<li class="home"><a href="/" class="home" title="Zur Startseite der WHZ wechseln"><em class=" icon-home"></em></a></li> 
							<li class="lock"><a href="service/login/" title="Sie sind an der Webseite nicht angemeldet. Zum Anmelden bitte hier klicken."><em class="icon-lock"></em></a></li> 
							<li class={`search ${isSearchActive ? 'active' : ''}`}><button title="Es öffnet sich die Sucheingabemaske" class={`toggler ${isSearchActive ? 'collapsed' : ''}`} onClick={handleSearchToggle} data-toggle="collapse" data-target="#search" aria-expanded={isSearchActive} aria-label="Element öffnen"><em class="icon-search"></em></button></li> </ul> 
						<div id="search" class={`collapse container ${isSearchActive ? 'show' : ''}`}> 
							<form action="service/suche/" name="form_kesearch_pi1" method="get"> <fieldset> <legend class="d-none">Webinhalte der WHZ durchsuchen</legend> 
									<div class="row justify-content-end"> 
										<div class="col-md-5"> <label class="d-none" for="searchword">Suchwort</label> <input id="searchword" name="tx_kesearch_pi1[sword]" value="" placeholder="Suchbegriff eingeben" title="Bitte geben Sie hier einen Suchbegriff ein" type="text"/> </div>
										<div class="col-md-2"> <button title="Suche starten"><i class="icon-search"></i> Suche starten</button> </div>
										 </div>
									 </fieldset> </form>
						</div>
						<div id="quicklinks" class={`collapse page-container ${isQuicklinksActive ? 'show' : ''}`}                                      > 
							<div class="row"> 
								<div class="col-sm-4 col-lg-4"> <span class="highlight text-wrap">Einrichtungen / Initiativen</span> <ul class="mt-3"> <li><a class="text-wrap" href="/bib" title="zur Hochschulbibliothek">Hochschulbibliothek<em class="icon-right-open"></em></a></li> <li><a class="text-wrap" href="/studium/internationales/" title="zum International Office">International Office<em class="icon-right-open"></em></a></li> <li><a class="text-wrap" href="/zki" title="zum ZKI - Zentrum für Kommunikationstechnik und Informationsverarbeitung">ZKI - Zentrum für Kommunikationstechnik und Informationsverarbeitung<em class="icon-right-open"></em></a></li> <li><a class="text-wrap" href="/sport" title="zum Hochschulsport">Hochschulsport<em class="icon-right-open"></em></a></li> <li><a class="text-wrap" href="https://www.whz-racingteam.de" target="_blank" title="Sie verlassen fh-zwickau.de zum Racing Team" rel="noopener noreferrer">Racing Team<em class="icon-link-ext"></em></a></li> <li><a class="text-wrap" href="https://www.whzesports.de" target="_blank" title="Sie verlassen fh-zwickau.de zum WHZ eSports" rel="noopener noreferrer">WHZ eSports<em class="icon-link-ext"></em></a></li> <li><a class="text-wrap" href="/studentenrat" title="zum Studentenrat">Studentenrat<em class="icon-right-open"></em></a></li> <li><a class="text-wrap" href="https://www.swcz.de" target="_blank" title="Sie verlassen fh-zwickau.de zum Studentenwerk" rel="noopener noreferrer">Studentenwerk<em class="icon-link-ext"></em></a></li> </ul> </div>
								<div class="col-sm-4 col-lg-4"> <span class="highlight text-wrap">Webdienste / Portale</span> <ul class="mt-3"> <li><a class="text-wrap" href="/zki/anleitungen-infos/e-maildienste" title="Zu den E-Mail/Dienste">E-Mail/Dienste<em class="icon-right-open"></em></a></li> <li><a class="text-wrap" href="https://mobile.fh-zwickau.de/" target="_blank" title="Zur WHZ WebApp" rel="noopener noreferrer">WHZ WebApp<em class="icon-link-ext"></em></a></li> <li><a class="text-wrap" href="/qm-portal" title="zum QM-Portal Studium und Lehre ">QM-Portal Studium und Lehre<em class="icon-right-open"></em></a></li> <li><a class="text-wrap" href="/studium/studierende/studienorganisation/studienservice" target="_blank" title="zum Studienservice" rel="noopener noreferrer">Studienservice<em class="icon-link-ext"></em></a></li> <li><a class="text-wrap" href="/studium/studierende/studienorganisation/studierenden-und-pruefungsportal" target="_blank" title="Prüfungsportal" rel="noopener noreferrer">Prüfungsportal<em class="icon-link-ext"></em></a></li> <li><a class="text-wrap" href="/hochschule/organisation/zentrale-hochschulverwaltung/organisationshandbuch/formulare/" title="Organisationshandbuch">Organisationshandbuch<em class="icon-right-open"></em></a></li> <li><a class="text-wrap" href="https://zki-service.fh-zwickau.de/" title="ZKI-Serviceportal" target="_blank" rel="noopener noreferrer">ZKI-Serviceportal<em class="icon-link-ext"></em></a></li> </ul> </div>
								<div class="col-sm-4 col-lg-4"> <span class="highlight text-wrap">Service</span> <ul class="mt-3"> <li><a class="text-wrap" href="/service/kontakt/telefonverzeichnis" title="Telefonverzeichnis">Telefonverzeichnis<em class="icon-right-open"></em></a></li> <li><a class="text-wrap" href="/service/notfallhavarie" title="Notfall/Havarie">Notfall/Havarie<em class="icon-right-open"></em></a></li> <li><a class="text-wrap" href="https://jobportal.fh-zwickau.de" target="_blank" title="Jobportal für Studierende" rel="noopener noreferrer">Jobportal für Studierende<em class="icon-link-ext"></em></a></li> <li><a class="text-wrap" href="/service/speiseplaene" title="Speisepläne">Speisepläne<em class="icon-right-open"></em></a></li> <li><a class="text-wrap" href="/studium/studierende/campusleben/hochschulshop" title="Hochschulshop">Hochschulshop<em class="icon-right-open"></em></a></li> <li><a class="text-wrap" href="/hochschule/service/corporate-design/" title="Corporate Design">Corporate Design<em class="icon-right-open"></em></a></li> </ul> </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		);
	};

export default TopBar2;