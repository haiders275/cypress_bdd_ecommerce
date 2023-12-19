import React from 'react';

export const Copyright = ({
  parameters
}) => {
  return (
    <span id="dg-copyright">
      &copy; {parameters.year}&nbsp;
      {parameters?.organization?.url ? (
        <a href={parameters.organization.url}>{parameters.organization.name}</a>
      ) : parameters?.organization?.nmee ? (
        <span>parameters.organization.name</span>
      ) : null}
    </span>
  );
};
