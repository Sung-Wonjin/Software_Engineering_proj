import React from 'react';
const [id, setId] = React.useState("");
const [pwd, setPwd] = React.useState("");

/*생략*/

const logon = () => {
    <><nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">소공 프로젝트</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">홈</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">카테고리</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">장바구니</a>
                    </li>
                </ul>
            </div>
            <div class="search">
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                </form>
            </div>
            <div>
                <button class="btn btn-outline-success" type="submit">검색</button>
            </div>
            <div>
                <form class="container-fluid justify-content-start">
                    <button class="btn btn-outline-success me-2" type="button">로그인</button>
                </form>
            </div>
            <div>
                <button class="btn btn btn-outline-secondary" type="button">회원가입</button>
            </div>
        </div>
    </nav><main class="form-signin">
            <form>
                <img class="mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
                    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                    <div class="form-floating">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                            <label for="floatingInput">Email address</label>
                        </input></div>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                            <label for="floatingPassword">Password</label>
                        </input></div>

                    <div class="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me"> Remember me
                            </input></label>
                    </div>
                    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <p class="mt-5 mb-3 text-muted">© 2017–2022</p>
                </img></form>
        </main></>

  };

/*생략*/
  
  export default logon;
  