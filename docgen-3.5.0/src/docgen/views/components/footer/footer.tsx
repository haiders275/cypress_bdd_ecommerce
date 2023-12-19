import React from 'react';
import { Copyright } from "../copyright/copyright";

export const Footer = ({
  parameters
}) => {
  return (
    <>
      <p>
        <Copyright parameters={parameters} />
      </p>
      <p>
        <span>
          {parameters.marking} {parameters.legalese} {parameters.attribution}
        </span>
      </p>
    </>
  );
};
