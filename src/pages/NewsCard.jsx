import { FaEye, FaStar } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { NavLink } from "react-router";

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags,
    others,id
  } = news;

  return (
    // <div className="card bg-base-100 shadow-xl border hover:shadow-2xl transition-shadow duration-300">
    //   {/* Author section */}
    //   <div className="flex items-center p-4 border-b">
    //     <img 
    //       src={author.img} 
    //       alt={author.name} 
    //       className="w-12 h-12 rounded-full mr-3 object-cover" 
    //     />
    //     <div>
    //       <h2 className="font-semibold">{author.name}</h2>
    //       <p className="text-sm text-gray-500">
    //         {new Date(author.published_date).toLocaleDateString()}
    //       </p>
    //     </div>
    //   </div>

    //   {/* Thumbnail */}
    //   <figure>
    //     <img src={thumbnail_url} alt={title} className="w-full h-56 object-cover" />
    //   </figure>

    //   {/* Content */}
    //   <div className="card-body">
    //     {/* Title */}
    //     <h2 className="card-title">{title}</h2>

    //     {/* Details preview */}
    //     <p className="text-sm text-gray-600">
    //       {details.length > 180 ? details.slice(0, 180) + "..." : details}
    //     </p>

    //     {/* Tags */}
    //     <div className="flex flex-wrap gap-2 mt-2">
    //       {tags.map((tag, i) => (
    //         <span 
    //           key={i} 
    //           className="badge badge-outline badge-sm px-2 py-1"
    //         >
    //           #{tag}
    //         </span>
    //       ))}
    //     </div>

    //     {/* Rating + Views */}
    //     <div className="flex justify-between items-center mt-4">
    //       <div className="flex items-center gap-1 text-yellow-500">
    //         <FaStar />
    //         <span className="font-medium">{rating.number}</span>
    //         {rating.badge && (
    //           <span className="badge badge-warning badge-sm ml-2">{rating.badge}</span>
    //         )}
    //       </div>
    //       <div className="flex items-center gap-1 text-gray-500">
    //         <FaEye />
    //         <span>{total_view}</span>
    //       </div>
    //     </div>

    //     {/* Trending / Today Pick Badge */}
    //     <div className="mt-3">
    //       {others.is_today_pick && (
    //         <span className="badge badge-primary mr-2">Today's Pick</span>
    //       )}
    //       {others.is_trending && (
    //         <span className="badge badge-secondary">Trending</span>
    //       )}
    //     </div>

    //     {/* Read More Button */}
    //     <div className="card-actions justify-end mt-4">
    //       <button className="btn btn-outline btn-sm">Read More</button>
    //     </div>
    //   </div>
    // </div>
    <div className=" bg-base-200 rounded-2xl p-2">
            <div className="flex  justify-between" >
               <div className="card   hover:shadow-2xl transition-shadow duration-300">
                            <img 
          src={author.img} 
          alt={author.name} 
          className="w-12 h-12 rounded-full mr-3 object-cover" 
        />
        <div>
          <h2 className="font-semibold">{author.name}</h2>
          <p className="text-sm text-gray-500">
            {new Date(author.published_date).toLocaleDateString()}
          </p>
        </div>
      </div> 
      <div className=" flex gap-3 items-center" >
        <FaBookmark size={30} />
            <CiShare2 size={30} />

        </div> 
                </div>           
           
            <figure>
        <img src={thumbnail_url} alt={title} className="w-full h-56 object-cover" />
      </figure>
        <div className="card-body">
        {/* Title */}
        <h2 className="card-title">{title}</h2>

        {/* Details preview */}
        <p className="text-sm text-gray-600">
          {details.length > 180 ? (
          <>
           { details.slice(0, 180)} .... <NavLink to={`/news-details/${id}`} className='text-primary , font-semibold cursor-pointer' >Readmore</NavLink> </> )
          : (details)}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, i) => (
            <span 
              key={i} 
              className="badge badge-outline badge-sm px-2 py-1"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Rating + Views */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-1 text-yellow-500">
            <FaStar />
            <span className="font-medium">{rating.number}</span>
            {rating.badge && (
              <span className="badge badge-warning badge-sm ml-2">{rating.badge}</span>
            )}
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>

        {/* Trending / Today Pick Badge */}
        <div className="mt-3">
          {others.is_today_pick && (
            <span className="badge badge-primary mr-2">Today's Pick</span>
          )}
          {others.is_trending && (
            <span className="badge badge-secondary">Trending</span>
          )}
        </div>

        {/* Read More Button */}
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-outline btn-sm">Read More</button>
        </div>
      </div>
    
    </div>
  );
};

export default NewsCard;
