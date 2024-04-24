export default function Card({ title, overview, poster_path, vote_average }) {
  return (
    <div className="w-full h-[528px] rounded-2xl p-[10px] bg-white">
      <div className="h-[297px] rounded-lg">
        <img
          src={`https://media.themoviedb.org/t/p/w220_and_h330_face${poster_path}`}
          alt="Film thumbnail"
          className="object-contain w-full h-full"
        />
      </div>
      <div className="container p-[30px] ">
        <h1 className="font-semibold leading-6 text-base text-left">{title}</h1>
        <p className="text-sm font-normal text-[#999999] leading-[21px] mt-4 text-left line-clamp-3">
          "{overview}"
        </p>
        <div className="flex justify-left items-center mt-6">
          <span className="material-symbols-outlined text-normal text-[#ffb86c]">
            star
          </span>
          <span className="font-semibold text-sm leading-[21px]">
            {vote_average}
          </span>
        </div>
      </div>
    </div>
  );
}
