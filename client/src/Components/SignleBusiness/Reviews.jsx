import { MdOutlineStar } from "react-icons/md";

const Reviews = ({ businessId }) => {
  const reviews = [
    {
      reviewerName: "Yordanos Tesfaye",
      reviewerImage:
        "https://firebasestorage.googleapis.com/v0/b/qetero-8eb3a.appspot.com/o/Bussiness-Types%2FBeauty-%26-Salon%2FFacedetection.jpg-1711217222775?alt=media&token=d39498a5-3dce-46ce-a32a-db9a4d537652",
      ratingGiven: 5,
      comment: "Amazing lovely chat and a great hair cut ",
      date: "Mar 28, 2024, 10:22 PM",
    },
    {
      reviewerName: "Yordanos Tesfaye",
      reviewerImage: "",
      ratingGiven: 3,
      comment: "Amazing lovely chat and a great hair cut ",
      date: "Mar 28, 2024, 10:22 PM",
    },
    {
      reviewerName: "Yordanos Tesfaye",
      reviewerImage: "",
      ratingGiven: 5,
      comment: "Amazing lovely chat and a great hair cut ",
      date: "Mar 28, 2024, 10:22 PM",
    },
    {
      reviewerName: "Yordanos Tesfaye",
      reviewerImage: "",
      ratingGiven: 4,
      comment: "Amazing lovely chat and a great hair cut ",
      date: "Mar 28, 2024, 10:22 PM",
    },
    {
      reviewerName: "Yordanos Tesfaye",
      reviewerImage: "",
      ratingGiven: 5,
      comment: "Amazing lovely chat and a great hair cut ",
      date: "Mar 28, 2024, 10:22 PM",
    },
    {
      reviewerName: "Yordanos Tesfaye",
      reviewerImage: "",
      ratingGiven: 5,
      comment: "Amazing lovely chat and a great hair cut ",
      date: "Mar 28, 2024, 10:22 PM",
    },
  ];
  return (
    <div className="grid gap-4 md:grid-cols-2 py-4 ">
      {reviews.map((review, index) => (
        <div key={index} className="border-b p-2">
          <div className="flex items-center gap-3">
            <div className="w-16">
              {review.reviewerImage ? (
                <img
                  src={review.reviewerImage}
                  alt=""
                  className="w-full aspect-square object-cover rounded-full"
                />
              ) : (
                <p className="flex justify-center items-center w-full aspect-square rounded-full bg-Qeteroblue text-white text-2xl font-sans">
                  {review.reviewerName[0]}
                </p>
              )}
            </div>
            <p className="">
              <span className="block text-lg">{review.reviewerName}</span>
              <span className="block text-sm text-gray-500">{review.date}</span>
            </p>
          </div>
          <p className="text-black">
            <span className="p-1">
              {[...Array(review.ratingGiven)].map((star, index) => {
                return (
                  <MdOutlineStar
                    key={index}
                    className="inline-block text-2xl text-Qeteroblue"
                  />
                );
              })}
            </span>
          </p>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
