import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import api from '../../Services/api';

const AuthCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const processarLogin = async () => {
      const params = new URLSearchParams(location.search);
      const token = params.get('token');

      if (token) {
        try {
          localStorage.setItem('token', token);
          api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

          const response = await api.get("/Usuarios/me");
          
          localStorage.setItem("usuario", JSON.stringify(response.data));

          navigate('/Gallery', { replace: true });
        } catch (error) {
          console.error("Falha ao buscar dados do usuário:", error);
          localStorage.removeItem("token");
          navigate('/', { replace: true });
        }
      } else {
        navigate('/', { replace: true });
      }
    };

    processarLogin();
  }, [location, navigate]);

  return <div>Autenticando...</div>;
};

export default AuthCallback;
