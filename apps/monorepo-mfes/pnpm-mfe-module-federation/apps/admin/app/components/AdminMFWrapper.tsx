import { Link } from "react-router";

export default function AdminMFWrapper() {
  return (
    <>
      <div>Admin MF Wrapper</div>
      <Link to="/user">User</Link>
      <Link to="/company">Company</Link>
    </>
  );
}
