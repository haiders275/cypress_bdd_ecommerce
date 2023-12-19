import React from 'react';
import { Copyright } from "../copyright/copyright";

export const PdfFooter = ({
  parameters
}) => {
  return (
    <div id="dg-footer">
      <table>
        <thead></thead>
        <tfoot></tfoot>
        <tbody>
        <tr>
          <td>
            <span id="dg-title">{parameters.title}</span>&nbsp;
            (<span id="dg-web-title-version">{parameters.version}</span>)
          </td>
          <td>
            <Copyright parameters={parameters} />
          </td>
          <td>
            Page <span className="page"></span> of <span className="topage"></span>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};
