export default function BTSFanPage() {
  const members = [
    "Jung Kook",
    "RM",
    "Jin",
    "SUGA",
    "j-hope",
    "Jimin",
    "V"
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="text-center py-12">
          <h1 className="text-5xl font-bold mb-4">K-POP Global Music Awards Vote</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Supporting BTS and celebrating global music excellence through official fan voting and community support.
          </p>
        </header>

        <section className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-zinc-900 rounded-3xl p-6 shadow-xl">
            <h2 className="text-2xl font-semibold mb-3">Fan Page</h2>
            <p className="text-gray-300">
              Stay connected with BTS fan updates, music award news, and global fan activities.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6 shadow-xl">
            <h2 className="text-2xl font-semibold mb-3">Voting Support</h2>
            <p className="text-gray-300">
              Support your favorite BTS members by participating through official award voting platforms.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6 shadow-xl">
            <h2 className="text-2xl font-semibold mb-3">Business Contact</h2>
            <p className="text-gray-300">
              For collaborations, partnerships, and fan community projects, contact our support team.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Vote for BTS Members</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {members.map((member) => (
              <div
                key={member}
                className="bg-gradient-to-br from-purple-700 to-pink-600 rounded-3xl p-6 shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-3">{member}</h3>
                <p className="text-sm mb-5 text-gray-100">
                  Show your support during the K-POP Global Music Awards season.
                </p>
                <button className="bg-white text-black px-5 py-2 rounded-2xl font-semibold hover:scale-105 transition-transform">
                  Vote Now
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-zinc-900 rounded-3xl p-8 mb-10">
          <h2 className="text-3xl font-bold mb-4">Official Voting Notice</h2>
          <p className="text-gray-300 leading-7">
            Due to heavy traffic during award season, some fans may experience delays or failed submissions while voting online. Please use only official and verified voting platforms.
          </p>
        </section>

        <footer className="text-center py-8 text-gray-500 text-sm">
          © 2026 K-POP Global Music Awards Vote • BTS Fan Community
        </footer>
      </div>
    </div>
  );
}