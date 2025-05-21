import { useEffect, useState } from 'react';

const GithubCard = () => {
    const [username, setUsername] = useState('');
    const [query, setSearchedUser] = useState('octocat');
    const [userData, setUserData] = useState({});

    async function fetchUser() {
        let res = await fetch(`https://api.github.com/users/${query}`)
        let data = await res.json();
        console.log(data);

        setUserData(data);
    }

    const handleDownload = () => {
        const dataStr = JSON.stringify(userData, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = `${query}_profile.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

    useEffect(() => {
        if (query == "OctoCat") return;
        fetchUser();
    }, [query]);

    const handleSearch = () => {
        setSearchedUser(username);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black p-6">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 relative">

                {/* Search Box */}
                <div className="flex items-center gap-2 mb-6">
                    <input
                        type="text"
                        placeholder="Enter GitHub username"
                        className="flex-1 px-4 py-2 rounded-xl bg-white/20 text-white placeholder-white/60 outline-none focus:ring-2 ring-indigo-300" onChange={(e) => setUsername(e.target.value)}
                    />
                    <button
                        onClick={handleSearch}
                        className="cursor-pointer px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl shadow-md transition">
                        Search
                    </button>
                </div>

                {/* Avatar */}
                <div className="flex justify-center">
                    <img
                        src={userData.avatar_url}
                        alt={`${userData.name}'s avatar`}
                        className="w-24 h-24 rounded-full border-4 border-white/30 shadow-lg"
                    />
                </div>

                {/* Username */}
                <h2 className="text-white text-2xl font-bold text-center mt-4">
                    @{userData.name}
                </h2>

                {/* Bio (static placeholder) */}
                <p className="text-indigo-200 text-center mt-2 text-sm italic">
                    {userData.bio}
                </p>

                {/* Stats (static placeholder) */}
                <div className="mt-6 flex justify-around text-sm text-white/80">
                    <div className="text-center">
                        <p className="text-lg font-semibold text-white">{userData.public_repos}</p>
                        <p>Repos</p>
                    </div>
                    <div className="text-center">
                        <p className="text-lg font-semibold text-white">{userData.followers}</p>
                        <p>Followers</p>
                    </div>
                    <div className="text-center">
                        <p className="text-lg font-semibold text-white">{userData.following}</p>
                        <p>Following</p>
                    </div>
                </div>

                {/* Profile Link */}
                <div className="mt-6 flex justify-center">
                    <button
                        onClick={handleDownload}
                        className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-full capitalize shadow-md">
                        Download Profile
                    </button>
                </div>
                {/* Glow Outline */}
                <div className="absolute inset-0 rounded-3xl border border-white/10 animate-pulse pointer-events-none"></div>
            </div>
        </div>
    );
};

export default GithubCard;
