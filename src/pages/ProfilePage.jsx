import { useState, useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';


export default function ProfilePage() {
  
  const [isEditing, setIsEditing] = useState(false);


  const [profile, setProfile] = useState({
    name: 'guest',
    email: 'guest@email.com',
    phone: '+20 100 000 0000',
    nationality: 'Egyptian',
  });

  

  //Edit
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Cancel
  const handleCancel = () => {
    setIsEditing(false);
  };

  
  const handleSubmit = (values) => {
    setProfile(values);
    setIsEditing(false);
  };
 
  const stats = [
    { number: '0', label: 'Total Bookings' },
  ];

  return (
    <div className="min-h-screen text-stone-300 font-sans relative">

    {/* blurred background */}
    <img src="/resort.jpg"alt="background"className="absolute inset-0 w-full h-full object-cover blur-md scale-110"
    />

    {/* dark overlay */}
    <div className="absolute inset-0 w-full h-full object-cover blur-md scale-110 bg-black/60" />

      <main className="relative mx-auto max-w-4xl px-4 py-40">

        <div className="rounded-sm border border-yellow-800 bg-stone-900/60 p-8">
          
          <div className="mb-8 flex items-center gap-6 ">
            
            <div className="relative">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-yellow-600/60 bg-stone-800 font-serif text-3xl text-yellow-600">
                {profile.name.charAt(0).toUpperCase()}
                
              </div>
            </div>

            
            <div className="flex-1">
              <h1 className="font-serif text-2xl font-light tracking-wide">
                {profile.name}
              </h1>
            </div>

          
            {!isEditing && (
              <button
                onClick={handleEdit}
                className="flex items-center gap-2 border px-5 py-2 text-xs tracking-widest text-white-600 uppercase transition-colors hover:bg-gray-800 hover:text-white"
              >
                 Edit Profile
              </button>
            )}
          </div>

          
          <Formik
            initialValues={profile}
            onSubmit={handleSubmit}
            validationSchema={ Yup.object({
             name: Yup.string()
            .required('Full name is required'),
             email: Yup.string()
            .email('Please enter a valid email address')
           .required('Email address is required'),
           phone: Yup.string()
         .matches(/^\d{10}$/, 'Invalid phone number.')
         .required('Phone number is required'),
         nationality: Yup.string()
        })}
            
          >
            {({ values, handleChange, handleBlur, handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Full Name */}
                <div className="rounded-sm border border-gray-800 bg-stone-950/50 p-4">
                  <label className="mb-2 block text-xs tracking-widest text-yellow-600 uppercase">
                    Full Name
                  </label>
                  {isEditing ? (
                    <>
                      <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full bg-stone-900 px-3 py-1.5 text-sm text-stone-200 outline-none border border-stone-700 focus:border-gray-800"
                      />
                      {errors.name && touched.name && (
                        <div className="mt-1 text-xs text-red-500">{errors.name}</div>
                      )}
                    </>
                  ) : (
                    <p className="text-sm font-light">{profile.name}</p>
                  )}
                </div>

                {/* Email */}
                <div className="rounded-sm border border-gray-800 bg-stone-950/50 p-4">
                  <label className="mb-2 block text-xs tracking-widest text-yellow-600 uppercase">
                    Email Address
                  </label>
                  {isEditing ? (
                    <>
                      <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full bg-stone-900 px-3 py-1.5 text-sm text-stone-200 outline-none border border-stone-700 focus:border-gray-700"
                      />
                      {errors.email && touched.email && (
                        <div className="mt-1 text-xs text-red-500">{errors.email}</div>
                      )}
                    </>
                  ) : (
                    <p className="text-sm font-light">{profile.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="rounded-sm border border-gray-800 bg-stone-950/50 p-4">
                  <label className="mb-2 block text-xs tracking-widest text-yellow-600 uppercase">
                    Phone Number
                  </label>
                  {isEditing ? (
                    <>
                      <input
                        type="text"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full bg-stone-900 px-3 py-1.5 text-sm text-stone-200 outline-none border border-gray-800 focus:border-yellow-700"
                      />
                      {errors.phone && touched.phone && (
                        <div className="mt-1 text-xs text-red-500">{errors.phone}</div>
                      )}
                    </>
                  ) : (
                    <p className="text-sm font-light">{profile.phone}</p>
                  )}
                </div>

                {/* Nationality */}
                <div className="rounded-sm border border-gray-800 bg-stone-950/50 p-4">
                  <label className="mb-2 block text-xs tracking-widest text-yellow-600 uppercase">
                    Nationality
                  </label>
                  {isEditing ? (
                    <>
                      <input
                        type="text"
                        name="nationality"
                        value={values.nationality}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full bg-stone-900 px-3 py-1.5 text-sm text-stone-200 outline-none border border-stone-700 focus:border-yellow-700"
                      />
                      {errors.nationality && touched.nationality && (
                        <div className="mt-1 text-xs text-red-500">{errors.nationality}</div>
                      )}
                    </>
                  ) : (
                    <p className="text-sm font-light">{profile.nationality}</p>
                  )}
                </div>

                {/* Save/Cancel buttons */}
                {isEditing && (
                  <div className="col-span-full flex gap-3 mt-4">
                    <button
                      type="submit"
                      className="border border-stone-700 px-5 py-2 text-xs tracking-widest text-stone-400 uppercase hover:border-stone-400"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="border border-stone-700 px-5 py-2 text-xs tracking-widest text-stone-400 uppercase hover:border-stone-400"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </form>
            )}
          </Formik>

         
          <div className="flex justify-center">
            <div className=" grid-cols-1 gap-4 max-w-xs">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="rounded-sm border border-gray-800 bg-stone-950/50 p-4 text-center"
                >
                  <p className="font-serif text-3xl text-white-600">{stat.number}</p>
                  <p className="mt-1 text-xs tracking-widest text-stone-500 uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
    
  );
}