# Raport Kalinki — 25.10.2026

## Ustalony stan
Odczytano zadania #1 i #2. Repozytorium przed pracą zawierało status AURA SALT i archiwum AURA INTERIUM. Nie znaleziono folderu zapisanego prototypu ani procesu node/python w odczycie Get-Process. Nie dowodzi to przyczyny wcześniejszego przerwania; nie można potwierdzić „zawieszenia”. Wykorzystano istniejącą bibliotekę, przygotowując tylko oddzielny prototyp.

## Wyniki
Rzeczywista przeglądarka Chromium headless, lokalny file://, emulowane ekrany 390 × 900, 768 × 900, 1440 × 900. Każdy: początek/połowa/koniec przewijania zmieniały pozycję światła; Enter przełączał tryb statyczny i przywracał ruch; prefers-reduced-motion włączał statyczne światło i blokował wymuszanie ruchu. Brak poziomego przepełnienia, błędów JS i żądań HTTP(S). Dodatkowy test 390 px bez JavaScript: treść widoczna, nieaktywny przycisk ukryty. Łącznie 4 przypadki PASS. Szczegóły: review/tests.json.

Oceniono wzrokowo zrzuty 1440 i 390 px w połowie przewijania: tekst i kontrolki czytelne, bez nakładania, autentyczna ziarnista powierzchnia soli; światło delikatne. Zapisano także początek oraz wariant bez JS. To własna kontrola Kalinki.

## Ograniczenia i priorytety
- Średni: fotografia przedstawia powierzchnię panelu, a nie wnętrze jednego kryształu. Plik assets/salt-original.jpg. Odtworzenie: otworzyć oryginał i porównać z założeniem issue #1. Użyto tego materiału celowo, zachowując rzeczywistą sól; do pełnej zgodności potrzebne inne zdjęcie zatwierdzone przez Irka.
- Średni: gradient CSS jest płaską interpretacją światła, nie modelem kolejnych warstw. Pliki assets/prototype.css i prototype.js. Odtworzenie: przewinąć od początku do końca. Nie należy używać prototypu jako dowodu efektu rzeczywistego produktu.
- Średni: zdjęcie 3,9 MB, bez optymalizacji kopii. Oryginał zachowano; nie deklaruje się optymalnej wydajności produkcyjnej ani 4K.
- Nie wykonano pomiaru FPS/GPU ani Lighthouse; nie potwierdzono płynności na fizycznym telefonie, Safari/iOS ani urządzeniu o małej mocy. Nie deklaruje się stałych 60 FPS. Aktualizacja jest limitowana requestAnimationFrame, bez filmu i ciągłego timera.
- Nie przeprowadzono pełnego audytu WCAG ani pomiaru kontrastu wszystkich pikseli zdjęcia. Klawiaturą sprawdzono przycisk Enter; nie jest to pełny test czytnika ekranu.
- Wariant bez JS zachowuje statyczne światło; zachęta scroll nie oznacza wtedy animacji.

## Decyzja
Gotowy prototyp do kontroli, nie ostateczna zgodność z całą wizją. Tania powinna ocenić rzeczywiste pliki; Irek decyduje, czy kierunek światła i zdjęcie są odpowiednie. Bez publikacji i zmian istniejących stron.
