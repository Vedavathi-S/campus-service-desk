import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link to="/dashboard" className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 font-bold text-white">
            CS
          </div>

          <div>
            <h1 className="font-bold text-slate-800">
              Campus Service Desk
            </h1>

            <p className="text-xs text-slate-500">
              Student Portal
            </p>
          </div>

        </Link>

        <div className="hidden items-center gap-6 md:flex">

          <Link
            to="/dashboard"
            className="text-sm font-medium text-slate-600 hover:text-blue-600"
          >
            Dashboard
          </Link>

          <Link
            to="/tickets"
            className="text-sm font-medium text-slate-600 hover:text-blue-600"
          >
            My Tickets
          </Link>

          <Link
            to="/create-ticket"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            + New Request
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;