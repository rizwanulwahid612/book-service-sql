"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const users_controller_1 = require("./users.controller");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), users_controller_1.userController.insertIntiDB);
router.get('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), users_controller_1.userController.findAllUsers);
router.get('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), users_controller_1.userController.getSingleUsers);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), users_controller_1.userController.updateUsers);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.CUSTOMER), users_controller_1.userController.deleteUsers);
// router.get(
//   '/profile',
//   auth(ENUM_USER_ROLE.CUSTOMER, ENUM_USER_ROLE.ADMIN),
//   userController.getUserProfile
// );
exports.usersRouter = router;
