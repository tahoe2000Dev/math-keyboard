/**
 * An autogenerated component that renders the LEQ iconograpy in SVG.
 *
 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
 */
const React = require('react');
const PropTypes = require('prop-types');

class Leq extends React.Component {
    static propTypes = {
        color: PropTypes.string.isRequired,
    };

    render() {
        return <svg width="36" height="36" viewBox="0 0 48 48"><g fill="none" fillRule="evenodd"><path fill="none" d="M0 0h48v48H0z"/><path fill="none" d="M12 12h24v24H12z"/><path d="M16 33h16M32 30l-16-6 16-6" stroke={this.props.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g></svg>;
    }
}

module.exports = Leq;
