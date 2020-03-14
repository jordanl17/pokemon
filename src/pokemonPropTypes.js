import PropTypes from "prop-types";

const pokemonPropTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  num: PropTypes.string.isRequired,
  type: PropTypes.arrayOf(PropTypes.string).isRequired,
  weight: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  weaknesses: PropTypes.arrayOf(PropTypes.string).isRequired,
  next_evolution: PropTypes.arrayOf(
    PropTypes.shape({
      num: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  )
}).isRequired;

export default pokemonPropTypes;
