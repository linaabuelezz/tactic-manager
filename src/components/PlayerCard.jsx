import PropTypes from 'prop-types';

const PlayerCard = ({ player }) => {
    return (
        <div className="relative w-20 h-28 border rounded-lg overflow-hidden shadow-lg bg-white">
        <img
          src="/assets/blue-background.jpg" 
          alt="Card Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-2">
          <h2 className="text-xl font-bold text-gray-800">{player.name}</h2>
          <p className="text-2xl font-semibold text-gray-600">{player.kitNumber}</p>
        </div>
      </div>
    )
};

PlayerCard.propTypes = {
    player: PropTypes.shape({
      name: PropTypes.string.isRequired,
      kitNumber: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
    }).isRequired,
  };

export default PlayerCard