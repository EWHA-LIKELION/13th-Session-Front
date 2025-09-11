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

      // TODO(과제): oob_code와 email이 존재하면 Supabase 세션을 생성하세요.
      if (oob && email) {
        // 1) Supabase에 이 OOB 코드가 맞는지 확인 요청
        const { error } = await supabase.auth.verifyOtp({
          email,
          token: oob,
          type,
        });

        // 2) 실패하면 로그인 실패 메시지
        if (error) {
          setMessage(`세션 생성 실패: ${error.message}`);
          return;
        }
      }

      // 힌트: supabase.auth.verifyOtp({ email, token: oob, type }) 사용
      // const { error } = await supabase.auth.verifyOtp({ ... })
      // if (error) { setMessage(...); return; }

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
