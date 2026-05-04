"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaEdit, FaUserCircle } from "react-icons/fa";

const MyProfile = () => {
  // 1. Fetch the dynamic session data
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  // Redirect if not logged in
  if (!session) {
    router.push("/login");
    return null;
  }

  const { user } = session;

  return (
    <div className="container mx-auto p-6 flex justify-center">
      <div className="card w-full max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100">
        {/* Header Background */}
        <div className="h-24 bg-gradient-to-r from-slate-700 to-slate-900"></div>

        <div className="px-6 pb-8">
          {/* Dynamic Profile Image */}
          <div className="relative -mt-12 flex justify-center">
            {user.image ? (
              <img
                src={user.image}
                alt={user.name}
                className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-md bg-white"
              />
            ) : (
              <div className="w-24 h-24 rounded-full border-4 border-white flex items-center justify-center bg-gray-200 text-gray-400">
                <FaUserCircle size={80} />
              </div>
            )}
          </div>

          {/* Dynamic Name & Email */}
          <div className="text-center mt-4">
            <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
              {user.name || "Anonymous User"}
            </h2>
            <p className="text-gray-500 font-medium">{user.email}</p>
          </div>

          {/* Stats or Info Section (Optional) */}
          <div className="grid grid-cols-1 gap-4 mt-8">
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
              <span className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Account Status</span>
              <span className="badge badge-success text-white px-3">Active</span>
            </div>
          </div>

          {/* Edit Button */}
          <div className="mt-8">
            <Link
              href="/my-profile/update"
              className="flex items-center justify-center gap-2 w-full py-3 bg-slate-800 text-white rounded-xl font-semibold hover:bg-slate-700 transition-all duration-200 shadow-lg active:scale-95"
            >
              <FaEdit />
              Edit Profile Information
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;