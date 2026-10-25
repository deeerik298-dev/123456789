# Raport korekty Kalinki — 25.10.2026

Odczytano zatwierdzony komentarz Tanii 6399055826. Zmieniono istniejący prototyp, bez przebudowy projektu i bez zmian witryn. Kopia poprzedniej paczki: work/salt-light-before-correction.zip (poza dostarczaną paczką).

## Wykonano
- Dłuższy scroll 450 svh, zakotwiczony viewport, stała geometria i kadrowanie tła.
- Pionowy postęp światła góra→dół zamiast wcześniejszego ruchu po przekątnej.
- Dwie dokładnie dopasowane warstwy tej samej autentycznej fotografii: przygaszona oraz jaśniejsza odsłaniana miękką maską. Jasność nadal wynika z fotografii; brak dodanych fikcyjnych żyłek. To efekt graficzny, nie symulacja przezierności.
- Usunięto kosztowną dodatkową maskę luminancji po pomiarach. Nadal wymagana optymalizacja wydajności.
- Ukryto zachętę do animacji bez JS; statyczny fallback i preferencja ograniczonego ruchu.

## Wyniki rzeczywistych testów
Chromium headless, lokalny file://; ekrany emulowane, nie fizyczne urządzenia. Zrzuty 0/25/50/75/100% dla każdej szerokości. 4 funkcjonalne PASS: 390,768,1440 oraz bez JS. PASS nie oznacza spełnienia wymagań płynności ani finalnej fotografii.
Sprawdzono: postęp z tolerancją 0,002, pozycja sticky 0 px, stała transformacja materiału, brak poziomego przepełnienia, skip-link klawiaturą, Enter dla trybu statycznego i powrotu, reduced-motion po zmianie i resize, brak błędów JS/konsoli i żądań HTTP(S). Zmiana preferencji systemowej jest obsługiwana także przy kolejnym scroll/resize, jako zabezpieczenie przed niedostarczonym zdarzeniem change.

## Pomiar płynności — ograniczenie pozostaje
W każdym ekranie 59 odstępów requestAnimationFrame podczas programowego przewijania. To pomocniczy pomiar środowiska headless, nie benchmark fizycznego telefonu ani gwarancja FPS.
- 390 px: mediana 23.8 ms; maksimum 58.5 ms.
- 768 px: mediana 75.3 ms; maksimum 154.8 ms.
- 1440 px: mediana 132.4 ms; maksimum 241.6 ms.
Wyniki wskazują opóźnienia, szczególnie na desktopie tego środowiska. Nie zatwierdzam płynności; potrzebna dalsza optymalizacja po doborze właściwego zdjęcia. Brak testów Safari/iOS, fizycznego Androida, sieci mobilnej, pełnego WCAG.

## Ocena wizualna
Obejrzano zrzuty desktop 0/50/100% i mobilny 50%: bez białych marginesów, stabilny materiał i widoczne zmiany oświetlenia, czytelna treść. Zapisano wszystkie 15 punktów; nie deklaruję niezależnej kontroli Tanii ani pełnego pomiaru kontrastu. Wyostrzenia lub nowych detali nie dodawano.

## Źródło i licencja
Niezmienione zdjęcie partnera nr 217, 2754×2722, JPEG 3 905 146 B. Adresy źródłowe i SHA256 w README. Zgoda partnera potwierdzona wcześniej przez Irka, bez nowego niezależnego badania licencji. Nie usunięto oznaczeń z pliku. Zdjęcie pokazuje panel z kryształami, NIE pożądaną cegłę z żyłkami ani wnętrze jednego kryształu. Żadnych innych zdjęć nie podmieniono.

## Blokady i błędy do kontroli
1. Wysoki — brak obu wskazanych referencji. Tania potwierdziła, że ich nie posiada i nie może podać URL/ścieżek. Poproszono Irka o linki lub ścieżki. Nie można zatwierdzić finalnego tła.
2. Wysoki — niepotwierdzona płynność, duże odstępy klatek w pomiarze. Pliki assets/prototype.css i assets/prototype.js. Odtworzenie: przewijać demo, porównać pomiar w review/correction/tests.json.
3. Średni — duży oryginał 3,9 MB i przybliżenie CSS: nie gwarantuje ostrego makro przy wysokim DPR/4K. Docelową optymalizację trzeba oprzeć na właściwym pliku.

## Dostarczenie
Lokalny folder i ZIP zawierają kompletny prototyp, README, raport, oryginał i zrzuty. GitHub zawiera rzeczywisty kod, zdjęcie oraz JSON bieżących testów; zrzuty w lokalnym ZIP. Tania otrzymuje link do commitu. Niczego nie wdrażano. Status: mechanizm skorygowany do oceny, całość korekty NIE jest ostatecznie ukończona.
