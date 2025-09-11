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

      // Edge Function이 반환한 oob_code가 쿼리에 있을 수도 있음
      const oob = url.searchParams.get("oob_code");
      const email = url.searchParams.get("email");
      const type = url.searchParams.get("type") || "magiclink";

      // oob_code와 email이 존재하면 Supabase 세션을 생성
      // Edge Function이 반환한 oob_code가 쿼리에 있을 수도 있음
      if (oob && email) {
        const { error } = await supabase.auth.verifyOtp({
          // const { error } = await supabase.auth.verifyOtp({ ... })
          // 힌트: supabase.auth.verifyOtp({ email, token: oob, type }) 사용
          email,
          token: oob,
          type,
        });

        // if (error) { setMessage(...); return; }
        if (error) {
          setMessage(`인증 실패: ${error.message}`);
          return;
        }
      }
    })();
  }, [navigate]);

  return <div style={{ padding: 24 }}>{message}</div>;
};

export default AuthCallback;
