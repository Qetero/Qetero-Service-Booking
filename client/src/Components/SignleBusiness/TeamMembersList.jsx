import { MdOutlineStar } from "react-icons/md";
const TeamMembers = ({ businessId }) => {
  const teamMembers = [
    {
      _id: "ghkisdfgfsdgf",
      name: "Yordanos Tesfaye",
      title: "Senior Makeup Artist",
      image:
        "https://firebasestorage.googleapis.com/v0/b/qetero-8eb3a.appspot.com/o/Bussiness-Types%2FBeauty-%26-Salon%2FFacedetection.jpg-1711217222775?alt=media&token=d39498a5-3dce-46ce-a32a-db9a4d537652",
      rating: 4.9,
    },
    {
      _id: "ghkisdfgfsdgf",
      name: "Yordanos Tesfaye",
      title: "Senior Makeup Artist",
      image:
        "https://firebasestorage.googleapis.com/v0/b/qetero-8eb3a.appspot.com/o/Bussiness-Types%2FBeauty-%26-Salon%2FFacedetection.jpg-1711217222775?alt=media&token=d39498a5-3dce-46ce-a32a-db9a4d537652",
      rating: 4.9,
    },
    {
      _id: "ghkisdfgfsdgf",
      name: "Yordanos Tesfaye",
      title: "Senior Makeup Artist",
      image:
        "https://firebasestorage.googleapis.com/v0/b/qetero-8eb3a.appspot.com/o/Bussiness-Types%2FBeauty-%26-Salon%2FFacedetection.jpg-1711217222775?alt=media&token=d39498a5-3dce-46ce-a32a-db9a4d537652",
      rating: 4.9,
    },
    {
      _id: "ghkisdfgfsdgf",
      name: "Yordanos Tesfaye",
      title: "Senior Makeup Artist",
      image:
        "https://firebasestorage.googleapis.com/v0/b/qetero-8eb3a.appspot.com/o/Bussiness-Types%2FBeauty-%26-Salon%2FFacedetection.jpg-1711217222775?alt=media&token=d39498a5-3dce-46ce-a32a-db9a4d537652",
      rating: 4.9,
    },
    {
      _id: "ghkisdfgfsdgf",
      name: "Yordanos Tesfaye",
      title: "Senior Makeup Artist",
      image:
        "https://firebasestorage.googleapis.com/v0/b/qetero-8eb3a.appspot.com/o/Bussiness-Types%2FBeauty-%26-Salon%2FFacedetection.jpg-1711217222775?alt=media&token=d39498a5-3dce-46ce-a32a-db9a4d537652",
      rating: 4.9,
    },
    {
      _id: "ghkisdfgfsdgf",
      name: "Yordanos Tesfaye",
      title: "Senior Makeup Artist",
      image:
        "https://firebasestorage.googleapis.com/v0/b/qetero-8eb3a.appspot.com/o/Bussiness-Types%2FBeauty-%26-Salon%2FFacedetection.jpg-1711217222775?alt=media&token=d39498a5-3dce-46ce-a32a-db9a4d537652",
      rating: 4.9,
    },
  ];
  return (
    <div className="flex gap-4  text-center flex-wrap cursor-pointer justify-center">
      {teamMembers.map((member, index) => (
        <div key={index} className="flex flex-col items-center p-2">
          <div className="aspect-square relative max-w-28">
            <img
              src={member.image}
              alt=""
              className="aspect-square object-cover rounded-full"
            />
            <p className="absolute z-10 -bottom-2 left-1/2 -translate-x-1/2 bg-slate-50 text-sm px-2 py font-sans rounded-md border border-gray-500 flex items-center gap-1 justify-center">
              {member.rating}
              <MdOutlineStar className="inline" />
            </p>
          </div>
          <p className="mt-4">{member.name}</p>
          <p className="text-sm text-gray-700 font-sans">{member.title}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamMembers;
