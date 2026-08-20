import React from 'react';
import Link from '@docusaurus/Link';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import clsx from 'clsx';

const slugify = (s) =>
  s
    .toLowerCase()
    .trim()
    .replace(/[^\w]+/g, '-')
    .replace(/^-+|-+$/g, '');

export function HomepageSection({
  id,
  title,
  children,
  description,
  className,
  HeadingTag = 'h3',
  accentColor,
}) {
  const headingId = id ?? (title ? slugify(title) : undefined);

  // Register the heading id so links like /katacomb-vpn#download are checked
  // by the build rather than reported as broken anchors.
  useBrokenLinks().collectAnchor(headingId);

  return (
    <section
      className={clsx('homepage-section', className)}
      aria-labelledby={headingId}
      style={accentColor ? {'--section-accent': accentColor} : undefined}>
      {title && (
        <div className="section-header">
          <div>
            <HeadingTag id={headingId}>{title}</HeadingTag>
            {description && (
              <p className="section-description">{description}</p>
            )}
          </div>
        </div>
      )}
      {!title && description && (
        <p className="section-description">{description}</p>
      )}
      <div className="section-content">{children}</div>
    </section>
  );
}

const ChevronRight = () => (
  <svg
    className="card-arrow"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true">
    <path
      d="M6 3l5 5-5 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function HomepageCard({id, icon, svgFile, title, description, to, badge}) {
  // Without a destination the card is presentational (feature lists), so it
  // renders as a plain element rather than an anchor with no href.
  const Wrapper = to ? Link : 'div';
  const wrapperProps = to ? {to} : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={clsx('homepage-card', !to && 'homepage-card--static')}>
      <div className="card-icon-wrapper" aria-hidden="true">
        {svgFile ? <img src={svgFile} alt="" /> : icon}
      </div>
      <div className="card-content">
        <div className="card-title" id={id && slugify(title)}>
          <span>{title}</span>
          {badge && <span className="card-badge">{badge}</span>}
          {to && <ChevronRight />}
        </div>
        <div className="card-description">{description}</div>
      </div>
    </Wrapper>
  );
}
