"use client";

const debts = [
  {
    name: "BCA Card",
    balance: "Rp 12M",
    due: "12 May",
    color: "bg-red-500",
    progress: "68%",
    interest: "18%",
  },
  {
    name: "Kredivo",
    balance: "Rp 4.5M",
    due: "18 May",
    color: "bg-orange-500",
    progress: "45%",
    interest: "12%",
  },
  {
    name: "Car Loan",
    balance: "Rp 80M",
    due: "28 May",
    color: "bg-emerald-500",
    progress: "79%",
    interest: "6%",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex">
      <aside className="w-64 border-r border-zinc-800 p-6 hidden md:block">
        <h1 className="text-3xl font-bold mb-10">DebtDash</h1>

        <nav className="space-y-3 text-zinc-300">
          {[
            "Dashboard",
            "Debts",
            "Analytics",
            "Planner",
            "Transactions",
            "Goals",
            "Settings",
          ].map((item) => (
            <button
              key={item}
              className="w-full text-left p-3 rounded-xl hover:bg-zinc-800 transition"
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold">Good Evening 👋</h2>
            <p className="text-zinc-400">
              Here’s your debt overview today
            </p>
          </div>

          <button className="bg-emerald-500 px-5 py-3 rounded-2xl font-semibold">
            + Add Debt
          </button>
        </div>

        <section className="grid md:grid-cols-4 gap-4">
          {[
            ["Total Debt", "Rp 96.5M"],
            ["Monthly Payment", "Rp 4.2M"],
            ["Debt Ratio", "42%"],
            ["Debt Free Goal", "Oct 2028"],
          ].map(([title, value]) => (
            <div
              key={title}
              className="bg-zinc-900 rounded-3xl p-5 border border-zinc-800"
            >
              <p className="text-zinc-400 text-sm">{title}</p>
              <h3 className="text-2xl font-bold mt-2">{value}</h3>
            </div>
          ))}
        </section>

        <section className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
            <div className="flex justify-between mb-6">
              <h3 className="text-xl font-bold">Debt Progress</h3>

              <span className="text-emerald-400">
                -12% this month
              </span>
            </div>

            <div className="space-y-5">
              {debts.map((debt) => (
                <div key={debt.name}>
                  <div className="flex justify-between mb-2 text-sm">
                    <span>{debt.name}</span>
                    <span>{debt.balance}</span>
                  </div>

                  <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className={`${debt.color} h-full rounded-full`}
                      style={{ width: debt.progress }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800 space-y-5">
            <h3 className="text-xl font-bold">
              AI Recommendation
            </h3>

            <div className="bg-zinc-800 rounded-2xl p-4 text-sm text-zinc-300">
              Focus paying BCA Card first because it has the
              highest interest rate.
            </div>

            <div className="bg-zinc-800 rounded-2xl p-4 text-sm text-zinc-300">
              Adding Rp 500K/month can accelerate payoff by 11
              months.
            </div>

            <button className="w-full bg-white text-black py-3 rounded-2xl font-semibold">
              Generate Plan
            </button>
          </div>
        </section>

        <section className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">
              Upcoming Bills
            </h3>

            <button className="text-emerald-400">
              View All
            </button>
          </div>

          <div className="space-y-4">
            {debts.map((debt) => (
              <div
                key={debt.name}
                className="flex items-center justify-between bg-zinc-800 rounded-2xl p-4"
              >
                <div>
                  <p className="font-semibold">{debt.name}</p>
                  <p className="text-zinc-400 text-sm">
                    Due {debt.due}
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-bold">{debt.balance}</p>

                  <button className="text-emerald-400 text-sm mt-1">
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
