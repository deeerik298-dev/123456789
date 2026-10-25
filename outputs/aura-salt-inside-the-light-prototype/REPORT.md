# Raport — korekta po otrzymaniu referencji

Otrzymano i obejrzano oba oryginały Irka. Poprzednie tło panelu z kruchami odrzucono. Usunięto ruchome pasmo i kosztowne maski; zachowano markę, hasło i oddzielny folder prototypu. Treść przewija się normalnie przez trzy odcinki na jednym ciągłym tle z cegły.

## Testy Kalinki
Chromium headless, file://, 390/768/1440 ×900 px, pozycje 0/25/50/75/100%. Łącznie 15 zrzutów i 4 funkcjonalne PASS (w tym bez JS). Sprawdzono normalny ruch treści, pełnoekranowe tło, brak poziomego scrolla i masek, postęp globalnego światła 0,10→0,20, Enter na przycisku, reduced-motion, brak błędów JS. Obejrzano desktop początek oraz mobilny i desktop koniec/środek. Nie jest to niezależna kontrola Tanii.

Pomiar pomocniczy podczas przewijania: 59 odstępów rAF na ekran.
- 390 px: mediana 16.6 ms, maksimum 18.4 ms.
- 768 px: mediana 16.6 ms, maksimum 27.0 ms.
- 1440 px: mediana 25.0 ms, maksimum 34.7 ms.

Lepszy wynik niż w poprzedniej próbie, ale nie gwarancja 60 FPS na urządzeniach fizycznych. Nie testowano fizycznego telefonu ani Safari/iOS. Nie wykonano pełnego audytu WCAG/kontrastu.

## Ograniczenia
Kadr pochodzi z rzeczywistego zdjęcia produktu; brak wygenerowanych detali. Efektywny wycinek 760×450 jest skalowany na ekran, więc nie jest ostrym makro 4K. Nie przedstawiam zdjęcia jako obrazu wnętrza kryształu. Subtelność i odczucie naturalnego światła wymagają oceny Irka w ruchu. Tekst demonstracyjny nie rozszerza zatwierdzonej oferty.

Szczegóły źródeł w sources.json. Oryginały zachowane. Polityki witryn, hosting i działające strony bez zmian.
