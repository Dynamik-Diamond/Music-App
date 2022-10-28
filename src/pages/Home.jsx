import CurratedPlaylistCard from '../component/CurratedPlaylistCard';
import TopChartContainer from '../component/TopChartContainer';

const Home = () => {
  return (
    <section>
      <div className="max-w-6xl p-4">
        {/* Curated playlist and TopChart container */}
        <div className="flex w-full flex-col gap-6 md:flex-row ">
          <CurratedPlaylistCard />
          <TopChartContainer />
        </div>
        {/* Curated playlist and TopChart container */}
      </div>
    </section>
  );
};

export default Home;
