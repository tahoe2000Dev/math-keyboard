/**
 * A component that renders the RIGHT iconograpy in SVG.
 */
const React = require('react');

const Arrow = require('./arrow');

const Right = () => {
    return <svg width="36" height="36" viewBox="0 0 48 48">
        <Arrow transform="rotate(180 24 24)" />
    </svg>;
};

module.exports = Right;
