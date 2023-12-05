const ApiError = require("../error/ApiError");
const { User } = require("../models/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UserController {
  async registration(req, res, next) {
    const { name, surname, nickname, email, password } = req.body;

    //Проверка, указана ли почта и пароль
    if (!email || !password) {
      return next(ApiError.badRequest("Некорректный email или пароль"));
    }

    // Проверка, указан ли псевдоним
    if (!nickname) {
      return next(ApiError.badRequest("Необходимо указать ваш псевдоним!"));
    }

    // Проверка, существует ли уже пользователь с такой почтой
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(
        ApiError.badRequest("Пользователь с такой почтой уже зарегистрирован")
      );
    }

    // Проверка, существует ли уже пользователь с таким ником (псевдонимом)
    const candidateAgain = await User.findOne({ where: { nickname } });
    if (candidateAgain) {
      return next(
        ApiError.badRequest("Пользователь с таким ником уже существует")
      );
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({
      name,
      surname,
      nickname,
      email,
      password: hashPassword,
    });
    const token = jwt.sign(
      { name, surname, nickname, email, password },
      process.env.SECRET_KEY,
      {
        expiresIn: "24h",
      }
    );
    return res.json({ token });
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.badRequest("Пользователь не найден"));
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.badRequest("Неправильный пароль!"));
    }
    const token = jwt.sign({ email, password }, process.env.SECRET_KEY, {
      expiresIn: "24h",
    });
    return res.json({ token });
  }

  async check(req, res, next) {
    // const { email, password } = req.body
    // const token = jwt.sign({ email, password }, process.env.SECRET_KEY, {
    //     expiresIn: "24h",
    //   });
    //   return res.json({ token });
    res.json({
      title: "greetings!",
      message: "Hello from back!",
    });
  }
}

module.exports = new UserController();
