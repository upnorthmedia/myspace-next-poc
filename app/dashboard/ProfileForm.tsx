'use client';

export function ProfileForm({ user }: any) {

  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);

    const body = {
      name: formData.get('name'),
      bio: formData.get('bio'),
      image: formData.get('image'),
    };

    const res = await fetch('/api/user', {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
    await res.json();
  };

  return (
    <div>
      <form onSubmit={updateUser}>
        <label className="pt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
        <input name="name" type="text" id="name" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={user?.name ?? ''} />
        <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">We’ll never share your details. Read our <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</p>
        
<label htmlFor="bio" className="pt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bio</label>
<textarea name="bio" id="bio" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={user?.bio ?? ''}></textarea>
        <label className="pt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="image">Profile Image URL</label>
        <input name="image" type="text" id="image" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" defaultValue={user?.image ?? ''} />
        <button type="submit" className="inline-flex items-center px-3 mt-4 py-2 text-sm font-medium text-center text-white hover:bg-indigo-200 hover:text-black rounded-md bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Save
            </button>
      </form>
    </div>
  );
}