// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { supabase } from "../superbase/client";

// const AuthCallback = () => {
// 	const navigate = useNavigate();
// 	const [message, setMessage] = useState("처리 중...");

// 	useEffect(() => {
// 		(async () => {
// 			const url = new URL(window.location.href);
// 			const error = url.searchParams.get("error");
// 			const next = url.searchParams.get("next") || "/";

// 			if (error) {
// 				setMessage(`로그인 실패: ${error}`);
// 				return;
// 			}

// 			// Edge Function이 반환한 oob_code가 쿼리에 있을 수도 있음
// 			// const oob = url.searchParams.get("oob_code");
// 			// const email = url.searchParams.get("email");
// 			// const type = url.searchParams.get("type") || "magiclink";

// 			// TODO(과제): oob_code와 email이 존재하면 Supabase 세션을 생성하세요.
// 			// 힌트: supabase.auth.verifyOtp({ email, token: oob, type }) 사용
// 			// const { error } = await supabase.auth.verifyOtp({ ... })
// 			// if (error) { setMessage(...); return; }

// 			const { data } = await supabase.auth.getSession();
// 			if (data.session) {
// 				navigate(next, { replace: true });
// 			} else {
// 				setMessage("세션이 없습니다. 다시 로그인 해주세요.");
// 			}
// 		})();
// 	}, [navigate]);

// 	return <div style={{ padding: 24 }}>{message}</div>;
// };

// export default AuthCallback;

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

			// TODO: 인가코드(code)로 세션을 교환하세요.
			// 힌트: const code = url.searchParams.get('code')
			// 힌트: await supabase.auth.exchangeCodeForSession(code)
			// 에러가 있으면 setMessage로 표시하고 return 하세요.
			// 아래는 예시 형태입니다.
			// const code = url.searchParams.get('code');
			// if (code) {
			// 	const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);
			// 	if (exchangeError) {
			// 		setMessage(`세션 생성 실패: ${exchangeError.message}`);
			// 		return;
			// 	}
			// }

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
