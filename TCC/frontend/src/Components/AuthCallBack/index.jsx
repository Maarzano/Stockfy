import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import api from '../../Services/api';  // Ajuste o caminho conforme seu projeto

const AuthCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const processarLogin = async () => {
      const params = new URLSearchParams(location.search);
      const token = params.get('token');

      if (token) {
        try {
          // Salva o token no localStorage temporariamente
          localStorage.setItem('token', token);
          api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

          // Busca os dados do usuário no backend usando o token
          const response = await api.get("/Usuarios/me");  // Endpoint que retorna o usuário logado
          
          // Salva os dados do usuário no localStorage
          localStorage.setItem("usuario", JSON.stringify(response.data));

          // Redireciona para a página principal
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
