const body = document.querySelector("body")
body.setAttribute("style", "backGround: #093545; display: flex; align-items: center; justify-content: center; min-height: 85vh;")

const box = document.querySelector(".box")

const h1 = document.createElement("h1")
h1.innerText = "Sign in"
h1.setAttribute("style", "font-size: 50px; color: #fff; font-family: 'Roboto',sans-serif; margin-bottom: 20px; text-align: center;")

const p = document.createElement("p")
p.innerText = "Sign in and start managind your candidates!"
p.setAttribute("style", "font-size: 17px; color: #fff; font-family: 'Roboto',sans-serif; margin-bottom: 40px; text-align: center;")

const form = document.createElement("form")
form.setAttribute("style", "width: 280px; margin: 0 auto;")
box.append(h1, p, form)
const loginInp = document.createElement("input")
loginInp.setAttribute("type", "text")
loginInp.setAttribute("placeholder", "Login")
loginInp.setAttribute("style", "width: 260px;height: 40px; padding-left: 15px;background-color: rgba(141, 141, 141, 0.445);border: none;color: wheat;border-radius: 10px;outline: none; margin-bottom: 20px")

const passInp = document.createElement("input")
passInp.setAttribute("type", "text")
passInp.setAttribute("placeholder", "Password")
passInp.setAttribute("style", "width: 260px;height: 40px; padding-left: 15px;background-color: rgba(141, 141, 141, 0.445);border: none;color: wheat;border-radius: 10px;outline: none; margin-bottom: 30px")

const btn = document.createElement("button")
btn.innerText = "Login"
btn.setAttribute("style", "width: 280px;height: 45px; background-color: #179857; border: none; border-radius: 10px;cursor: pointer;font-size: 18px; font-family: 'Roboto'; color: white")

form.append(loginInp, passInp, btn)