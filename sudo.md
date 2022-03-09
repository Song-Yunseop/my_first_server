<!-- 로그인

아이디 비밀번호 받기
현재 들어온 사용자가 로그인 되어있는지 확인
디비에 들어가서 해당 사용자가 있는지 확인
해당 디비의 데이터와 해당 유저가 보낸 패스워드가 맞는지 확인
해당 유저의 토큰을 보내주기
->
input :[아이디, 비밀번호]
output :[토큰]

토큰 확인 작업
디비에 조회 (해당 아이디로)
조회한 데이터의 비밀번호 == input 비밀번호 같은지 확인
해당 유저의 토큰 보내주기

input :[아이디, 비밀번호]
output :[토큰]

if(토큰) {
    retrun 돌아가기
} 
변수A = 디비조회(아이디로)
if((변수A.비밀번호 == 비밀번호)아니라면) {
    return 돌아가기
}
return 토큰생성
const authorization = req.headers[location]
import users from './models'

function 로그인(아이디:string, 패스워드:string, 토큰?:string) {
    if(토큰){
        return;
    }
    const 디비의유저 = await user.findOne({아이디})
    if(디비의유저.패스워 !== 패스워드) {
        return;
    }
    const 보낼토큰 = jwt.sign(
        
    )
} -->


const loginService = async (req, res) => {
  const { email, password } = req.body;
  if (!email && !password) {
    return res.send({ msg: '이메일 또는 패스워드를 넣어주세요.!', success: false });
  }
  try {
    const existUser = await users.findOne({ where: { email } });
    if (!existUser) {
      return res.send({ msg: '해당 이메일이 존재하지 않습니다.', success: false });
    }
    if (existUser.password !== password) {
      return res.send({ msg: '비밀번호가 틀렷습니다.', success: false });
    }
    return res.send({ msg: '로그인 성공', success: true, data: existUser });
  } catch (error) {
    return res.send({ msg: '알수없는 에러', success: false, error });
  }
};

로그인서비스
이메일과 패스워드 받기
이메일이나 패스워드가 공백이면 이메일또는 패스워드를 넣어주세요
받은 이메일값을 유저디비에서 조회
조회가 되지않는다면 해당 이메일이 존재하지 않습니다. 보내주기
조회한 유저의패스워드랑 받아온 패스워드랑 일치하지 않는다면 비밀번호가 틀렷습니다. 보내주기
일치한다면 로그인 성공, 해당유저정보 보내주기

input :[이메일, 패스워드]
output :[성공메시지, 해당유저정보]

함수(로그인서비스) = 
바디값[이메일, 패스워드]
if(이메일 그리고 패스워드가 공백이면)
    이메일또는 패스워드를 넣어주세요
함수(해당유저정보) = 디비 유저.findOne{이메일}
if(!해당유저정보)
    해당 이메일이 존재하지않습니다
if(해당유저정보.패스워드 !== 받은 패스워드)
    비밀번호가 틀립니다
로그인성공, 해당유저정보

const singupService = async (req, res) => {
  const { email, password, password2, name } = req.body;
  if (!email && !password && !password2 && !name) {
    return res.send({ msg: '입력값을 전부다 채워주세요..!', success: false });
  }
  if (password !== password2) {
    return res.send({ msg: '페스워드가 일치하지 않습니다.', success: false });
  }
  try {
    await users.create({ email, password, name });
    return res.send({ msg: '회원가입 성공', success: true });
  } catch (error) {
    return res.send({ msg: '알수없는 에러', success: false, error });
  }
};

회원가입서비스
input :[이메일, 패스워드, 패스워드2, 이름]

함수(회원가입서비스) =
바디값[이메일, 패스워드, 패스워드2, 이름]
함수(이메일중복확인) = 유저.이메일(이메일)
if(이메일중복확인)
    이메일이 이미 존재합니다.
if( 이메일, 패스워드, 패스워드2, 이름 중에 하나라도 공백이면)
    입력값을 전부 다 채워주세요 보내기
if( 패스워드 !== 패스워드2)
    패스워드가 일치하지 않습니다.
회원가입 성공



const getUserService = async (req, res) => {
  return res.send({ msg: '성공', success: true, data: res.locals.users });
};

유저조회
미들웨어 거치기
조회성공, 유저데이터 보내기

const getBoardService = async (req, res) => {
    const { id } = req.query;
    try {
        if (id) {
            const boards = await board.findAll({ where: { id: id } });
            return res.send({ msg: '성공', success: true, data: boards });
        } else {
            const boards = await board.findAll();
            console.log(boards);
            return res.send({ msg: '성공', success: true, data: boards });
        }
    } catch (error) {
        return res.send({ msg: '알수없는 에러', success: false, data: error });
    }
};

게시판서비스조회
input :[아이디]
output  :[성공메시지, 보드데이터]

함수(보드서비스조회) =
  쿼리[아이디]
if(아이디) {
    보드 = 보드.findAll(아이디: 아이디)
} else {
    보드 = 보드.findAll();
    메세지(보드)
    성공, 보드 데이터 내보내기
}


const postBoardService = async (req, res) => {
    const { title, text } = req.body;
    if (!title) {
        return res.send({ msg: '타이틀을 넣어주세요..!', success: false });
    }
    try {
        const boards = await board.create({ title, text, userid: res.locals.users.id });
        return res.send({ msg: '성공', success: true, data: boards });
    } catch (error) {
        return res.send({ msg: '알수없는 에러', success: false, data: error });
    }
};

게시판글쓰기
input :[title, text]
output :[성공메시지, 보드데이터]

함수(게시판글쓰기) =
  바디[title, text]
if(!타이틀) {
  타이틀을 넣어주세요, 실패 보내기
}
  게시판글 = 보드.create({title, text, userid: res.locals.users.id})
  성공메시지, 게시판글데이터 보내기


const patchBoardService = async (req, res) => {
    const { title, text } = req.body;
    const id = req.query.id;
    if (!title) {
        return res.send({ msg: '타이틀을 넣어주세요..!', success: false });
    }
    try {
        const boards = await board.update({ title, text }, { where: { id: id } });
        return res.send({ msg: '성공', success: true, data: boards });
    } catch (error) {
        console.log(error);
        return res.send({ msg: '알수없는 에러', success: false, data: error });
    }
};

게시판글수정
input :[title, text, id]
output :[성공 게시판글]

함수(게시판글수정) =
  바디[title, text]
  쿼리[id]
if(!타이틀) {
  타이틀을 넣어주세요, 실패 보내기
}
게시판글 = 보드.update({ title, text }, { where: { id: id } });
성공, 게시판글 보내주기

const deleteBoardService = async (req, res) => {
    const { boardId } = req.params;
    if (!boardId) {
        return res.send({ msg: '해당 id를 넣어주세요', success: false });
    }
    try {
        const existBoards = await board.findByPk(boardId);
        if (!existBoards) {
            return res.send({ msg: '해당 게시글이 존재하지 않습니다.', success: false });
        }
        await existBoards.destroy();
        return res.send({ msg: '성공', success: true });
    } catch (error) {
        console.log(error);
        return res.send({ msg: '알수없는 에러', success: false, data: error });
    }
};

게시판글삭제
input[boardId]
output[성공메시지]

함수(게시판글삭제) =
파람스[boardId]
if(!boardId) {
  해당 id를 넣어주세요
}
게시판글확인 = 보드.findByPk(boardId)
if(!게시판글확인) {
  해당 게시글이 존재하지 않습니다.
}
게시판글확인.destroy
성공메시지 보내기