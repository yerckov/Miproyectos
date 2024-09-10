import PropTypes from 'prop-types';

const MainSection = ({ title }) => {
    return (
        <section className="main-section">
            <h1>{title}</h1>
        </section>
    );
};

MainSection.propTypes = {
    title: PropTypes.string.isRequired
};

export default MainSection;
