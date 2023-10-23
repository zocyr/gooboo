export default {
  releasedOn: 'veröffentlicht am',
  changeCount: 'Außerdem wurden {0} Dinge verändert, die noch nicht freigeschaltet sind',
  versionType: {
    major: 'Neue Hauptversion',
    minor: 'Neue Version',
    patch: 'Patch'
  },
  type: {
    bugfix: 'Fehlerbehebung',
    balance: 'Balancing',
    qol: 'Bequemlichkeit',
    clarity: 'Klarheit',
    info: 'Info',
    context: 'Kontext',
    new: 'Neu',
    remove: 'Entfernt',
    change: 'Änderung',
    accessibility: 'Barrierefreiheit',
    appearance: 'Optik'
  },
  text: {
    addedFeature: 'Funktion hinzugefügt',
    addedUpgrade: '{0} neue Verbesserung(en) hinzugefügt',
    addedPrestigeUpgrade: '{0} neue Prestige-Verbesserung(en) hinzugefügt',
    addedBuilding: '{0} neue Gebäude hinzugefügt',
    addedAchievement: '{0} Erfolg(e) hinzugefügt',
    secretAchievement: '{0} geheime(r) Erfolg(e) hinzugefügt',
    addedHordeItem: '{0} neue Ausrüstungsgegenstände hinzugefügt',
    addedHordeSigil: '{0} neue Zeichen hinzugefügt',
    addedHordeHeirloom: '{0} neue Erbstücke hinzugefügt',

    // v1.0.1
    0: 'Die Menge an Schrott im Bergwerk wurde auf den Tiefen am Anfang leicht erhöht',
    1: 'Zeigt einen Hinweis für neue Spieler, dass es beim Heruntergraben kein Schrotteinkommen gibt',
    2: 'Die Gebäudewarteschlange zeigt jetzt den Forschritt vom aktuell gebauten Gebäude an',
    3: 'Gebäude bleiben jetzt in der Liste, bis das Gebäude fertig gebaut ist, wenn das Maximum erreicht wird',
    4: 'Beim Benutzen vom Antwortknopf bleibt das Textfeld jetzt im Fokus',
    5: 'Das Einsetzen von Karten beim Prestige wird jetzt erklärt',
    6: 'Verbesserungslisten merken sich jetzt die zuletzt besuchte Seite',
    7: 'Zeigt einen Hinweis für neue Spieler, welche eine hohe Zone erreichen, ohne Monsterteile zu entdecken',
    8: 'Tooltips erklären jetzt die Werte vom Tiefengräber',
    9: 'Erfolge mit einem Relikt als Belohnung stellen jetzt im Tooltip klar, dass das Relikt bei der nächsten Erfolgsstufe als Belohnung gegeben wird',
    10: 'Die Schulfunktion sollte sich nie so anfühlen, als ob sie wegen ihrer Belohnung notwendig ist, sondern eher als eine Option, mit etwas freier Zeit einen kleinen Schub zu bekommen. Ich ändere deshalb das Belohnungssystem für diese Funktion etwas, um die Schule optionaler zu machen, besonders im frühen Spielverlauf, wo das Überspringen von Zeit einen viel größeren Einfluss hat.',
    11: 'Die Goldstaub-Belohnung wurde reduziert, wenn deine globale Stufe unter 250 liegt (linear)',
    12: 'Der "Streber"-Erfolg ist nun geheim, wodurch er nicht mehr die Edelsteine beschleunigt und nicht mehr für "Überflieger" zählt',
    13: 'Der X-Knopf in der Literatur erzeugt keinen Fehler mehr',

    // v1.1.0
    14: 'Im letzten Patch habe ich bereits einige Notlösungen implementiert, um die Schule angenehmer zu machen. Das hat zwar ein wenig dabei geholfen, den dauerhaften Grind zu reduzieren, aber nicht die Ursachen behoben. Dieses Rework soll den Zeitdruck nehmen, den einige Spieler empfunden haben. Außerdem soll es den Grind-Aspekt entfernen, ohne die aktive Möglichkeit zu nehmen, sich etwas Goldstaub zu erspielen. Gooboo soll ein langfristiges Idle-Game sein und kein aktives Incremental. Das war ebenfalls eine gute Gelegenheit, das intransparente Elo- und Notensystem zu überarbeiten.',
    15: 'Elo-System entfernt',
    16: 'Noten verfallen nicht mehr mit der Zeit',
    17: 'Du kannst nun zwischen freigeschalteten Noten wechseln',
    18: 'Lernen gibt keinen Goldstaub mehr als Belohnung',
    19: 'Grundwert Bucheinkommen pro Fach',
    20: 'Noten erhöhen das Bucheinkommen nicht mehr',
    21: 'Du kannst nun Schüler für Rubine kaufen, welche Bücher für dich sammeln',
    22: 'Zeit zum Lernen',
    23: 'Du erhältst nur noch Notenfortschritt, wenn du auf deiner besten Note lernst. Bei schlechten Ergebnissen kannst du auch Fortschritt verlieren',
    24: 'Üben: Hier kannst du das Fach ohne Zeitdruck ausprobieren und jederzeit gehen, bekommst aber keine Belohnungen',
    25: 'Prüfung: Du hast 1m 15s, um die höchstmögliche Punktzahl zu erreichen. Am Ende erhältst du Goldstaub als Belohnung, abhängig vom Ergebnis un von der ausgewählten Note',
    26: 'Prüfungspässe, sie sind nötig um Prüfungen zu schreiben. Bekomme jeden Tag mehr oder wenn du deine globale Stufe erhöhst, beim Überschreiten der Kapazität werden sie in Goldstaub umgewandelt',
    27: 'Anzahl der Noten reduziert (-- und ++ entfernt, sowie F- und F+). Die Schwierigkeit ist etwa 2/3 einer ganzen Note geringer (hattest du vorher ein C-- kannst du jetzt ein C+ erwarten)',
    28: 'Optimale Punktzahl für Mathe',
    29: 'Den Antwortknopf bei einem leeren Textfeld zu drücken zählt im Mathe-Minispiel nicht mehr als Fehler',
    30: 'Optimale Punktzahl für Literatur',
    31: 'Bei der Literatur werden jetzt Sätze aus einer zufälligen Wortliste statt zufällige Buchstaben verlangt. Zahlen, Groß- und Kleinschreibung sowie Sonderzeichen sind weiterhin Bestandteil für höhere Noten!',
    32: '"Noch am Lernen"-Strafmenge',
    33: '"Noch am Lernen"-Strafe wird bei globaler Stufe entfernt',
    34: 'Deine neue Note basiert auf deiner alten Note und Elo (was höher war). Prüfungspässe von vorherigen globalen Stufen werden rückwirkend erstattet',
    35: 'Perfekte Prüfungsergebnisse (2x optimale Punktzahl) beenden die Schule vorzeitig und bringen dich sofort zur nächsten Note',
    36: 'Extrazeit am Ende vom Geschichte-Minispiel bringt keine Bonuspunkte mehr, sondern beendet den Unterricht vorzeitig',
    37: 'Ein weiterer Hinweis wurde für neue Spieler hinzugefügt, welche schon Karten besitzen, aber noch keinen Prestige durchgeführt haben',
    38: 'Die Beschreibung des Tiefengräbers wurde um eine Sektion erweitert, welche das Tempo erklärt',
    39: 'Sollten die Prüfungspässe ausgehen, kannst du einen für 35 Saphire kaufen',
    40: 'Prüfungspässe wurden zu den möglichen Belohnungen von einigen kleinen Events hinzugefügt',
    41: 'Einstellungen wurden für kleine - mittelgroße Displays auf dem "Neues Spiel"-Bildschirm zentriert',

    // v1.1.1
    42: 'Bonus-Goldstaub-Belohnung bei Prüfungen pro Note',
    43: 'Perfekte Prüfungsergebnisse schalten nur noch die nächste Note frei, wenn die Prüfung auf der besten Note abgelegt wurde',
    44: 'Prüfungspass-Kapazität entfernt',

    // v1.1.2
    45: 'Die Art, wie Spielstände exportiert werden, wurde verändert. Damit sollten die Exportprobleme gelöst sein, die manche Spieler hatten',
    46: 'Es erscheint nun eine Benachrichtigung, wenn das automatische Speichern fehlschlägt',
    47: 'Der Notizhinweis kann nun auf dem Funktionen-Symbol gesehen werden',
    48: 'Ein Hinweis taucht auf, wenn Pflanzen reif sind',
    49: 'Kartenpakete zeigen nun die zugehörige Funktion',
    50: 'Aufgaben zeigen nun die zugehörige Funktion',
    51: 'Aktive Effekte zeigen nun die verbleibende Abklingzeit im Tooltip',
    52: 'Aktive Effekte klingen nun langsam ab, wenn deren Gegenstände nicht ausgerüstet sind',
    53: 'Bosse zeigen nun ihre Resistenz gegen biologischen Schaden im Schadensarten-Tooltip',
    54: 'Ausrüstungs-Sets wurden hinzugefügt',
    55: 'Seeleneinkommen beim Prestige wurde auf 10% - 100% reduziert, wenn du weniger als 8 Stunden im aktuellen Durchlauf bist',
    56: 'Die Formel für den Tiefengräber und für Tempoeffekte wurde überarbeitet und sollte jetzt in allen Spielphasen konsistenter sein',
    57: 'Die maximale Gräbertiefe kann jetzt erreicht werden',
    58: 'Der Tiefengräber-Tooltip zeigt jetzt die benötigte Zeit bis zu gewissen Tiefen an',
    59: 'Intervall zur Erhöhung der Prestige-Belohnung',
    60: 'Rundungsfehler wurden behoben, wenn Werte exakt 0 erreichen',
    61: 'Das Literatur-Minispiel ignoriert jetzt das erste Leerzeichen',
    62: 'Die Literatur vergibt jetzt Teilpunkte für Sätze, je nach richtig getippter Zeichenmenge',
    63: 'Die Wortmenge pro Satz wurde in der Literatur leicht gesenkt',
    64: 'Prüfungen haben jetzt eine Warnung im Tooltip, wenn das Stundenglas (fast) voll ist',
    65: 'Die Zeit bis zum nächsten täglichen Prüfungspass wird jetzt angezeigt',
    66: 'Das Autofortschritt-Limit vom Bergbau wird jetzt in den Einstellungen erklärt',
    67: 'Eine Option, relative Verbesserungswerte zu sehen, wurde hinzugefügt',
    68: 'Die gesamte Gebäude- und Wohnungszahl wird jetzt in der Gebäudeliste angezeigt. Spieler, die bereits gespielt haben, müssen eventuell ein Gebäude errichten, um die korrekten Zahlen zu sehen',
    69: 'Prüfungspässe können jetzt in Goldstaub umgewandelt werden',
    70: 'Premium-Herstellplätze werden jetzt bei der Edelstein-Verbeserung erklärt',
    71: 'Der Spielstand beinhaltet jetzt den aktuellen Tag im Namen',
    72: 'Nostalgie-Zerfall pro besiegtem Boss',
    73: 'Erbstücks-Chance von den meisten externen Quellen reduziert',
    74: 'Mindestmenge an besiegten Gegnern, um den Boss zu bekämpfen',
    75: 'Ritualwälzer-Seelenchance pro Stufe',
    76: 'Grundwert Seelenchance',
    77: 'Ein paar Edelstein-Verbesserungen haben günstige Anfangsstufen für den frühen Spielverlauf erhalten',
    78: 'Alle Ausrüstung kann mit einem Knopf abgelegt werden',
    79: 'Die Formulierung mancher Ausrüstungseffekte wurde angepasst, um noch genauer zu sein',
    80: 'Die 35 garantierten Seelen bei Zone 20 wurden entfernt',
    81: 'Erbstücke sind nicht mehr alle 10 Zonen garantiert',
    82: 'Der Nostalgieeffekt ist nicht mehr auf +50% begrenzt',
    83: 'Die Beschreibung vom "Tieflauf"-Erfolg wurde angepasst, um eine Verwechslung zwischen Metern und Minuten auszuschließen',
    84: 'Seelenmengen-Anstieg pro Zone',
    85: 'Grundwert Seelenmenge',
    86: 'Grundwert Erbstücks-Chance',
    87: 'Erbstücks-Chance-Modifikator pro Zone',
    88: 'Benachrichtigungen für Notizen auszustellen entfernt jetzt bereits vorhandene Hinweise',
    89: 'Über die letzten Tage ist es klar geworden, dass schnelle 15-Minuten-Prestiges mit Abstand die beste Strategie sind, um Seelen in der Horde zu sammeln. Durchläufe mit einem Tag Dauer konnten kaum die doppelte Seelenmenge sammeln, und vorhandene Elemente, um das zu verhindern, haben eindeutig versagt. Das widerspricht der Idle-fokussierten Philosophie von Gooboo, und obwohl aktives Spielen immer die effizienteste Option sein sollte, darf das niemals andere Arten des Fortschritts verdrängen. Diese Änderungen sollen den Unterschied zwischen Spielern mit schnellen Prestiges und anderen Spielern, die 1-2 Mal am Tag einen Prestige durchführen, senken',

    // v1.2.0
    90: 'Ein Rundungsfehler wurde behoben, wenn die Korruption bei genau 0 liegt',
    91: 'Ausrüstung, die noch nicht gefunden wurde, kann nicht mehr über Sets ausgerüstet werden',
    92: 'Ein Fehler wurde behoben, der nicht alle Schatzeffekte angewendet hat',
    93: 'Die Beschreibung zur globalen Stufe ist nun eindeutiger',
    94: 'Alle Ausrüstungseffekte werden jetzt korrekt angewendet, wenn der Spieler tot ist',
    95: 'Das Verbessern oder Löschen von Schätzen zeigt jetzt keine Fehlermeldung mehr an',
    96: 'Die Preise einiger später Gebäude wurden angepasst, um einen nahtlosen Übergang zu den neuen Inhalten zu gewährleisten',
    97: 'Der Tiefengräber zeigt jetzt nicht mehr 0s bis zur nächsten Tiefe an',
    98: 'Das Einkommen der Prestigewährung wird jetzt auch im Tiefengräber-Tooltip angezeigt',
    99: 'Goldmünzen zeigen nun deren Einkommen aus Nahrungsumwandlung an',
    100: 'Beschreibungen von Verbesserungen werden jetzt nach der ersten Stufe versteckt',
    101: 'Neue Beschreibungen für Verbesserungen wurden hinzugefügt, welche neue Spielelemente beinhalten',
    102: 'Die Goldchance wird jetzt wie andere Werte aufgelistet',
    103: 'Daten im Geschichte-Minispiel haben jetzt Textschatten für bessere Lesbarkeit',
    104: 'Ein paar Tooltips wurden umgeschrieben oder ergänzt, um die Nachtjagd besser zu erklären',
    105: 'Die Benutzeroberfläche wurde leicht angepasst',
    106: 'Tooltips für das Kaufen von Schätzen und Fragmenten wurden ergänzt',
    107: 'Bauernhof-Dünger zeigen jetzt ihre Effekte, wenn sie als Preis auftauchen',
    108: 'Der Essenz-Multiplikator durch die globale Stufe wird jetzt im Tooltip angezeigt',

    // v1.3.0
    109: 'Generalaufgaben haben jetzt Textschatten für bessere Lesbarkeit',
    110: 'Ausrüstung kann nun in der minimierten Ansicht verbessert werden',
    111: 'Inaktive Zeichen werden nun angezeigt',
    112: 'Die Anzahl sich verschiebender UI-Elemente, wenn Gegner bekämpft werden, wurde reduziert',
    113: 'Gegner brauchen jetzt Zeit zum Wiedererscheinen',
    114: 'Monsterteile werden nun bei Abwesenheit von Gegnern gesammelt',
    115: 'Minibosse wurden hinzugefügt, sie halten die Beute der alten Bosse',
    116: 'Bosse geben keine Beute mehr, aber erhöhen die Beutemenge von Minibossen',
    117: 'Seelenchance entfernt, Seelen sind jetzt garantiert',
    118: 'Erfolge zählen nur noch den Schaden von normalen Angriffen',
    119: 'Ein Fehler wurde behoben, wenn die Werte der Gegner unendlich hoch sind',
    120: 'Das Seeleneinkommen beim Prestige wird in den ersten 8 Stunden nicht mehr reduziert',
    121: 'Leere Sets können jetzt mit den aktuell ausgerüsteten Gegenständen befüllt werden',
    122: 'Manche Zeichen geben Gegnern aktive Angriffe',
    123: 'Aktive Effekte vom Spieler werden jetzt in aktive Angriffe und aktive Nützlichkeiten unterteilt',
    124: 'Aktive Angriffe ersetzen den nächsten normalen Angriff',
    125: 'Aktive Nützlichkeiten können jetzt mehrere Ladungen halten',
    126: 'Der Verstummungseffekt wurde hinzugefügt und verhindert aktive Angriffe',
    127: 'Betäubungsresistenz wird jetzt wie andere Werte angezeigt',
    128: 'Betäubungsresistenz von Bossen',
    129: 'Du erhältst jetzt -2 Boss-Anforderung für jeden besiegten Boss ab Zone 20',
    130: 'Boss-Anforderung hat jetzt einen Höchstwert von 50',
    131: 'Wiedererscheinungszeit hat jetzt einen Höchstwert von 5 Minuten',
    132: 'Die Effekte der meisten Erbstücke wurden verstärkt',
    133: 'Einige Elemente in der Horde haben jetzt Textschatten für bessere Lesbarkeit',
    134: 'Zeichen geben nun die Zone an, ab der sie auftauchen können',
    135: 'Türme hinzugefügt',
    136: 'Nostalgie erhöht nun die Erbstück-Chance der ersten paar Versuche, anstatt die Erbstück-Chance mit der Zeit zu erhöhen',
    137: 'Die Optik der Preisschilder wurde leicht angepasst',
    138: 'Korrupte Seelen haben nun eine Kapazität, die durch das Besiegen von Bossen erhöht werden kann',
    139: 'Die meisten Verbesserungen wurden angepasst, und einige wurden entfernt / hinzugefügt',
    140: 'Turmschlüssel wurden zu den möglichen Belohnungen von einigen kleinen Events hinzugefügt',
    141: 'Die Formulierung von Premium-Herstellplätzen wurde leicht angepasst, um genauer zu sein',
    142: 'Grundwert Knochen',
    143: 'Knochen-Anstieg pro Zone',
    144: 'Das Besiegen einer Zone erhöht die Knochenkapazität nicht mehr',
    145: 'Bosse geben keine gewöhnliche Beute mehr',
    146: 'Gegner erhalten jetzt +1 Betäubungsresistenz beim Toben',
    147: 'Der Angriff tobender Gegner kann nicht mehr reduziert werden',
    148: 'Ein Fehler wurde behoben, bei dem der "Auf Holz geklopft"-Erfolg die Summe und nicht den Höchstwert gezählt hat',
    149: 'Manche Karteneffekte wurden angepasst, um besser in die neue Horde zu passen',
    150: 'Das Kryolabor zählt jetzt jede Sekunde anstatt jede Minute',
    151: 'Pflanzenerfahrung zeigt jetzt an, dass die Menge für gewisse Pflanzen reduziert wird',
    152: 'Du kannst jetzt Trankrezepte anklicken, um sie als das aktuelle Ritual zu setzen',
    153: 'Die meisten aktiven Angriffe wurden angepasst und richten weniger Schaden an, betäuben aber auch länger',
    154: 'Der Erfolgshinweis bleibt jetzt bis er geschlossen wird, wenn ein Relikt als Belohnung gegeben wurde',
    155: 'Aufgrund der großen Unterschiede zwichen der alten und neuen Version der Horde wurden Verbesserungen zurückgesetzt und Anpassungen an anderen Fortschrittsformen vorgenommen. Denk\' daran, die Verbesserungen neu zu kaufen!',
    156: 'Der Effekt der "Mehr Knochen"-Edelsteinverbesserung wurde ab Stufe 3 abgeschwächt',

    // v1.3.1
    157: 'Ein Spielabsturz wurde behoben, wenn Schatzplätze leer waren',

    // v1.3.2
    158: 'Der Bonus der Hordenstufe beeinflusst jetzt auch Seelenkapazität',
    159: 'General-Relikte, die in v1.3.0 verloren gegangen sind, wurden wiederhergestellt',
    160: 'Für alle, die während der Events besondere Relikte gesammelt haben, gibt es keine Möglichkeit, diese den Spielständen zuzuordnen. Solltest du ein Backup vor Version v1.3.0 haben, kannst du es in dieser Version laden, um die Relikte wiederherzustellen',
    161: 'Das Erfahrungseinkommen wurde für die Horde gesenkt, abhängig von den gesammelten Seelen',
    162: 'Ausrüstung zeigt jetzt an, wenn sie auf die höchste Stufe verbessert wurde',
    163: 'Minibosse zeigen nun deren Beute im Erscheinen-Tooltip',
    164: 'Die Anforderung für die letzte Aufgabe von "Kampftraining" wurde erhöht',
    165: 'Erbstück-Chance pro Nostalgie',
    166: 'Die Werte des nächsten Gegners können jetzt gesehen werden, während auf Gegner gewartet wird',
    167: 'Der Tooltip normaler Gegner zeigt jetzt, dass beim Besiegen vom Boss alle Gegner neu erscheinen',
    168: 'Miniboss Angriffs-Multiplikator',
    169: 'Miniboss biologischer Schaden erlitten',
    170: 'Ein Fehler wurde behoben, bei dem manchen Spieler NaN bei korrupten Seelen angezeigt wurde',
    171: 'Abzeichen sollten im hellen Modus wieder gut lesbar sein',

    // v1.3.3
    172: 'Der Spottmodus wurde hinzugefügt, um das Erreichen vom Boss zu beschleunigen',
    173: 'Minibosse zählen jetzt als 4 besiegte normale Gegner',
    174: 'Ein Fehler wurde behoben, wenn aktive Nützlichkeiten mehrere Ladungen hatten. Der Text sollte jetzt im hellen Modus wieder lesbar sein',
    175: 'Die benötigte Stufe eines Horde-Relikts wurde angehoben, da mit dem Spottmodus schnellerer Fortschritt möglich ist',
    176: 'Ein Fehler mit der Knochenkalkulation wurde behoben, wenn die Prestige-Verbesserung "Milch" aktiv war',
    177: 'Aktive Angriffe der Gegner werden jetzt auf Zeichen angezeigt',
    178: 'Rohstoffe, die nicht vom gesamten Rohstoffeinkommen beeinflusst werden, zeigen das jetzt im Rohstoff-Tooltip an',

    // v1.3.4
    179: 'Alle Abhängigkeiten wurden auf die neuste Version aktualisiert. Hierdurch könnten unerwartete Fehler entstehen, der Release-Prozess wird dadurch aber in der Zukunft beschleunigt',
    180: 'Zufälliges Vorwürfeln wurde durch einen Würfelmechanismus mit Seed ersetzt',
    181: 'Das Anti-Schummel-System beim Herstellen von Spitzhacken lässt sich nicht mehr durch das Herstellen schlechter Spitzhacken austricksen',
    182: 'Bosse und Minibosse haben nun die selben Zeichen, bis sie besiegt sind',
    183: 'Spielstände sind jetzt enkodiert und nutzen die .txt-Endung',
    184: 'Durch Optimierungen und andere Änderungen sollten Spielstände für den durchschnittlichen Spieler ~30% kleiner sein',
    185: 'Sollte das Laden oder Importieren eines Spielstands scheitern, wird jetzt eine Fehlermeldung angezeigt',
    186: 'Zukünftige Verbesserungsstufen können jetzt eingesehen werden',
    187: 'Die Funktionsliste sollte jetzt auf allen Mobilgeräten vollständig sichtbar sein',
    188: 'Eine Fehlermeldung wurde behoben, die manche Spieler beim Betrachten von Preisschildern erhalten haben',
    189: 'Ein neuer Wert wurde hinzugefügt, der Teilungsschilde schneller zerbricht',
    190: 'Knöpfe zum Auf- / Abstieg von 10 Metern wurden hinzugefügt',
    191: 'Knöpfe zum Vor- / Rückwärtsgehen von 10 Zonen wurden hinzugefügt',
    192: 'Die Notizen-UI wurde in der Desktopansicht verändert - Notizen werden jetzt durch Herüberfahren mit der Maus oder Klick gelesen',
    193: 'Eine neue Notizart wurde hinzugefügt, welche nicht mit Characteren oder Geschichte vom Spiel verbunden sind',
    194: 'Relikte mit Bonuswerten zeigen jetzt die Funktion an, von der der Wert stammt',
    195: 'Opfergaben haben jetzt einen Indikator mit Tooltip, wenn sie im aktuellen Durchlauf noch nicht freigeschaltet sind',
    196: 'Die Offline-Zusammenfassung wird jetzt immer bei einer neuen Version angezeigt',
    197: 'Buch-Verbesserungen zeigen jetzt die verbundene Verbesserung an',
    198: 'Das Kunst-Minispiel funktioniert jetzt richtig',
    199: 'Verbesserungen, die durch Bücher eine höhere Maximalstufe haben, skalieren nun immer linear, nachdem die eigentliche Maximalstufe überschritten wird',
    200: 'Eine Tastenbelegung für die vorherige Funktion wurde hinzugefügt',
    201: 'Du erhältst jetzt 5 mal so viel Nostalgie aus allen Quellen',
    202: 'Seelenkapazität verdoppelt',
    203: 'Die Preise von Prestige-Verbesserungen wurde im mittleren Spielverlauf erhöht',
    204: '"Rote Karte" Bonus-Monsterteil-Kapazität',
    205: 'Grundwert Knochen-Kapazität',
    206: 'Die Ausrüstung "Kaputte Stoppuhr" wurde von Zone 40 nach 31 verschoben und ist jetzt wesentlich leichter zu finden',
    207: 'Die Ausrüstung "Reinigende Quelle" wurde von Zone 32 nach 40 verschoben',
    208: 'Knocheneinkommen-Anstieg pro Stufe der "Monstersuppe"-Verbesserung',
    209: 'Ein Fehler wurde behoben, bei dem manche Bücher nicht freigeschaltet wurden',
    210: 'Schätze können nun durch Ziehen verschoben werden',
    211: 'Die Beschreibung vom Gartenzwerg gibt jetzt an, dass er auf dem Feld platziert werden muss, um seinen Effekt zu geben',
    212: 'Kleine Events sollten nun für jeden gleich sein',
    213: 'Sämtliche Eventinhalte basieren jetzt auf einem Seed',
    214: 'Sämtliche aktive Angriffe, welche Betäubungen entfernen, können jetzt während Betäubungen verwendet werden',
    215: 'Grundwert Goldchance',
    216: 'Die Goldkosten einiger früher Verbesserungen wurde gesenkt',
    217: 'Gen: Wachstumszeit-Reduzierung',
    218: 'Gen: Ertrag-Anstieg',
    219: 'Gen: Goldchance-Anstieg',
    220: '"Doppelt"-Gen: Anstieg für Chance auf seltenen Ertrag',
    221: 'Die Erfolge "Nihilist" und "Schwarzes Loch" geben jetzt korrekt an, dass sie Opfer statt Opfergaben zählen',
    222: 'Du kannst nun Verbesserungen in der minimierten Ansicht maximal kaufen',
    223: 'Gen: Erfahrung-Anstieg',
    224: 'Eine experimentelle Einstellung wurde hinzugefügt, um Timer für Rohstoffeinkommen anzuzeigen',
    225: 'Der Tooltip zum Herstellen einer Spitzhacke erklärt nun Erz-Qualität',
  },
  v: {
    1: {
      0: 'Ein explosiver Anfang',
      1: 'Direktor ersetzt!',
      2: 'Der Umwelt zuliebe',
      3: 'Endlose Bosse',
    }
  }
}
