#default HTML 5 template

##Javascript
- pokud to opravdu není nutné nevkládejte inline javascript, snažte se řešit jej obecně například v custom.js
- javascript se snažte umísťovat do patičky 
- pokud opravdu nutně zvažujete použití již hotové knihovny, zamyslete se nejříve nad tím jestli jí opravdu potřebujete pro dané použití, někdy stači se zamyslet a napsat ty dva řádky pomoci v jQuery v custom.js

##CSS
- základam oprimalizace pro prohlížeče je sjednocení a normalizace stylů https://github.com/necolas/normalize.css
- vždy volejte nejdříve CSS knihovny, které používáte, až poté volejte své vlastní
- vše co je dáno grafikou patří do CSS -> tzn. vyhněte se vkládání obrázku tagem <img />
- definice v css * {margin:0;padding:0;} je opravdu zbytečné a nesmyslná, důvod k tomu je, že obsah vložený skrze wysiwyg webmasterem následně musíte stylovat celý. 
- aby se v tom prase vyznalo -> sjednodujte si stejné prvky v CSS, použití CSS3 si definujte zvlášt

##Nejčastější chyby v HTML a CSS struktuře
- předivování -> nadbytečné množství zbytečných obalů
- milionkrát definované -> stejné prvky se stejnými vlastnostmi do jedné skupiny pojmenování a ta je teprve rozšiřována
- pouze jeden nadpis h1? -> pokud klient má nástroj jako je wysiwyg, tak může do obsahu stránky vkládat cokoli 
- špatné pozicování -> pokud již absolutně něco pozicujeme, je nutné definovat obě souřadnicové hodnoty
- HTML5 -> při použití HTML5, je dobré vědět, že bez JS pro rozpoznání elementů si neškrtneme, řešení -> identifikátory a třidý vkládat na již známe elementy z HTML
- neustále clearování -> špatné pochopení blokových a neblokových prvků, né za každou cenu se musí vždy clearovat
- nikdy ne jenom href="#"! -> důvod vypnutý JS, pak tato kotva totiž ztrácí smysl
- drobečkovou navigaci a paginátor -> patří do seznamu 
- nikdy display:none! -> vytvoření speciální třídy například "hide" a její skrytí javascriptem
- ano, znamená to stylovat i případ pokud je javascript vyplý 
- milión identifikátoru a tříd -> mnohonásobné volání několika rúzných tříd za sebou viz: #header .container #nav-main li a
- jakýkoli odkaz, který nemá vyloženě potenciál tlačítka, potrhávejte a na hover, teprve měňte 
- nebojte se používat patřičně nástroje pro kontrolu rád používám http://gtmetrix.com