import { RiMailSendLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const EmailSentModal = ({ email, t, dismissToast }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5`}
    >
      <div className="p-8 pb-0 text-center space-y-5">
        <RiMailSendLine className="mx-auto text-7xl text-blue-500" />
        <p className="text-xl font-medium text-gray-900">Verify its you.</p>
        <p className="">
          We've sent you verfication link to {email}. Please follow the
          verfication link in your inbox and come back to login.
        </p>
      </div>
      <div className="text-center">
        <button
          onClick={() => {
            dismissToast();
            return navigate("/login");
          }}
          className="text-blue-500 p-4"
        >
          okay
        </button>
      </div>
    </div>
  );
};

export default EmailSentModal;
