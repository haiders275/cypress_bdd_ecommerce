import React from 'react';

const Page = ({page}) => {
  const name = page.source.substring(0, page.source.lastIndexOf('.'));
  const path = name + '.html';
  return (
    <li><a href={path}>{page.title}</a></li>
  );
};

const Section = ({section}) => {
  if (section?.heading === 'Extra') {
    return null;
  }
  const visible = section?.heading && section?.pages;
  return (
   <td className="dg-tocGroup">
     {visible && (
       <ul>
         <li className="dg-tocHeading">
           {section.heading}
         </li>
         {section.pages.map((page, i)=> (
           <Page key={i} page={page} />
         ))}
       </ul>
     )}
   </td>
  )
};

export const TableOfContents = ({
  sortedPages,
  name,
  pdfEnabled,
}) => {
  const pdfName = name.toLowerCase() + '.pdf';
  return (
    <div>
      <table className="unstyled">
        {Object.values(sortedPages).map((section, i) => (
          <Section key={i} section={section?.[0]} />
        ))}
        <td className="dg-tocGroup" id="dg-tocFixedColumn">
          <ul>
            <li>
              <span className="w-icon dg-tocIcon" data-name="person_group" title="archive"></span>
              <a href="ownership.html">Ownership</a>
            </li>
            <li>
              <span className="w-icon dg-tocIcon" data-name="refresh" title="archive"></span>
              <a href="release-notes.html">Release Notes</a>
            </li>
          </ul>
          <div>
            {pdfEnabled && (
              <a
                className="button whiteInverted"
                style={{textDecoration: 'none'}}
                href={pdfName}
              >
                PDF
              </a>
            )}
          </div>
        </td>
      </table>
    </div>
  );
};
