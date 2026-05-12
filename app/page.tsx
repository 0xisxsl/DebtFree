"use client";
              ))}
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800 space-y-5">
            <h3 className="text-2xl font-bold">
              AI Recommendation
            </h3>

            <div className="bg-zinc-800 rounded-2xl p-5 text-sm text-zinc-300 leading-relaxed">
              Focus paying BCA Card first because it has the
              highest interest rate.
            </div>

            <div className="bg-zinc-800 rounded-2xl p-5 text-sm text-zinc-300 leading-relaxed">
              Adding Rp 500K/month can accelerate payoff by 11
              months.
            </div>

            <div className="bg-zinc-800 rounded-2xl p-5 text-sm text-zinc-300 leading-relaxed">
              Your debt ratio improved 7% compared to last
              month.
            </div>

            <button className="w-full bg-white text-black py-4 rounded-2xl font-semibold hover:opacity-90 transition">
              Generate Smart Plan
            </button>
          </div>
        </section>

        <section className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">
              Upcoming Bills
            </h3>

            <button className="text-emerald-400 hover:text-emerald-300 transition">
              View All
            </button>
          </div>

          <div className="space-y-4">
            {debts.map((debt) => (
              <div
                key={debt.name}
                className="bg-zinc-800 rounded-2xl p-5 flex items-center justify-between hover:bg-zinc-700 transition"
              >
                <div>
                  <p className="font-semibold text-lg">
                    {debt.name}
                  </p>

                  <p className="text-zinc-400 text-sm">
                    Due {debt.due}
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-bold text-lg">
                    {debt.balance}
                  </p>

                  <button className="text-emerald-400 text-sm mt-1 hover:text-emerald-300">
                    Pay Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
