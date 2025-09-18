import { supabase } from "../superbase/client";

export default function Login() {
	const login = async () => {
		try {
			const origin = window.location.origin;
			const { error } = await supabase.auth.signInWithOAuth({
				provider: "kakao",
				options: {
					redirectTo: `${origin}/auth/callback?next=/profile`,
					scopes: "account_email profile_nickname profile_image",
				},
			});
			if (error) {
				alert(`로그인 시작 실패: ${error.message}`);
			}
			return; // 성공 시 카카오로 리다이렉트 → 더 진행하지 않음
		} catch (e) {
			alert(`로그인 시작 실패: ${e?.message ?? e}`);
			return;
		}
	};

  return <button onClick={login}>카카오로 로그인</button>;
}
		// TODO: 아래 주석을 보고 코드를 완성하세요.
		// 1) origin을 구합니다. (힌트: window.location.origin)
		// 2) supabase.auth.signInWithOAuth를 호출합니다.
		//    - provider: 'kakao'
		//    - options.redirectTo: `${origin}/auth/callback?next=/profile`
		//    - options.scopes: 'account_email profile_nickname profile_image'

		// 예시)
		// const origin = ...;
		// await supabase.auth.signInWithOAuth({
		// 	provider: 'kakao',
		// 	options: {
		// 		redirectTo: `${origin}/auth/callback?next=/profile`,
		// 		scopes: 'account_email profile_nickname profile_image',
		// 	},
		// });