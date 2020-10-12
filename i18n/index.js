// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import intro from './landing/intro.json';
// import header from './header/header.json';
// import footer from './footer/footer.json';
// import projects from './projects/projects.json';
// import resume from './resume/resume.json';
// import skills from './skills/skills.json';
// import contactform from './contact/contactform.json';

// i18n.use(initReactI18next).init({
//   // resources,
//   lng: 'en',
//   keySeparator: false,
//   interpolation: {
//     escapeValue: false,
//   },
// });

// // i18n resource bundles for views
// const i18nResourceBundlesViews = [
//   {
//     intro: {
//       en: { ...intro.en },
//       ja: { ...intro.ja },
//     },
//   },
//   {
//     projects: {
//       en: { ...projects.en },
//       ja: { ...projects.ja },
//     },
//   },
//   {
//     resume: {
//       en: { ...resume.en },
//       ja: { ...resume.ja },
//     },
//   },
//   {
//     skills: {
//       en: { ...skills.en },
//       ja: { ...skills.ja },
//     },
//   },
//   {
//     contactform: {
//       en: { ...contactform.en },
//       ja: { ...contactform.ja },
//     },
//   },
// ];

// // i18n resource bundles for components
// const i18nResourceBundlesComponents = [
//   {
//     header: {
//       en: { ...header.en },
//       ja: { ...header.ja },
//     },
//   },
//   {
//     footer: {
//       en: { ...footer.en },
//       ja: { ...footer.ja },
//     },
//   },
// ];

// // Load i18n resource bundles from each resource object
// const getI18nResourceBundles = (resource) => {
//   const key = Object.keys(resource)[0];
//   const enBundle = resource[key].en;
//   const jaBundle = resource[key].ja;
//   // English translations
//   i18n.addResourceBundle('en', key, enBundle);
//   // Japanese translations
//   i18n.addResourceBundle('ja', key, jaBundle);
// };

// // i18n resource bundles for views
// i18nResourceBundlesViews.forEach((resource) => {
//   getI18nResourceBundles(resource);
// });

// // i18n resource bundles for components
// i18nResourceBundlesComponents.forEach((resource) => {
//   getI18nResourceBundles(resource);
// });

// export default i18n;
