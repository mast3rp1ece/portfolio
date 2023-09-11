import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import  i18n  from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import translationEN from './en.json';
import translationUK from './uk.json';
import { Provider } from 'react-redux';
import store from './redux/store';

i18n
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      uk: {
        translation: translationUK,
      },
    },
    fallbackLng: 'en',
    debug: true,
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <I18nextProvider i18n={i18n}>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </I18nextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
