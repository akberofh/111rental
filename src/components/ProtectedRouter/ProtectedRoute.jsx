import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../supabase/supabase";

const ProtectedRoute = ({ adminOnly = false }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (!error) {
        setUser(data.user);
      }
      setLoading(false);
    };
    fetchUser();
  }, []);

  if (loading) return <p>Loading...</p>; 

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && user.email !== "admin@admin") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
