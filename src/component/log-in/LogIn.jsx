import { useHistory, withRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./LogIn.scss";
import { authenServices } from "../../services/authenServices";
import { toast } from "react-toastify";

function LogIn() {
  const [valueAccount, setValueAccount] = useState({
    username: "",
    password: "",
  });
  const [valueSignUp, setValueSignUp] = useState({
    username: "",
    email: "",
    password: "",
  });
  const history = useHistory();

  useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");
    signUpButton?.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    signInButton?.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
  });

  function handleChangeUsername(e) {
    setValueAccount({ ...valueAccount, username: e.target.value });
  }

  function handleChangePassword(e) {
    setValueAccount({ ...valueAccount, password: e.target.value });
  }

  const checkSignIn = () => {
    authenServices.signInVersion2(valueAccount).then((res) => console.log(res));
    authenServices
      .signIn(valueAccount)
      .then((res) => {
        history.push("/");
      })
      .catch((err) => {
        toast(err.response.data, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const checkSignUp = () => {
    if (
      valueSignUp.username === "" ||
      valueSignUp.password === "" ||
      valueSignUp.email === ""
    ) {
      toast("Bạn phải nhập đầy đủ thông tin!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      authenServices
        .signUpVersion2(valueSignUp)
        .then((res) => console.log(res));

      authenServices
        .signUp(valueSignUp)
        .then((res) => {
          if (res.status === 200) {
            toast("Tạo tài khoản thành công!", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        })
        .catch((err) => {
          toast(err.response.data, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    }
  };

  function handleNameSignUp(e) {
    setValueSignUp({ ...valueSignUp, username: e.target.value });
  }

  function handleEmailSignUp(e) {
    setValueSignUp({ ...valueSignUp, email: e.target.value });
  }

  function handlePasswordSignUp(e) {
    setValueSignUp({ ...valueSignUp, password: e.target.value });
  }

  return (
    <div className="login-page pt-1">
      <h2>Đăng nhập/ Đăng ký</h2>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="javascript:void(0);">
            <h1>Tạo tài khoản</h1>
            <input
              type="text"
              placeholder="Tên tài khoản"
              value={valueSignUp.username}
              onChange={handleNameSignUp}
            />
            <input
              type="email"
              placeholder="Email"
              value={valueSignUp.email}
              onChange={handleEmailSignUp}
            />
            <input
              type="password"
              placeholder="Mật khẩu"
              value={valueSignUp.password}
              onChange={handlePasswordSignUp}
            />
            <button onClick={() => checkSignUp()}>Đăng ký</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="javascript:void(0);">
            <h1>Đăng nhập</h1>
            <input
              value={valueAccount.username}
              type="texts"
              placeholder="Tài khoản"
              onChange={handleChangeUsername}
            />
            <input
              value={valueAccount.password}
              type="password"
              placeholder="Mật khẩu"
              onChange={handleChangePassword}
            />
            <a>Quên mật khẩu</a>
            <button onClick={() => checkSignIn()}>Đăng nhập</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Chào mừng trở lại!</h1>
              <p>Đăng nhập với tài khoản cá nhân</p>
              <button className="ghost" id="signIn">
                Đăng nhập
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Chào bạn!</h1>
              <p>Nhập tài khoản và mật khẩu để bắt đầu hành với chúng tôi</p>
              <button className="ghost" id="signUp">
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <footer>
	<p>
		Created with <i className="fa fa-heart"></i> by our team
	</p>
</footer> */}
    </div>
  );
}

export default withRouter(LogIn);
