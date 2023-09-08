import { star } from "../assets/icons"

const ReviewCard = ({imgURL, customerName, rating, feedback }) => {
  return (
        <div className="flex flex-1 flex-col
     justify-center  items-center  ">
        <img src={imgURL}  alt={name}
        className="w-[120px] h-[120px]

        rounded-full object-cover
        "/>
        <p className="m-auto mt-6 max-w-sm text-center info-text"
        >{feedback}</p>
        <div className="mt-2 flex 
        justify-center gap-2.5">
            <img src={star} alt="rating"
            width={24} height={24} />
            <p className="font-montserrat text-3xl
            leading-normal text-slate-gray ">({rating})</p>
        </div>
        <h3 className="mt-1 text-3xl leading-normal text-center
        font-bold font-palanquin">{customerName}</h3>
        


    </div>
  )
}

export default ReviewCard