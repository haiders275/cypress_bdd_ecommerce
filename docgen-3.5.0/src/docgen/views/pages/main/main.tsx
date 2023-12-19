import React, { ReactNode } from 'react';
import { TableOfContents } from '../../components/web-table-of-contents/web-table-of-contents';
import { Footer } from '../../components/footer/footer';
import type { Parameters } from '../../../types';

const Logo = ({
  parameters,
}) => {
  return (
    parameters?.logoPath && (
      <img
        style={{
          marginRight: '25px',
        }}
        src={parameters?.logoPath}
      />
    )
  )
};

const Header = ({parameters}) => {
  return (
    <header>
      <div className="w-fixed-width header-container">
        <div className="header">
          <div className="headerLeftBlock">
            <a className="dg-homelink" href={parameters.homePagePath}>
              <Logo
                parameters={parameters}
              />
            </a>
            <div id="headerLeftText">
              <a className="dg-homelink" href={parameters.homePagePath}>
                <span id="dg-title">
                  {parameters.title}
                </span>
                <span id="dg-web-title-version" style={{fontWeight: 'normal'}}>
                  &nbsp;({parameters.version})
                </span>
              </a>
              <div id="headerSponsor">
                <span>{parameters.sponsorLink.name}</span>
                <a href={parameters.sponsorLink.url}>
                  <img id="sponsorLogo" src={parameters.sponsorLink.logo} alt="sponsor logo" />
                </a>
              </div>
            </div>
          </div>
          <div id="headerRightBlock">
            <span id="dg-backlink">
              {parameters.backlink.url && (
                <a className="button inverted" href={parameters.backlink.url}>
                  {parameters.backlink.name}
                </a>
              )}
            </span>
          </div>
        </div>
      </div>
    </header>
  )
};

const WebFooter = ({parameters}) => {
  return (
    <footer>
      <div>
        <p className="w-fixed-width">
          <span id="dg-web-footer">
            {parameters.webFooter}
          </span>
        </p>
      </div>
      <div className="w-fixed-width">
        <Footer parameters={parameters} />
      </div>
    </footer>
  )
};

type MainProps = {
  parameters: Parameters;
  sortedPages: any;
  pdfEnabled: boolean;
  fixedWidth?: boolean;
  children?: ReactNode;
};

export const Main = ({
  parameters,
  sortedPages,
  pdfEnabled,
  fixedWidth,
  children,
}: MainProps) => {
  const {
    name
  } = parameters;
  return (
    <>
      <div id="dg-toc">
        <TableOfContents
          name={name}
          sortedPages={sortedPages}
          pdfEnabled={pdfEnabled}
        />
      </div>
      <div id="dg-navigator">Table of contents</div>
      <Header parameters={parameters} />
      <section id="dg-content">
        {fixedWidth ? (
          <div className="w-fixed-width">
            <div id="dg-innerContent">
            {children}
            </div>
          </div>
        ) : (
          <div id="dg-innerContent">
            {children}
          </div>
        )}
      </section>
      <WebFooter parameters={parameters} />
    </>
  );
};
