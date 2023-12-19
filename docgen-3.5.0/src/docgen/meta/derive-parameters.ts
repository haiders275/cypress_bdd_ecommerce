export const deriveParameters = ({
  rawParameters,
  setVersion,
  setReleaseDate,
  homeLink
}) => {
  const version = setVersion || rawParameters.version;
  const releaseDate = setReleaseDate || rawParameters.date;
  //the homepage is the first link in the first heading
  const homePagePath = `${homeLink.source.slice(0, homeLink.source.lastIndexOf('.'))}.html`;
  const currentDate = new Date();
  const date = currentDate.toLocaleDateString('en-GB'); // 'DD/MM/YYYY'
  const time = currentDate.toLocaleTimeString('en-US', { hour12: false }); // 'HH:mm:ss'
  const year = currentDate.getFullYear().toString(); // 'YYYY'
  const attribution = `Created by DocGen ${version} on ${date} at ${time}.`;
  const webFooter = `Version ${version} released on ${releaseDate}`;
  return {
    ...rawParameters,
    attribution,
    year,
    webFooter,
    version,
    releaseDate,
    homePagePath
  }
};
