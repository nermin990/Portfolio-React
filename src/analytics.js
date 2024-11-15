import ReactGA from 'react-ga4';

export const initGA = () => {
    ReactGA.initialize('G-YHGELWXGS6'); // Ubaci ovde svoj Measurement ID
};

export const trackPageView = () => {
    ReactGA.send('pageview');
};
