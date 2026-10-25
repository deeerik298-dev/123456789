# AURA SALT — wspólny status projektu

Aktualizacja: 25 października 2026, Europe/Amsterdam.
**Status: lokalna wersja robocza v0.1, niezatwierdzona do publikacji.**

## 1. Co zostało wykonane
- Opracowano nowe szkice tekstów NL/EN za zgodą Irka. To nowe copy do kontroli, nie wcześniej zatwierdzony dokument.
- Zbudowano statyczną stronę HTML/CSS/JS: wersja NL, EN, dwa szkice polityki prywatności i strona 404.
- Sekcje: Hero, Zoutwanden, Werkwijze, Toepassingen, Aanvullend, Materiaal en zorg, Galerij, FAQ, Contact, stopka.
- Zastosowano wyraźne placeholdery zamiast niezatwierdzonych zdjęć; tokeny danych firmy pozostają widoczne zgodnie z ostatnią instrukcją.
- Przygotowano bibliotekę 361 unikalnych plików partnera i osobne próbki wizualne. Nie wszystkie pliki są fotografiami realizacji. Nie są automatycznie zatwierdzone do strony.
- Aktualna paczka wizualizacji z 18.10: salon, TV, recepcja i suchy relaks, cztery PNG 1536 × 1024. To koncepcje AI, nie portfolio firmy ani zatwierdzenie wykonawcze.

## 2. Co aktualnie działa i co sprawdzono
Zapisane raporty poprzednich testów:
- 10 konfiguracji NL/EN × 375, 390, 768, 1280 i 1440 px: PASS.
- Dodatkowo trzy strony privacy/404 przy 375 px i nawigacja bez JavaScript: PASS. Łącznie 14 przypadków.
- Menu mobilne i Escape, klawiatura/skip link, FAQ, zmiana języka z zachowaniem kotwicy, docelowe adresy linków kontaktowych.
- W zapisanych testach: brak błędów JavaScript, zewnętrznych żądań, poziomego przepełnienia, cookies i zapisu localStorage/sessionStorage.
- Walidacja html-validate pięciu stron: PASS po poprawkach.
- **Lighthouse: brak prawidłowych wyników.** Zapisany raport zawiera błędy połączenia lokalnego; nie wolno podawać punktacji jako uzyskanej.
- 25.10 ponownie odczytano raporty oraz statycznie sprawdzono lokalne pliki i kotwice: brak brakujących celów. Testów przeglądarkowych nie uruchamiano ponownie tego dnia.
- Nie wykonano testów na fizycznym telefonie, testu wysyłki wiadomości, prototypu ściany ani badań konstrukcyjnych.

## 3. Co wymaga poprawy lub potwierdzenia
- Brakuje README, końcowego raportu i archiwum strony `aura-salt-site-v0.1.zip`.
- Trzeba ukończyć wiarygodny pomiar Lighthouse lub jawnie pozostawić ograniczenie.
- Teksty, wygląd, materiały i polityki wymagają kontroli Tanii oraz akceptacji Irka.
- Żadne zdjęcia nie zostały zatwierdzone do strony: obecne placeholdery są zamierzone.
- W głównych HTML jest po 15 wystąpień `[[`, w politykach po 11. To liczba znaczników otwierających, nie liczba unikalnych brakujących danych; część występuje też w etykietach dostępności.
- Polityki CONCEPT/DRAFT wymagają potwierdzenia danych i procesów AURA SALT, odbiorców, podstaw i retencji oraz faktycznych usług hostingu. Nie podstawiać samodzielnie danych AURA INTERIUM wbrew ostatniemu poleceniu zachowania tokenów.
- Canonical/hreflang i sitemap wskazują planowane aurasalt.nl; nie stanowią dowodu uruchomienia domeny.
- Całość ma noindex,nofollow, robots blokuje indeksowanie. Nie usuwać tych ustawień dla poprawy wyniku testu.
- Wizualizacje mają ograniczenia wierności faktury i skali. Materiał, światło, mocowanie, ciężar, warunki wilgotności i serwis LED wymagają potwierdzenia wykonawcy.

## 4. Lokalizacja i struktura
Lokalny katalog roboczy Kalinki:
`C:\Users\Admin\Documents\Codex\2026-10-10\https-aurainterium-nl-https-aurainterium-nl\`

Bieżąca strona:
`outputs/aura-salt-site-v0.1/`

```text
aura-salt-site-v0.1/
  index.html
  en.html
  privacy.html
  privacy-en.html
  404.html
  robots.txt
  sitemap.xml
  assets/
    site.css
    site.js
    favicon.svg
```

To 10 plików, bez backendu i zdjęć.
Materiały poza katalogiem strony:
- `outputs/AURA-SALT-TEKSTY-NL-EN-v0.1.md` i `.json`
- `outputs/AURA-SALT-v0.1-KONTROLA/`: walidacja, wyniki i zrzuty testów
- `outputs/AURA-SALT/`: biblioteka źródłowa partnera
- `outputs/AURA-SALT-2026-10-18-CZTERY-WNETRZA/` oraz ZIP: ostatnie cztery koncepcje
- `outputs/AURA-SALT-STAN-KONTROLA-2026-10-25.json`: dzisiejsza inspekcja statyczna
- `outputs/AURA-SALT-STATUS.md`: lokalna kopia tego statusu

## 5. Repozytorium i wspólna komunikacja
Repozytorium: https://github.com/deeerik298-dev/123456789
Gałąź: main. Repozytorium jest publiczne.
Przed dodaniem tego statusu zawierało wyłącznie `AURA-V4-1-DLA-TANII-KOMPLET.zip`, dotyczący AURA INTERIUM.
**Kod AURA SALT nie został jeszcze zsynchronizowany na GitHub.** Lokalny folder nie jest checkoutem Git i nie ma skonfigurowanego remote.
Nie założono nowego repozytorium, nie zmieniono archiwum AURA INTERIUM i nie wysłano całego lokalnego workspace.
W chwili sprawdzenia drzewo nie zawierało workflowów Actions, a API repozytorium wskazywało has_pages=false. Dodanie tego dokumentu nie jest wdrożeniem strony.
GitHub może służyć jako wspólne, wersjonowane miejsce statusu. W tej operacji dodawany jest wyłącznie dokument statusowy; nie ma w nim haseł, tokenów ani danych dostępowych.
Sama lokalna ścieżka nie udostępnia plików czatowi Tanii w chmurze. Do kontroli strony potrzebne będzie świadome przekazanie właściwych plików, z wyraźnym oddzieleniem od AURA INTERIUM.

## 6. Co zrobić przed uruchomieniem
1. Domknąć jedną lokalną v0.1: README, raport, ZIP i aktualne sumy kontrolne.
2. Przekazać Tanii rzeczywiste pliki i uzyskać niezależną kontrolę — nie same opisy Kalinki.
3. Zatwierdzić teksty, zdjęcia, wygląd i kompletne polityki przez Irka.
4. Potwierdzić dane AURA SALT, szczegóły współpracy i techniczne granice oferty.
5. Sprawdzić docelowy hosting/domenę, konfigurację HTTPS, błędy404 i ustawienia produkcyjne. Nie wykonywano tych działań.
6. Dopiero po decyzji Irka przygotować właściwą paczkę produkcyjną i zmienić blokady indeksowania tam, gdzie zostało to zatwierdzone.
7. Publikację wykonuje wyłącznie Irek, następnie potrzebna będzie kontrola działającej domeny.

## 7. Proponowane następne zadanie
**Kontrola tego statusu przez Tanię**, bez równoległej budowy i nowych wizualizacji.
Po decyzji Irka: dokończenie i spakowanie istniejącej lokalnej v0.1 do niezależnego przeglądu. Nie zaczynać kolejnego projektu od zera.

## Zatwierdzone założenia i role
AURA SALT opracowuje koncepcję i dostarcza materiały Solne Wnętrza; AURA INTERIUM wykonuje montaż. Główny temat: ściany z cegieł solnych z LED, białe/pomarańczowe cegły frezowane pod profil. Panele, obrazy i lampy wyłącznie uzupełniająco. NL domyślny, EN dodatkowy. Bez cen, deklaracji zdrowotnych i fikcyjnych realizacji.
Tania: koncepcje i niezależna kontrola. Kalinka: realizacja, testy i kontrola instrukcji. Irek: ostateczne decyzje i jedyny publikujący.
Żaden opis ukończonej kontroli Kalinki nie stanowi automatycznie niezależnej kontroli Tanii ani akceptacji Irka.
