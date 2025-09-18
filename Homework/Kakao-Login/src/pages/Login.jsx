import { supabase } from "../superbase/client";

export default function Login() {
  const login = async () => {
    // 카카오 OAuth 로그인 구현
    const origin = window.location.origin;
    await supabase.auth.signInWithOAuth({
      provider: "kakao",
      options: {
        redirectTo: `${origin}/auth/callback?next=/profile`,
        scopes: "account_email profile_nickname profile_image",
      },
    });
  };

  return <button onClick={login}>카카오로 로그인</button>;
}
