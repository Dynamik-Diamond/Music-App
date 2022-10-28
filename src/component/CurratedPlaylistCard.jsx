import { bgPhoto } from '../assets/index';
import { AiOutlineHeart } from 'react-icons/ai';

const CurratedPlaylistCard = () => {
  return (
    <article>
      {/* image and text container */}
      <div className="h-[373px] max-w-[786px] space-y-16 rounded-3xl bg-skyBlue p-6 md:flex">
        {/* Text content */}
        <article className="space-y-16 bg-skyBlue">
          <p className="text-xs font-normal leading-3">
            Currated playlist
          </p>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">
              R & B Hits
            </h1>
            <p className="text-sm font-normal leading-4">
              All mine, Lie again, Petty call me everyday,
              <br />
              Out of time, No love, Bad habit, <br /> and so
              much more
            </p>
          </div>
          <div>
            <span className="flex flex-row items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>{' '}
              33k Likes
            </span>
          </div>
        </article>
        {/* image content */}
        <img
          src={bgPhoto}
          alt="artist-photo"
          className="hidden md:block"
        />
      </div>
      {/* image and text container */}
    </article>
  );
};

export default CurratedPlaylistCard;
