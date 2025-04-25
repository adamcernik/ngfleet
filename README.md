# NG Fleet Website

Náborová stránka pro kurýry a řidiče, kteří chtějí pracovat přes NG Fleet (Wolt, Bolt Food, Uber, Bolt atd.).

## Technologie

- HTML, CSS, JavaScript
- Firebase (autentizace a databáze)
- Google Auth (přihlašování)
- Responzivní design (mobile-first přístup)

## Struktura webu

- **Homepage**: Úvodní stránka s představením služby a CTA tlačítky
- **Kurýr**: Podstránka s informacemi pro kurýry
- **Řidič**: Podstránka s informacemi pro řidiče
- **Výhody spolupráce**: Informace o výhodách spolupráce a ceník půjčovny dopravních prostředků
- **Registrační formulář**: Formulář pro registraci nových zájemců
- **Ověření dokladů**: Sekce pro ověření identity a dokladů
- **FAQ a Kontakt**: Sekce s častými dotazy a kontaktními informacemi

## Spuštění projektu

1. Naklonujte repozitář
2. Otevřete soubor `index.html` v prohlížeči
3. Pro plnou funkcionalitu je potřeba nakonfigurovat Firebase (viz níže)

## Konfigurace Firebase

Pro správnou funkci webu je potřeba vytvořit projekt v Firebase a aktualizovat konfiguraci v souboru `js/firebase-config.js`:

```javascript
const firebaseConfig = {
    apiKey: "VÁŠ_API_KLÍČ",
    authDomain: "vas-projekt.firebaseapp.com",
    projectId: "vas-projekt",
    storageBucket: "vas-projekt.appspot.com",
    messagingSenderId: "VÁŠ_MESSAGING_SENDER_ID",
    appId: "VAŠE_APP_ID"
};
```

## Kontakt

Pro více informací kontaktujte správce projektu. 