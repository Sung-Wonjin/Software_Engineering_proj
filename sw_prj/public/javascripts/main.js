import '../stylesheets/bootstrap.css';

const main = () => {
    return (
      
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
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
    
    </nav>
    );
  }
  export default main