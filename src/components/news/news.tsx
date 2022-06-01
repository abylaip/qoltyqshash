import Image from "next/image";

export const News = () => {
  return (
    <article className="rounded-lg bg-white p-5 shadow-lg">
      <div className="flex-1 flex flex-row items-center space-x-5 border-b border-gray-300 pb-4">
        <Image
          src="/static/placeholder.png"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <p className="font-semibold text-high-contrast text-xl">
            Abylay's company
          </p>
          <p className="text-gray-500">3 hours ago</p>
        </div>
      </div>
      <div className="py-2 flex flex-col space-y-2">
        <p className="text-high-contrast text-lg font-semibold">
          Vsem hello kak dela che mutite
        </p>
        <img src="/static/cowboy.jpeg" className="w-full relative" />
      </div>
      <div className="text-low-contrast flex flex-row justify-between">
        <p>300 000 people liked this post</p>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
    </article>
  );
};
