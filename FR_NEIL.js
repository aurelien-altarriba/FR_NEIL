// ==UserScript==
// @name					FR_NEIL
// @version				2.4
// @description		BOT Autonome et contrôlable de hack et d'amélioration
// @author 				Aurélien Altarriba
// @match 				http://s0urce.io/*
// ==/UserScript==

// Initialisation des variables
let config, vars, app, loops, gui;

// CONFIGURATION
config = {

	// Message de hack pour la victime
	message: "☠️ HACKÉ PAR FR_NEIL 💻",

	autoTarget: true,			// Attaque automatique
	autoAttack: true,			// Cibles automatique
	log: false,						// Logs en console
	minage: true,					// Amélioration des mineurs automatique

	freq: {
		word: 1000,					// Temps avant de deviner le mot
		mine: 4000,					// Temps avant d'améliorer les mines
		upgrade: 3000,			// Temps avant d'améliorer le firewall
		broke: 3000,				// Temps avant de réessayer de hacker si monnaie insuffisante
		hack: 1000,					// Temps avant de hacker un autre joueur
	},

	playerToAttack: 0,		// Par quel joueur commencer l'attaque dans la liste (0 = 1er)
	maxHackFails: 5,			// Nombre d'erreurs de hack avant de redémarrer le bot
	maxMinerLevel: 30,		// Niveau max des mineurs sauf Botnet et Quantum server
	maxQBLevel: 80,				// Niveau max des mineurs Botnet et Quantum server
	maxUpgradeCost: .6,		// Somme maximale pour l'amélioration (BTC actuel * maxUpgradeCost)

	// Paramètres de l'interface de contrôle du BOT
	gui: {
		enabled: true,
		width: "400px",
		height: "690px"
	}
};

// VARIABLES
vars = {

	// Liste des images des mots (remplissage automatique)
	listingURL: {},

	// Base de données des mots
	listingB64: {"15311015":"module","19874074":"file","47175883":"encryptfile","78482505":"stat","98536489":"url","101243014":"eventlistdir","121093601":"password","130603323":"deleteallids","148244845":"rootcookieset","248513203":"loadaltevent","267308791":"info","348636898":"username","398561552":"add","401153668":"tempdatapass","419398556":"num","456062031":"point","514120436":"send","567102362":"data","589336711":"generate","599598412":"command","605282908":"loop","618676639":"ghostfilesystem","648763823":"create3axisvector","657256265":"cookies","668315514":"add","670312741":"writefile","782829474":"respondertimeout","847167870":"setnewproxy","854884272":"wordcounter","861244767":"joinnetworkclient","901243531":"newline","902745501":"changeusername","907181842":"syscall","938919465":"getxmlprotocol","968556280":"callmodule","974918423":"constructor","979066172":"signal","979636581":"global","985712586":"statusofprocess","1025302195":"anon","1036824887":"uploaduserstats","1059114713":"http","1116412930":"getping","1129543136":"load","1136257323":"handle","1144523139":"pass","1150909553":"package","1159860793":"sizeofhexagon","1171225457":"hostnewserver","1183279706":"listconfig","1207346080":"thread","1224854595":"datatype","1226991364":"setcookie","1277154470":"getid","1297084254":"fillgrid","1297139737":"loadbytes","1302383528":"host","1338515272":"getfirewallchannel","1346956584":"channelsetpackage","1372243801":"hostserver","1420184963":"event","1442699894":"responder","1472847174":"getfile","1557099499":"port","1567951055":"sizeof","1594121102":"serverproxy","1605981605":"removenewcookie","1609121367":"eventtype","1638349176":"gridheight","1647872193":"user","1653524095":"poly","1672574785":"log","1683542193":"val","1684232653":"status","1719618689":"root","1726234710":"patcheventlog","1733767903":"mysql","1768556497":"net","1770626869":"checkhttptype","1788506574":"delete","1852667296":"emitconfiglist","1856168944":"download","1882426025":"disconnectchannel","1905636872":"changepassword","1939344114":"urlcheck","1956925611":"fileexpresslog","1987315504":"length","1987630692":"encode","1999688087":"blockthreat","2044041787":"getdatapassword","2091854663":"join","2114328775":"bufferpingset","2127289026":"socket","2146605725":"create2axisvector","-2022313631":"get","-1626066211":"dir","-2118249843":"list","-2017827979":"ghost","-505734822":"ping","-105754243":"write","-596486220":"remove","-1411454256":"bytes","-1138367387":"count","-418857538":"reset","-1672823040":"com","-29353888":"key","-92886755":"buffer","-1616694298":"bit","-23912487":"size","-1249268365":"upload","-1468886921":"temp","-626053887":"system","-1156711839":"client","-81054603":"init","-141168411":"xml","-1345603115":"part","-679234549":"emit","-1587204252":"set","-1308065871":"call","-1266608331":"type","-193204407":"left","-1628499386":"right","-287565771":"domain","-1728017658":"intel","-1064389816":"getpass","-1164465758":"setstats","-1127904142":"encrypt","-406197419":"accountname","-945581080":"setnewid","-1222053453":"process","-508873827":"proxy","-1354700300":"filedir","-196679888":"newhost","-1461353192":"server","-683593749":"number","-836893237":"gridwidth","-2012064394":"decrypt","-294405445":"config","-39918655":"getinfo","-1476080363":"userport","-553981589":"account","-2131859196":"filetype","-700611194":"decryptfile","-179602858":"setport","-317210335":"threat","-1896953293":"userid","-689028013":"channel","-934078508":"hexagon","-222362882":"disconnect","-2047298844":"protocol","-487602046":"getkey","-32035591":"getlog","-900965004":"export","-1327076929":"connect","-517864587":"newserver","-440931039":"findpackage","-1172656994":"vector","-616163997":"response","-1986603776":"setping","-1941630950":"unpacktmpfile","-75721908":"getmysqldomain","-1695566202":"httpbuffersize","-819294973":"removeoldcookie","-2135624083":"getpartoffile","-410733505":"disconnectserver","-1100099911":"batchallfiles","-1008193379":"exportconfigpackage","-363307462":"loadloggedpassword","-841313941":"sendintelpass","-486089412":"decryptdatabatch","-414160473":"loadregisterlist","-1136603235":"systemgridtype","-1274291847":"encodenewfolder","-1758655872":"encryptunpackedbatch","-797896268":"destroybatch","-1293468912":"dodecahedron","-2089156425":"includedirectory","-1811003021":"systemportkey","-580269682":"mergesocket","-1898909613":"createnewpackage","-1505677585":"createfilethread","-745659096":"generatecodepack","-1279135495":"createnewsocket"},

	balance: 0,				// Initialisation des BitCoins sur le compte

	flags: {
		ocrBlock: false,		// Attente de la fin d'OCR
		progressBlock: false		// Attente de la progression de la barre de hack
	},

	// Initialisation des événements de boucle
	loops: {
		word: null,
		upgrade: null,
		miner: null
	},

	hackProgress: 0,			// Progression sur un hack
	hackFailures: 0,			// Nombre d'erreurs sur un hack

	// Mineurs et leur niveau actuel (automatique)
	minerStatus: [
		{ name: "shop-basic-miner", value: 0 },
		{ name: "shop-advanced-miner", value: 0 },
		{ name: "shop-mining-drill", value: 0 },
		{ name: "shop-data-center", value: 0 },
		{ name: "shop-bot-net", value: 0 },
		{ name: "shop-quantum-server", value: 0 }
	],

	// Ports du firewall et autorisation d'amélioration
	fireWall: [
		{ name: "A", index: 1, needUpgrade: true },
		{ name: "B", index: 2, needUpgrade: true },
		{ name: "C", index: 3, needUpgrade: true },
		{ name: "ALL", needUpgrade: true }
	],

	// Initialisation système pour la fenêtre de contrôle du BOT
	gui: {
		dragReady: false,
		dragOffset: { x: 0, y: 0 }
	}
};

app = {

	// Démarrage du BOT
	start: () => {

		// Ouverture des fenêtres si elles ne sont pas ouvertes
		if ($("#player-list").is(":visible") === false) {
			$("#desktop-list").children("img").click();
		}
		if ($("#window-shop").is(":visible") === false) {
			$("#desktop-shop").children("img").click();
			$("#desktop-miner").children("img").click();
		}
		if ($("#window-computer").is(":visible") === false) {
			$("#desktop-computer").children("img").click();
		}
		if (config.gui.enabled === true) {
			if ($("#custom-gui").length > 0) {
				$("#custom-gui").show();
			} else {
				gui.show();
			}
		}

		// On ouvre le premier port firewall puis on le ferme après 200ms (pour éviter le bug de non-update)
		$(`#window-firewall-part1`).click();
		setTimeout(function() {
			$("#window-firewall-pagebutton").click();
		}, 200);

		// Lancement des boucles d'actions du BOT
		app.automate();
	},

	// Redémarrage du BOT
	restart: () => {
		app.stop();
		log(">> Redémarrage ...");

		setTimeout(() => {
			log(">> Redémarré!");
			app.automate();
		}, config.freq.hack);
	},

	// Arrêt du BOT
	stop: () => {

		// Supprime chaque boucle d'actions
		for (const loop in vars.loops) {
			if (vars.loops[loop] === null) {
				log(`La boucle ${loop} est déjà arrêtée`);
				continue;
			}
			clearInterval(vars.loops[loop]);
			vars.loops[loop] = null;
		}

		// Réinitialisation des variables nécessaires
		vars.hackProgress = 0;
		vars.flags.ocrBlock = false;
		vars.flags.progressBlock = false;
		log(">> Arrêté");
	},

	// Automatisation du BOT
	automate: () => {

		// Prépare la prochaine attaque (paramètres etc)
		app.attack();

		// Démarre la boucle d'actions pour améliorer les mines
		if (vars.loops.miner === null) {
			vars.loops.miner = setInterval(loops.miner, config.freq.mine);
		}

		// Démarre la boucle d'actions pour améliorer le firewall
		if (vars.loops.upgrade === null) {
			vars.loops.upgrade = setInterval(loops.upgrade, config.freq.upgrade);
		}
	},

	// Attaque du BOT
	attack: () => {

		// Cible automatique pour l'attaque
		if (config.autoTarget) {

			// Sélectionne un joueur aléatoirement dans la liste
			const nbListe = $("#player-list").children().length - 1;
			const randomListe = getRandomInt(0, nbListe);

			// Récupération du nom du joueur ciblé
			const targetName = $("#player-list").children("tr").eq(randomListe)[0].innerText;
			log(`=> Attaque de : ${targetName}`);

			// Ouverture du menu pour hacker le joueur
			$("#player-list").children("tr").eq(randomListe)[0].click();
			$("#window-other-button").click();
		}

		// Attaque automatique
		if (config.autoAttack) {

			// Choisi un port aléatoirement pour attaquer
			const portNumber = getRandomInt(1, 3);

			// Vérifie si assez de BitCoins sur le compte pour hack, sinon attends
			const portStyle = $(`#window-other-port${portNumber}`).attr("style");
			if (portStyle.indexOf("opacity: 1") === -1) {
				log("~ Hack trop cher, en attente...");
				setTimeout(app.attack, config.freq.broke);
				return;
			}

			// Clique sur le port à attaquer
			$(`#window-other-port${portNumber}`).click();
		}

		// Si le BOT doit attaquer
		if(config.autoTarget || config.autoAttack) {

			// Boucle d'actions du hack
			if (vars.loops.word === null) {
				vars.loops.word = setInterval(loops.word, config.freq.word);
			}
		} else {

			// Attente de BitCoins pour attaquer
			setTimeout(app.attack, config.freq.broke);
			return;
		}
	},

	findWord: () => {
		const wordLink = $(".tool-type-img").prop("src");
		if (!wordLink.endsWith("s0urce.io/client/img/words/template.png")) {
			if (vars.listingURL.hasOwnProperty(wordLink) === true) {
				const word = vars.listingURL[wordLink];
				log(`Mot trouvé (URL): [${word}]`);
				app.submit(word);
				return;
			}
			toDataURL(wordLink).then((dataUrl) => {
				const hash = getHashCode(dataUrl);
				if (vars.listingB64.hasOwnProperty(hash) === true) {
					const word = vars.listingB64[hash];
					log(`Mot trouvé (BDD): [${word}]`);
					app.learn(word);
					return;
				}
			});
		} else {
			log("Impossible de trouver le mot");

			// Si la cible est déconnecté et la cible automatique désactivée, on l'active
			if ($("#cdm-text-container span:last").text() === "Target is disconnected from the Server." && !config.autoTarget) {
				$("#custom-autoTarget-button").click();
			}
			app.restart();
		}
	},

	learn: (word) => {
		const wordLink = $(".tool-type-img").prop("src");
		vars.listingURL[wordLink] = word;
		app.submit(word);
	},

	submit: (word) => {
		$("#tool-type-word").val(word);
		$("#tool-type-word").submit();
	}
};

loops = {
	word: () => {
		if ($("#targetmessage-input").is(":visible") === true) {

			// Message envoyé après le hack
			$("#targetmessage-input").val(config.message);
			$("#targetmessage-button-send").click();
			log("=> Hack réussi!");
			app.restart();
			return;
		}

		// On attends que la barre de progression bouge
		if (vars.flags.progressBlock === true) {
			const newHackProgress = parseHackProgress($("#progressbar-firewall-amount").attr("style"));

			// On regarde si c'est un nouveau hack sinon bug
			if (vars.hackProgress === newHackProgress) {
				log("La barre de progression semble figée...");
				vars.hackFails++;

				// Si trop de fails pour hack, on redémarre
				if (vars.hackFails >= config.maxHackFails) {
					vars.hackFails = 0;
					log("La barre de progression est bloquée, redémarrage...");

					// Réinitialisation des URL (changement possible)
					vars.listingURL = {};
					app.restart();
				}
				return;
			}

			// Quand la barre a bougée
			vars.hackFails = 0;
			vars.hackProgress = newHackProgress;
			vars.flags.progressBlock = false;
		}

		// Rechercher le mot
		vars.flags.progressBlock = true;
		app.findWord();
	},

	miner: () => {

		// Si le minage automatique est activé
		if(config.minage) {

			// Pour chaque mineur
			for (const miner of vars.minerStatus) {

				// On récupère sa valeur
				miner.value = parseInt($(`#${miner.name}-amount`).text());

				// Si son amélioration est possible
				if ($(`#${miner.name}`).attr("style") === "opacity: 1;") {

					// Si le mineur est au dessus la configuration max, on arrête
					if (miner.value >= config.maxQBLevel) {
						continue;
					}

					// On récupère le type du mineur (base ou avancé)
					const isAdvancedMiner = (miner.name === "shop-quantum-server" || miner.name === "shop-bot-net") ? true : false;

					// Si le mineur n'est pas avancé, on arrête si son niveau est au dessus la limite
					if (miner.value >= config.maxMinerLevel && isAdvancedMiner === false) {
						continue;
					}

					// Sinon on améliore le mineur
					$(`#${miner.name}`).click();
				}
			}
		}
	},

	upgrade: () => {

		// On quitte si tout les firewall sont déjà au max
		if (!vars.fireWall[3].needUpgrade)
			return;

		// On choisi un des 3 firewall aléatoirement
		const i = getRandomInt(0, 2);
		const index = vars.fireWall[i].index;

		// Si ce firewall est déjà au maximum, on en choisi un autre aléatoirement
		if (!vars.fireWall[i].needUpgrade) {
			vars.loops.upgrade();
		}

		// On récupère notre montant d'argent
		vars.balance = parseInt($("#window-my-coinamount").text());

		// Si le bouton de retour est visible, on ferme le tutoriel
		if ($("#window-firewall-pagebutton").is(":visible") === true) {
			$("#tutorial-firewall").css("display", "none");
			$("#window-firewall-pagebutton").click();
		}

		// On ouvre le firewall
		$(`#window-firewall-part${index}`).click();

		// On récupère les niveaux d'amélioration du firewall
		const stats = [
			parseInt($("#shop-max-charges").text()), parseInt($("#shop-strength").text()), parseInt($("#shop-regen").text())
		];
		const statLookup = [
			"max_charge10", "difficulty", "regen"
		];
		const maxStats = [
			30, 4, 10
		];
		let maxUpgradeCount = 0;

		// Pour chaque stat
		for (const stat in maxStats) {

			// Si le stat n'est pas déjà au maximum
			if (stats[stat] < maxStats[stat]) {

				// Si on a assez d'argent
				const statPrice = parseInt($(`#shop-firewall-${statLookup[stat]}-value`).text());
				if (statPrice < (vars.balance * config.maxUpgradeCost)) {

					// Alors on améliore le firewall
					log(`${vars.fireWall[i].name} - Amélioration : ${$(".window-shop-element-info b").eq(stat).text()}`);
					$(`#shop-firewall-${statLookup[stat]}`).click();
				}

			// On incrément de 1 le maxUpgrade
			} else {
				maxUpgradeCount++;

				// Si le firewall à ses 3 stats au max, on le retire de la liste d'amélioration
				if (maxUpgradeCount === 3) {
					vars.fireWall[i].needUpgrade = false;
					if (vars.fireWall.every(checkFirewallsUpgrades))
						vars.fireWall[3].needUpgrade = false;
				}
			}
		}

		// On retourne au menu des firewalls
		if ($("#window-firewall-pagebutton").is(":visible") === true) {
			$("#window-firewall-pagebutton").click();
		}
	},
};

gui = {

	// Affiche l'interface du bot
	show: () => {
		const sizeCSS = `height: ${config.gui.height}; width: ${config.gui.width}; text-align: center;`;
		const labelMap = {
			word: "Vitesse des mots",
			mine: "Amélioration des mines",
			upgrade: "Amélioration du firewall",
			hack: "Temps entre les hacks"
		};
		const freqInput = (type) => {
			return `<span style="font-size:15px">
				${labelMap[type]}:
				<input type="text" class="custom-gui-freq input-form" style="width:50px;margin:0px 0px 15px 5px;background:#444;"
				  value="${config.freq[type]}" data-type="${type}">
				<span>(ms)</span><br>
			</span>`;
		};
		const botWindowHTML = `
		<div id="custom-gui" class="window" style="border-color: rgb(62, 76, 95); color: rgb(191, 207, 210); ${sizeCSS} z-index: 10; top: 10%; right: 7%;">
			<div id="custom-gui-bot-title" class="window-title" style="background-color: rgb(62, 76, 95);">
				🤖 BOT FR_NEIL
				<span class="window-close-style">
					<img class="window-close-img" src="http://s0urce.io/client/img/icon-close.png">
				</span>
			</div>
			<div class="window-content" style="${sizeCSS}">
				<div id="custom-restart-button" class="button" style="display: block; margin-bottom: 15px">
					Redémarrer le bot
				</div>
				<div id="custom-stop-button" class="button" style="display: block; margin-bottom: 15px;">
					Arrêter le bot
				</div>

				<div style="width:100%;border-bottom: 1px solid grey;"></div>
				<h3 style="text-align:center;">ATTAQUES</h3>
				<div id="custom-autoAttack-button" class="button" style="display: block; margin-bottom: 15px";>
					Attaques automatiques sur la cible
				</div>
				<div id="custom-autoTarget-button" class="button" style="display: block; margin-bottom: 15px";>
					Cibles aléatoires
				</div>
				<div style="width:100%;border-bottom: 1px solid grey;"></div>

				<div id="custom-firewall-button" class="button" style="display: block; margin-bottom: 15px; margin-top: 15px;">
					Améliorer le firewall
				</div>
				<div id="custom-mineur-button" class="button" style="display: block; margin-bottom: 15px">
					Améliorer les mineurs
				</div>
				<div id="custom-log-button" class="button" style="display: block; margin-bottom: 15px">
					Afficher les logs en console
				</div><br>
				<span style="margin-bottom: 0.2em;">Message de hack:</span>
				<br>
				<input type="text" class="custom-gui-msg input-form" maxlength="40" style="width:350px;height:30px;background:lightgrey;color:black;margin-top:0.3em;" value="${config.message}" >
				<br><br>
				${freqInput("word")}
				${freqInput("mine")}
				${freqInput("upgrade")}
				${freqInput("hack")}
			</div>
		</div>`;

		const boutonBOT = `
		<div class="desktop-element" id="desktop-bot" style="position: absolute; top: 85px; right: 0">
			<div style="font-size: 2em;">🤖</div>
			<div class="desktop-element-title">BOT</div>
		</div>
		`;

		// Choix des limites d'amélioration pour chaque mineur
		const limitesMineurs = `
		<div style="text-align:center;">
			<span>MAX mineurs de base : </span>
			<input type="text" id="limitSmallMiner" class="input-form" style="width:40px;margin:15px 0px 15px 5px;background:#444;"
			  value="${config.maxMinerLevel}" ><br>
			<span>MAX mineurs avancés : </span>
			<input type="text" id="limitBigMiner" class="input-form" style="width:40px;margin:0px 0px 15px 5px;background:#444;"
			  value="${config.maxQBLevel}" >
		</div>
		`;

		$(".window-wrapper").append(botWindowHTML);

		// Bouton d'ouverture du BOT
		$("#desktop-wrapper").append(boutonBOT);
		$("#desktop-bot").on("click", () => {
			$("#custom-gui").show();
		});

		// Si le navigateur n'ets pas Firefox, on bloque
		if (navigator.userAgent.indexOf("Firefox")==-1)
		{
			log("⚠️ Agent autre que Firefox détecté !");
			document.body.innerHTML = '<div style="text-align:center;height:100vh;font-size:1.3em;display:flex;justify-content:center;align-items:center;'+
			  'background-image:url(https://media.giphy.com/media/BNvbCdsIzigla/giphy.gif)">'+
				'<div style="display:flex;justify-content:center;align-items:center;flex-direction:column;background-color:rgba(0,0,0,0.9);border-radius:100%;box-shadow:0px 0px 20px black;padding:2em">'+
					'<h1>🤖 BOT FR_NEIL</h1>'+
					'<h2 style="color:red">⚠️ Ce BOT a été créé et optimisé pour Firefox seulement</h2>'+
					'<h3>Vous pouvez télécharger Firefox <a href="https://www.mozilla.org/fr/firefox/new/" style="color:green">ICI</a> ✔️</h3>'+
					'<p>~ Neïlérua</p>'+
				'</div>'+
			'</div>';
		}

		// Masque le message d'AdBlock
		$("#window-msg2 .message").html('<h1>🤖 BOT FR_NEIL - PAR NEÏLÉRUA</h1>');

		// MINEURS
		$("#window-miner .window-content").css("height", "500px");
		$("#window-miner .window-content").append(limitesMineurs);

		// Boutons de valeur (OUI/NON)
		$("#custom-autoTarget-button").css("color", config.autoTarget ? "green" : "red");
		$("#custom-autoAttack-button").css("color", config.autoAttack ? "green" : "red");
		$("#custom-firewall-button").css("color", vars.fireWall[3].needUpgrade ? "green" : "red");
		$("#custom-mineur-button").css("color", config.minage ? "green" : "red");
		$("#custom-log-button").css("color", config.log ? "green" : "red");

		// Fermeture de la fenêtre du BOT
		$("#custom-gui-bot-title > span.window-close-style").on("click", () => {
			$("#custom-gui").hide();
		});

		// Changement du message de hack
		$(".custom-gui-msg").on("keypress", (e) => {
			if (e.keyCode !== 13) {
				return;
			}
			config.message = $(e.target).val();
			log(`Message de hack défini à : ${config.message}`);
			changementEffectue();
		});

		// Bouton redémarrer
		$("#custom-restart-button").on("click", () => {
			app.restart();
		});

		// Bouton arrêter
		$("#custom-stop-button").on("click", () => {
			app.stop();
		});

		// Bouton attaque automatique
		$("#custom-autoAttack-button").on("click", () => {
			config.autoAttack = !config.autoAttack;

			if(config.autoTarget == true) {
				config.autoTarget = false;
			}

			$("#custom-autoAttack-button").css("color", config.autoAttack ? "green" : "red");
			$("#custom-autoTarget-button").css("color", config.autoTarget ? "green" : "red");
		});

		// Bouton cible automatique
		$("#custom-autoTarget-button").on("click", () => {
			config.autoTarget = !config.autoTarget;
			$("#custom-autoTarget-button").css("color", config.autoTarget ? "green" : "red");
		});

		// Bouton améliorer le firewall automatiquement
		$("#custom-firewall-button").on("click", () => {
			vars.fireWall[3].needUpgrade = !vars.fireWall[3].needUpgrade;
			$("#custom-firewall-button").css("color", vars.fireWall[3].needUpgrade ? "green" : "red");
		});

		// Bouton améliorer le mineur automatiquement
		$("#custom-mineur-button").on("click", () => {
			config.minage = !config.minage;
			$("#custom-mineur-button").css("color", config.minage ? "green" : "red");
		});

		// Bouton aficher les logs console automatiquement
		$("#custom-log-button").on("click", () => {
			config.log = !config.log;
			$("#custom-log-button").css("color", config.log ? "green" : "red");
		});

		// Si on fait le bouton entrée sur un input de fréquence
		$(".custom-gui-freq").on("keypress", (e) => {
			if (e.keyCode !== 13) {
				return;
			}

			// On récupère le type de fréquence
			const type = $(e.target).attr("data-type");
			if (!config.freq[type]) {
				return;
			}

			// On met à jour la fréquence à sa nouvelle valeur
			config.freq[type] = $(e.target).val();
			log(`Fréquence de '${type}' définie à ${config.freq[type]}`);
			changementEffectue();
		});

		// Input du niveau max du mineur de base
		$("#limitSmallMiner").on("keypress", (e) => {
			if (e.keyCode !== 13) {
				return;
			}
			config.maxMinerLevel = $(e.target).val();
			log(`Limite des petits mineurs : ${config.maxMinerLevel}`);
			changementEffectue();
		});

		// Input du niveau max du mineur avancé
		$("#limitBigMiner").on("keypress", (e) => {
			if (e.keyCode !== 13) {
				return;
			}
			config.maxQBLevel = $(e.target).val();
			log(`Limites des grands mineurs : ${config.maxQBLevel}`);
			changementEffectue();
		});

		// Rend la fenêtre déplaçable
		const botWindow = ("#custom-gui");
		const botWindowTitle = ("#custom-gui-bot-title");
		$(document).on("mousedown", botWindowTitle, (e) => {
			vars.gui.dragReady = true;
			vars.gui.dragOffset.x = e.pageX - $(botWindow).position().left;
			vars.gui.dragOffset.y = e.pageY - $(botWindow).position().top;
		});
		$(document).on("mouseup", botWindowTitle, () => {
			vars.gui.dragReady = false;
		});
		$(document).on("mousemove", (e) => {
			if (vars.gui.dragReady) {
				$(botWindow).css("top", `${e.pageY - vars.gui.dragOffset.y}px`);
				$(botWindow).css("left", `${e.pageX - vars.gui.dragOffset.x}px`);
			}
		});
	}
};

// Vérifie le niveau du firewall
function checkFirewallsUpgrades(FW, index) {
	if (index === 3) {
		return true;
	}
	return FW.needUpgrade === false;
}

// Calcule la progression de la barre
function parseHackProgress(progress) {
	const newProgress = progress.slice(0, -2);
	const newProgressParts = newProgress.split("width: ");
	return parseInt(newProgressParts.pop());
}

// Renvoi un nombre entier aléatoire dans l'intervalle choisie
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Récupère l'URL du mot
function toDataURL(url) {
	return fetch(url)
		.then(response => response.blob())
		.then(blob => new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onloadend = () => resolve(reader.result);
			reader.onerror = reject;
			reader.readAsDataURL(blob);
		}));
}

// Décode l'URL du mot
function getHashCode(data) {
	let hash = 0;
	if (data.length === 0) {
		return hash;
	}
	for (let i = 0; i < data.length; i++) {
		const c = data.charCodeAt(i);
		hash = ((hash << 5) - hash) + c;
		hash &= hash;
	}
	return hash.toString();
}

// Détecte si on est sur un input
function isFromEdit(e) {
	if (window.event) e = window.event;
	var target = e.target ? e.target : e.srcElement;
	return ((target.tagName=="INPUT" && (target.type == "text" || target.type == "password")) || target.tagName=="TEXTAREA");
}

// Bloque le bouton Suppr sauf dans les inputs
function blocBadTouche(e) {
	if (window.event) e = window.event;
	var touche = window.event ? e.keyCode : e.which;
	var target = e.target ? e.target : e.srcElement;
	if (touche == 8 && !isFromEdit(e)) {
		if (e.keyCode) e.keyCode=0;
		return false;
	}
	return true;
}

// Log en console
function log(message) {
	if(config.log) {
		console.log(`:: ${message}`);
	}
}

// Clignotement vert de la fenêtre pour confirmer le changement
function changementEffectue() {
	$("#custom-gui").css("transition", "all ease-in-out 0.3s");
	$("#custom-gui").css("box-shadow", "0px 0px 20px green");

	setTimeout(function() {
		$("#custom-gui").css("box-shadow", "0px 0px 0px green");
		setTimeout(function () {
			$("#custom-gui").css("transition", "none");
		}, 500);
	}, 500);
}

// Pour empêcher le retour de page avec le bouton supprimer
$("body").on("keydown", function(event) {
	return blocBadTouche(event);
});

// Lancement du bot
console.clear();
app.start();
