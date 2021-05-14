import React from 'react';
import PropTypes from 'prop-types';

const Cow = ({ className }) => (
  <svg id="Capa_1" className={className} enableBackground="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path d="m181.255 65.378c-18.826 7.846-34.592 17.915-47.831 29.689-15.462-3.761-24.971-6.638-41.202-7.46-6.519-16.52-11.758-36.149-13.707-58.779-1.04-12.06 5.899-22.97 17.267-27.15 11.338-4.18 23.675-.38 30.684 9.45 8.518 11.941 27.454 35.68 54.789 54.25" />
      <path d="m330.845 65.378c18.826 7.846 34.592 17.915 47.831 29.689 15.462-3.761 24.971-6.638 41.202-7.46 6.519-16.52 11.758-36.149 13.707-58.779 1.04-12.06-5.899-22.97-17.267-27.15-11.338-4.18-23.675-.38-30.684 9.45-8.518 11.941-27.454 35.68-54.789 54.25" />
      <path d="m311.649 372.222c-26.175-32.929-40.592-76.519-40.592-122.728s14.417-89.788 40.592-122.728c7.738-9.74 16.237-18.22 25.345-25.369-24.948-14.428-57.073-21.734-80.944-21.24h-.05c-23.515-.28-55.469 6.93-80.654 21.51 8.978 7.09 17.357 15.48 25.005 25.1 26.175 32.939 40.592 76.519 40.592 122.728s-14.417 89.798-40.592 122.728c-13.527 17.01-29.354 30.189-46.661 39.099 1.31 4.13 2.4 8.32 3.249 12.52 10.448 52.259 44.452 88.158 99.111 88.158 54.159 0 88.153-34.959 99.121-88.168.85-4.18 1.93-8.35 3.219-12.47-17.337-8.91-33.193-22.1-46.741-39.14zm-82.474 82.449c-7.688 0-14.227-5.88-14.917-13.68-.79-8.95-7.828-14.11-9.068-14.96l15.347-25.78c2.18 1.3 21.416 13.42 23.595 38.099.775 8.753-6.117 16.321-14.957 16.321zm68.667-13.68c-.73 8.256-8.011 14.354-16.257 13.62-8.248-.73-14.347-8.01-13.617-16.26 2.18-24.68 21.416-36.799 23.595-38.099l15.347 25.78c-1.24.849-8.278 6.009-9.068 14.959z" />
      <path d="m150.161 120.417c-31.114 29.64-42.912 70.479-42.912 113.808 0 69.259 20.316 121.648 34.323 149.527 40.692-21.9 69.376-73.829 69.376-134.258.001-56.079-24.704-104.848-60.787-129.077zm16.057 156.017c-8.288 0-14.997-6.72-14.997-15 0-8.29 6.709-15 14.997-15 8.278 0 14.997 6.71 14.997 15 0 8.28-6.719 15-14.997 15z" />
      <path d="m301.151 249.495c0 60.429 28.684 112.358 69.376 134.258 14.007-27.88 34.323-80.269 34.323-149.527 0-43.329-11.798-84.168-42.912-113.808-36.082 24.228-60.787 72.997-60.787 129.077zm29.734 11.939c0-8.29 6.719-15 14.997-15 8.288 0 14.997 6.71 14.997 15 0 8.28-6.709 15-14.997 15-8.278 0-14.997-6.72-14.997-15z" />
      <path d="m512 171.506c0 12.44-6.039 24.12-16.167 31.259-18.138 12.786-38.907 21.143-61.138 22.65-1.232-37.634-10.713-74.272-32.854-105.118 33.767-7.75 66.567.627 93.992 19.96 10.128 7.139 16.167 18.819 16.167 31.249" />
      <path d="m0 171.506c0 12.44 6.039 24.12 16.167 31.259 18.138 12.786 38.907 21.143 61.138 22.65 1.232-37.634 10.713-74.272 32.854-105.118-33.767-7.75-66.567.627-93.992 19.96-10.128 7.139-16.167 18.819-16.167 31.249" />
    </g>
  </svg>
);

Cow.defaultProps = {
  className: 'cow',
};

Cow.propTypes = {
  className: PropTypes.string,
};

export default Cow;