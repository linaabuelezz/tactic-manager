const AboutPage = () => {
  return (
    <>
      <div className="container mx-auto py-10">
        <div className="flex flex-col md:flex-row items-center mb-10">
          <div className="relative w-full md:w-1/2">
            <img
              src="/assets/ballonpitch.jpg"
              alt="Ball set up for corner kick."
              className="w-full h-auto object-cover ml-4"
            ></img>
            <div className="absolute top-4 right-0 transform translate-x-1/2 translate-y-1/4 bg-white p-4 md:p-6 shadow-xl max-w-xs">
              <h2 className="text-xl font-semibold">Our Idea</h2>
              <p>
                This website was created to make it easier for local coaches to
                choose/setup a lineup for their team.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse items-center mr-4">
        <div className="relative w-full md:w-1/2">
          <img
            src="/assets/militaoheader.jpg"
            alt="Descriptive Alt Text"
            className="w-full h-auto object-cover "
          />
          <div className="absolute top-4 left-0 transform -translate-x-1/2 translate-y-1/4 bg-white p-4 md:p-6 shadow-xl max-w-xs">
            <h2 className="text-xl font-semibold">Features</h2>
            <p>
              This Web app has many features such as the ability to select a
              formation, add players while inputting details about them, adding
              players based on their position and the selected formation onto
              the pitch and adding extra info about them on the player details
              page.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-10">
        <div className="flex flex-col md:flex-row items-center mb-10">
          <div className="relative w-full md:w-1/2">
            <img
              src="/assets/coachwithteam.jpg"
              alt="Ball set up for corner kick."
              className="w-full h-auto object-cover ml-4"
            ></img>
            <div className="absolute top-2 right-0 transform translate-x-1/2 translate-y-1/4 bg-white p-4 md:p-6 shadow-xl max-w-xs">
              <h2 className="text-xl font-semibold">Our Goal</h2>
              <p>
                The long term aspirations for this website are for us to make coaches lives easier by allowing them to use this simple website to create lineups, store information about their players they may forget and even suggest different tactics.
                In the future, one goal is to add a section to store stats for each player and to make it work to scale on phones, so keep an eye out for that!
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default AboutPage;
