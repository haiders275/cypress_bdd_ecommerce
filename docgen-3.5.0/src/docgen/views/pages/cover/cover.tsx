import React, { Fragment } from 'react';

export const Cover = ({
  parameters,
}) => {
  return (
    <div className="w-fixed-width">
      <div id="dg-innerContent">
        <table
          className="w-table w-fixed"
          id="dg-coverInfo">
          <thead>
          <tr>
            <th colSpan={3} id="dg-title">
              {parameters.title}
            </th>
          </tr>
          </thead>
          <tfoot>
          </tfoot>
          <tbody>
          <tr>
            <td>
              <strong>Owner: </strong>
              <span id="dg-owner">
                {parameters.owner?.url ? (
                  <a href={parameters.owner.url}>{parameters.owner.name}</a>
                ) : parameters.owner.name}
              </span>
            </td>
            <td>
              <strong>Version: </strong>
              <span id="dg-version">
                {parameters.version}
              </span>
            </td>
            <td>
              <strong>Released: </strong>
              <span id="dg-release-date">
                {parameters.releaseDate}
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Author: </strong>
              <span id="dg-author">
                {parameters.author?.url ? (
                  <a href={parameters.author.url}>{parameters.author.name}</a>
                ) : parameters.author.name}
              </span>
            </td>
            <td colSpan={2}>
              <strong>Contributors: </strong>
              <span id="dg-contributors">
                {parameters.contributors.map((contributor, i) => (
                  <Fragment key={i}>
                    {contributor?.url ? (
                      <a href={contributor.url}>{contributor.name}</a>
                    ) : contributor.name}
                    {i < parameters.contributors.length - 1 && (
                      ","
                    )}
                  </Fragment>
                ))}
              </span>
            </td>
          </tr>
          <tr className="dg-finalRow">
            <td>
              <strong>Module: </strong>
              <span id="dg-module">
                {parameters.module}
              </span>
            </td>
            <td>
              <strong>ID: </strong>
              <span id="dg-id">
                {parameters.id}
              </span>
            </td>
            <td>
              <strong>Link: </strong>
              <span id="dg-website">
                {parameters.website?.url ? (
                  <a href={parameters.website.url}>{parameters.website.name}</a>
                ) : parameters.website.name}
              </span>
            </td>
          </tr>
          </tbody>
        </table>
        <h1>Summary</h1>
        <p id="dg-summary">
          {parameters.summary}
        </p>
      </div>
    </div>
  )
};
