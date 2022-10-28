import React from 'react';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';
const TopChartContainer = () => {
  const { data, isFetching, error } =
    useGetTopChartsQuery();

  console.log(useGetTopChartsQuery);
  return (
    <div>
      {/* Title header */}
      <article>
        <h2 className="text-2xl font-bold">Top charts</h2>
      </article>
      {/* Top chart Card */}
      <div></div>
    </div>
  );
};

export default TopChartContainer;
