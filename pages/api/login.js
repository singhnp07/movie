const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
let users = [
  {
    id: 0,
    username: "makan",
    email: "makan@google.com",
    password: "QuickPass123@",
  },
];
const login = (email, passwords) => {
  const username = email;
  const password = passwords;

  if (!username || !password) {
    return {
      error: "WRONG_CREDENTIAL",
      message: `Both Username and Password are required.`,
    };
  }

  if (!isUserExists(username)) {
    return {
      error: "USER_NOT_FOUND",
      message: `${username} is not defined, make sure the user is registered before.`,
    };
  }

  const user = findUser(username); //user={}

  // console.log(hashedPassword);

  if (!checkPassword(user.email, passwords)) {
    return {
      error: "WRONG_CREDENTIAL",
      message: "Your Password is wrong)",
    };
  }

  // Create new token by username
  const token = jwt.sign(
    { username: user.username, email: user.email, id: user.id },
    "reorieorep",
    {
      expiresIn: 3000, // 50min
    }
  );

  return {
    payload: {
      token,
    },
  };
};

function hashPassword(password) {
  return bcrypt.hashSync(password, 10);
}
function checkPassword(email, password) {
  const object = findUser(email);
  console.log("object", object, password);
  if (object?.password == password) {
    return true;
  } else {
    return false;
  }
}

function isUserExists(username) {
  return findUser(username) || false;
}
function findUser(username) {
  return users.find((user) => user.email === username);
}
export default (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({
      error: "METHOD_NOT_ALLOWED",
      message: `${req.method} is not allowed.`,
    });
    return;
  }
  const body = JSON.parse(req.body);
  res.status(200).json(login(body.email, body.password));
};
