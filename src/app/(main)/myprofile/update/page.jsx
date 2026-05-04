"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaSave } from "react-icons/fa";

const UpdateProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  const [isUpdating, setIsUpdating] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // Pre-fill the form with existing user data
  useEffect(() => {
    if (session?.user) {
      setValue("name", session.user.name);
      setValue("image", session.user.image);
    }
  }, [session, setValue]);

  const onUpdate = async (formData) => {
    setIsUpdating(true);
    
    const { data, error } = await authClient.updateUser({
      name: formData.name,
      image: formData.image,
    });

    setIsUpdating(false);

    if (error) {
      alert(`Error: ${error.message}`);
    } else {
      alert("Information updated successfully!");
      // Redirect back to profile to see the changes
      router.push("/my-profile");
      router.refresh(); 
    }
  };

  if (isPending) return <div className="text-center mt-20">Loading session...</div>;

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-200">
        
        {/* Back Button */}
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-800 mb-6 transition"
        >
          <FaArrowLeft size={14} /> Back
        </button>

        <h2 className="text-2xl font-bold text-slate-800 mb-2">Update Information</h2>
        <p className="text-slate-500 mb-6 text-sm">Change your public profile details below.</p>
        
        <form onSubmit={handleSubmit(onUpdate)} className="space-y-5">
          {/* Name Field */}
          <div className="form-control">
            <label className="label font-semibold text-slate-700">Full Name</label>
            <input
              type="text"
              className={`input input-bordered w-full ${errors.name ? 'border-red-500' : ''}`}
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>

          {/* Image URL Field */}
          <div className="form-control">
            <label className="label font-semibold text-slate-700">Profile Image URL</label>
            <input
              type="text"
              className={`input input-bordered w-full ${errors.image ? 'border-red-500' : ''}`}
              placeholder="https://example.com/your-photo.jpg"
              {...register("image", { 
                required: "Image URL is required",
                pattern: {
                  value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg))$/i,
                  message: "Please enter a valid image URL"
                }
              })}
            />
            {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isUpdating}
            className="btn w-full bg-slate-800 text-white hover:bg-slate-700 flex items-center gap-2 mt-4"
          >
            {isUpdating ? (
              <span className="loading loading-spinner"></span>
            ) : (
              <FaSave />
            )}
            Update Information
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfilePage;