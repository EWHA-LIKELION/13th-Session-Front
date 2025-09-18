import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../superbase/client";

const AuthCallback = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("처리 중...");

  useEffect(() => {
    (async () => {
      const url = new URL(window.location.href);
      const error = url.searchParams.get("error");
      const next = url.searchParams.get("next") || "/";

      if (error) {
        setMessage(`로그인 실패: ${error}`);
        return;
      }

      // 인가코드(code)로 세션을 교환
      const code = url.searchParams.get("code");
      if (code) {
        const { error: exchangeError } =
          await supabase.auth.exchangeCodeForSession(code);
        if (exchangeError) {
          setMessage(`세션 생성 실패: ${exchangeError.message}`);
          return;
        }
      }

      const { data } = await supabase.auth.getSession();
      if (data.session) {
        navigate(next, { replace: true });
      } else {
        setMessage("세션이 없습니다. 다시 로그인 해주세요.");
      }
    })();
  }, [navigate]);

  return <div style={{ padding: 24 }}>{message}</div>;
};

export default AuthCallback;
