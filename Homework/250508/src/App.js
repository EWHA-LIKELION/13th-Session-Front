import './App.css';

function App() {
  return (
    <div className="screen">
      <div className="div">
        <div className="overlap-group">
          <div className="frame">
            <div className="text-wrapper">모달 만들기</div>
          </div>
          <div className="text-wrapper-2">트랙을 선택해주세요.</div>
          <div className="text-wrapper-3">기획&amp;디자인</div>
          <div className="text-wrapper-4">프론트엔드</div>
          <div className="text-wrapper-5">백엔드</div>
          <img className="line" src="img/line-35.svg" alt="line" />
          <div className="text-wrapper-6">🫳아기사자를 응원해요🫳</div>
          <div className="create-a-namemodal">react1 homework</div>
          <img src="/logo_design.png"/>
          <img src="/logo_frontend.png"/>
          <div className="image-wrapper">
            <img src="/logo_backend_.png" alt="백엔드 로고"/>
          </div>
        </div>
        <div className="overlap">
          <div className="text-wrapper-7">아기사자를 응원합니다!</div>
        </div>
      </div>
    </div>
  );
}
export default App;
